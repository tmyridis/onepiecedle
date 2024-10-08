import db from '../db/index';

// Function to post daily update (random classic char id, random fruit char id, wanted char id, todays date) to database
const postDailyUpdateToDB = async (
  classic_id: number,
  fruit_id: number,
  wanted_id: object,
  laugh_id: object,
  date: string
) => {
  try {
    const res = db.query(
      'INSERT INTO daily_characters (id, classic_character_id, fruit_character_id, wanted_character_id, laugh_character_id, date) VALUES (DEFAULT, $1, $2, $3, $4, $5) RETURNING *',
      [classic_id, fruit_id, wanted_id, laugh_id, date]
    );
    console.log(res, 'POSTED');
  } catch (err) {
    console.log(err);
  }
};

// Function to get random characters for all available modes
const getRandomChar = async (type: string) => {
  try {
    var result: {
      rows?: any;
      id?: number;
      laugh?: number;
      wanted_image?: number;
    };
    if (type === 'classic') {
      result = await db.query(
        'SELECT id, image, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name FROM characters ORDER BY random() LIMIT 1'
      );
    } else if (type === 'fruit') {
      result = await db.query(
        "SELECT id, image, char_name, devil_fruit_type, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation FROM characters WHERE devil_fruit_type != 'None' ORDER BY random() LIMIT 1"
      );
    } else if (type === 'wanted') {
      result = await db.query(
        'SELECT id, image, char_name, bounty, wanted_image FROM characters WHERE bounty > 0 ORDER BY random() LIMIT 1'
      );
      var randomWantedPoster = Math.floor(
        Math.random() * result.rows[0].wanted_image.length
      );
      result = { id: result.rows[0].id, wanted_image: randomWantedPoster };
      return result;
    } else if (type === 'laugh') {
      result = await db.query(
        "SELECT id, image, char_name, affiliation, origin, laugh FROM characters WHERE laugh != '{}' ORDER BY random() LIMIT 1"
      );
      var randomLaugh = Math.floor(Math.random() * result.rows[0].laugh.length);
      result = { id: result.rows[0].id, laugh: randomLaugh };
      return result;
    }
    return result.rows[0].id;
  } catch (err) {
    console.log(err);
  }
};

// Function to check for a daily update to the database. If no update for today => get random characters for each mode and post their
// id's to the daily_characters table. If already updated for today => return the id's for today.
const getTodaysUpdate = async () => {
  try {
    // const today = new Date().toISOString().split('T')[0];
    // console.log(today);
    const todayLocale = new Date().toLocaleString('en-US', {
      timeZone: 'Europe/Athens',
    });
    const today = new Date(todayLocale);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) {
      dd = parseInt('0' + dd);
    }
    if (mm < 10) {
      mm = parseInt('0' + mm);
    }

    const formattedToday = mm + '-' + dd + '-' + yyyy;
    console.log(formattedToday);
    const checkForDate = await db.query(
      'SELECT * FROM daily_characters WHERE date = $1',
      [formattedToday]
    );
    if (checkForDate.rows.length == 0) {
      var clearStorage = true;
      console.log('NO UPDATE ON CHARACTERS FOR TODAY');
      var classicCharID = await getRandomChar('classic');
      var fruitCharID = await getRandomChar('fruit');
      var wantedCharID = await getRandomChar('wanted');
      var laughCharID = await getRandomChar('laugh');
      await postDailyUpdateToDB(
        classicCharID,
        fruitCharID,
        wantedCharID,
        laughCharID,
        formattedToday
      );
      return [
        classicCharID,
        fruitCharID,
        wantedCharID,
        laughCharID,
        formattedToday,
        clearStorage,
      ];
    } else {
      var clearStorage = false;
      console.log('ALREADY UPDATED FOR TODAY');
      return [
        checkForDate.rows[0].classic_character_id,
        checkForDate.rows[0].fruit_character_id,
        checkForDate.rows[0].wanted_character_id,
        checkForDate.rows[0].laugh_character_id,
        checkForDate.rows[0].date,
        clearStorage,
      ];
    }
  } catch (err) {
    console.log(err);
  }
};

// Function to return a character based on their id
const getCharByID = async (id: number, type: string, opt: number = -1) => {
  try {
    var result: { rows: any[] };
    if (type === 'classic') {
      result = await db.query(
        'SELECT id, image, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name FROM characters WHERE id = $1',
        [id]
      );
    } else if (type === 'fruit') {
      result = await db.query(
        'SELECT id, image, char_name, devil_fruit_type, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation FROM characters WHERE id = $1',
        [id]
      );
    } else if (type === 'wanted') {
      result = await db.query(
        'SELECT id, image, char_name, bounty, wanted_image FROM characters WHERE id = $1',
        [id]
      );
      if (opt !== -1) {
        result.rows[0].wanted_image = [result.rows[0].wanted_image[opt]];
      }
    } else if (type === 'laugh') {
      result = await db.query(
        'SELECT id, image, char_name, affiliation, origin, laugh FROM characters WHERE id = $1',
        [id]
      );
      if (opt !== -1) {
        result.rows[0].laugh = [result.rows[0].laugh[opt]];
      }
    }
    console.log(result.rows[0]);
    return result.rows[0];
  } catch (err) {
    console.log(err);
  }
};

export { getTodaysUpdate, getCharByID, getRandomChar };
