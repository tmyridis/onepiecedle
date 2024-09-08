import express from 'express';
const router = express.Router();
import db from '../db/index';

router.get('/', async (req, res) => {
  try {
    const arcs = await db.query('SELECT arc_name, arc_order FROM arcs', []);
    res.json(arcs.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

export = router;
