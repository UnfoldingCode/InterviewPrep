// routes/noteRoutes.js

const express = require('express');
const router1 = express.Router();
const noteController = require('../controllers/noteController');

router1.post('/notes', noteController.createNote);
router1.get('/notes/:userId', noteController.getUserNote);
router1.get('/notes', noteController.getNotes);
router1.get('/notes/:id', noteController.getNote);
router1.put('/notes/:id', noteController.updateNote);
router1.delete('notes/:id', noteController.deleteNote);

module.exports = router1;