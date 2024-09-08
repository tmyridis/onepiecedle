import express from 'express';
const router = express.Router();
import db from '../db/index';
import { getTodaysUpdate, getCharByID, getRandomChar } from '../utils/index';

// Laugh route: random character.
router.get('/random_char', async (req, res) => {
  try {
    const laughCharID = await getRandomChar('laugh');
    console.log(laughCharID);
    const char = await getCharByID(laughCharID.id, 'laugh', laughCharID.laugh);
    res.json(char);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// Classic route: todays character.
router.get('/todays_char', async (req, res) => {
  try {
    const [classicCharID, fruitCharID, wantedCharId, laughCharId, today] =
      await getTodaysUpdate();
    console.log(classicCharID, fruitCharID, wantedCharId, laughCharId, today);
    const char = await getCharByID(laughCharId.id, 'laugh', undefined);
    res.json(char);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// Classic route: all characters.
router.get('/characters', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT id, image, char_name, affiliation, origin, laugh FROM characters ORDER BY char_name',
      []
    );
    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// Classic route: character by name.
router.get('/characters/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const result = await db.query(
      "SELECT id, image, char_name, affiliation, origin, laugh FROM characters WHERE char_name = $1 AND laugh != '{}'",
      [name]
    );
    if (result.rows.length === 0) {
      res
        .status(418)
        .send({ message: 'No character with laugh and name ' + name });
    } else {
      res.json(result.rows);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

export = router;
