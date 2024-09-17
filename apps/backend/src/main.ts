import express from 'express';
import db from './db/index';
import arcs from './routes/arcs';
import classic from './routes/classic';
import fruit from './routes/fruit';
import wanted from './routes/wanted';
import laugh from './routes/laugh';

const app = express();
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/classic', classic);
app.use('/fruit', fruit);
app.use('/wanted', wanted);
app.use('/laugh', laugh);
app.use('/arcs', arcs);
app.use(express.json());

const getYesterdayUpdate = async () => {
  try {
    const todayLocale = new Date().toLocaleString('en-US', {
      timeZone: 'Europe/Athens',
    });
    const yesterday = new Date(todayLocale);
    yesterday.setDate(yesterday.getDate() - 1);
    console.log(yesterday.toISOString().split('T')[0]);
    // var today = new Date();
    // console.log(today);
    // today.setDate(today.getDate() - 1);
    // var yesterday = today.toISOString().split('T')[0];
    // console.log(yesterday);
    const checkForDate = await db.query(
      'SELECT * FROM daily_characters WHERE date = $1',
      [yesterday]
    );
    if (checkForDate.rows.length == 0) {
      console.log('NO YESTERDAY CHARACTERS');
    } else {
      console.log('FOUND YESTERDAYS CHAR');
      console.log(checkForDate.rows[0]);
      return [
        checkForDate.rows[0].classic_character_id,
        checkForDate.rows[0].fruit_character_id,
        checkForDate.rows[0].wanted_character_id,
        checkForDate.rows[0].laugh_character_id,
        checkForDate.rows[0].date,
      ];
    }
  } catch (err) {
    console.log(err);
  }
};

const getCharacterName = async (id: number) => {
  try {
    const result = await db.query(
      'SELECT char_name FROM characters WHERE id = $1',
      [id]
    );
    console.log(result.rows[0]);
    return result.rows[0];
  } catch (err) {
    console.log(err);
  }
};

app.get('/yesterdays_char', async (req, res) => {
  try {
    const [classicCharID, fruitCharID, wantedCharID, laughCharID, date] =
      await getYesterdayUpdate();
    const classic_char = await getCharacterName(classicCharID);
    const fruit_char = await getCharacterName(fruitCharID);
    const wanted_char = await getCharacterName(wantedCharID['id']);
    const laugh_char = await getCharacterName(laughCharID['id']);
    res.json({ classic_char, fruit_char, wanted_char, laugh_char });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/characters', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM characters');
    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/characters/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM characters WHERE id = $1', [
      id,
    ]);
    if (result.rows.length === 0) {
      res.status(418).send({ message: 'No character with id ' + id });
    } else {
      res.json(result.rows);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(process.env.PORT, () => {
  console.log('Server started on port ' + process.env.PORT);
});
