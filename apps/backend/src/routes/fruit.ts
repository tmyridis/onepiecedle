import express from 'express';
const router = express.Router();
import db from '../db/index';
import { getTodaysUpdate, getCharByID, getRandomChar } from '../utils/index';

// Fruit route: random character.
router.get('/random_char', async (req, res) => {
  try {
    const fruitCharID = await getRandomChar('fruit');
    console.log(fruitCharID);
    const char = await getCharByID(fruitCharID, 'fruit', undefined);
    res.json(char);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// Fruit route: todays character.
router.get('/todays_char', async (req, res) => {
  try {
    const [classicCharID, fruitCharID, wantedCharID, laughCharID, today] =
      await getTodaysUpdate();
    console.log(classicCharID, fruitCharID, wantedCharID, laughCharID, today);
    const char = await getCharByID(fruitCharID, 'fruit', undefined);
    res.json(char);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// Fruit route: all characters.
router.get('/characters', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT id, image, char_name, devil_fruit_type, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation FROM characters',
      []
    );
    res.json(result.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// Fruit route: character by name.
router.get('/characters/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const result = await db.query(
      "SELECT id, image, char_name, devil_fruit_type, devil_fruit_name, devil_fruit_translated, devil_fruit_explanation FROM characters WHERE devil_fruit_type != 'None' AND char_name = $1",
      [name]
    );
    if (result.rows.length === 0) {
      res
        .status(418)
        .send({ message: 'No character with devil fruit and name ' + name });
    } else {
      res.json(result.rows);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

export = router;
