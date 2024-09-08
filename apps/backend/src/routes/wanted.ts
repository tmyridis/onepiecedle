import express from 'express';
const router = express.Router();
import db from '../db/index';
import { getTodaysUpdate, getCharByID, getRandomChar } from '../utils/index';

// Wanted route: random character.
router.get('/random_char', async (req, res) => {
  try {
    const wantedCharID = await getRandomChar('wanted');
    console.log(wantedCharID);
    const char = await getCharByID(wantedCharID, 'wanted', undefined);
    res.json(char);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// Wanted route: todays character.
router.get('/todays_char', async (req, res) => {
  try {
    const [classicCharID, fruitCharID, wantedCharID, laughCharID, today] =
      await getTodaysUpdate();
    console.log(classicCharID, fruitCharID, wantedCharID, laughCharID, today);
    const char = await getCharByID(wantedCharID, 'wanted', undefined);
    res.json(char);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// Wanted route: all characters.
router.get('/characters', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT id, image, char_name, bounty, wanted_image FROM characters',
      []
    );
    console.log(result.rows);
    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// Wanted route: character by name.
router.get('/characters/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const result = await db.query(
      'SELECT id, image, char_name, bounty, wanted_image FROM characters WHERE bounty > 0 AND char_name = $1',
      [name]
    );
    if (result.rows.length === 0) {
      res
        .status(418)
        .send({ message: 'No character with wanted picture and name ' + name });
    } else {
      res.json(result.rows);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

export = router;
