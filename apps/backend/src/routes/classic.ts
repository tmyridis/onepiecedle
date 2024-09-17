import express from 'express';
const router = express.Router();
import db from '../db/index';
import { getTodaysUpdate, getCharByID, getRandomChar } from '../utils/index';

// Classic route: random character.
router.get('/random_char', async (req, res) => {
  try {
    const classicCharID = await getRandomChar('classic');
    console.log(classicCharID);
    const char = await getCharByID(classicCharID, 'classic', undefined);
    res.json(char);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// Classic route: todays character.
router.get('/todays_char', async (req, res) => {
  try {
    const [
      classicCharID,
      fruitCharID,
      wantedCharID,
      laughCharID,
      today,
      clearStorage,
    ] = await getTodaysUpdate();
    console.log(
      classicCharID,
      fruitCharID,
      wantedCharID,
      laughCharID,
      today,
      clearStorage
    );
    const character = await getCharByID(classicCharID, 'classic');
    res.json({ character, clearStorage });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// Classic route: all characters.
router.get('/characters', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT id, image, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name FROM characters ORDER BY char_name'
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
      'SELECT id, image, char_name, gender, affiliation, devil_fruit_type, haki, bounty, height, origin, first_arc, first_apparition, devil_fruit_name FROM characters WHERE char_name = $1',
      [name]
    );
    if (result.rows.length === 0) {
      res.status(418).send({ message: 'No character with name ' + name });
    } else {
      res.json(result.rows);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

export = router;
