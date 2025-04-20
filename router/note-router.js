const express = require("express");

const [
  getAllNotes,
  getSingleNote,
  addNote,
  EditNote,
  deleteNote,
] = require("../controllers/note-controllers");


const router = express.Router();

router.get('/get', getAllNotes);
router.get('/get/:id', getSingleNote);
router.post('/add', addNote);
router.put('/update/:id', EditNote);
router.delete('/delete/:id', deleteNote);


module.exports = router;