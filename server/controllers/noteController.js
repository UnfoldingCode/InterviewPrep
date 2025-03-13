//controllers/noteController.js
const Note = require('../models/note'); //Initialize Note model

//Controller method to get note based on a User (search Id)
exports.getUserNote = async (req, res) => {
    const { userId } = req.params;

    if (!userId){
        return res.status(400).json({ message: 'Please provide ID'});
    }

    try{
        const note = await Note.findByPk(userId);
        if(note){
            res.json({ note });
        } else {
            res.status(404).json({ message: ' User Note not found'});
        }
    } catch (err) {
        res.status(500).json({ message: 'Error fetching user note', err});
    }
};

//Controller method to create note based on user json input
exports.createNote = async (req, res) => {
    const { title, content, userId } = req.body;

    if (!title || !content || !userId){
        return res.status(400).json({ message: 'Please provide title, content, and userId'});
    }

    try {
        const newNote = await Note.create({ title, content, userId });
        res.status(201).json({ message: 'note created successfully', note:newNote});
    
    }catch(err){
        res.status(500).json({ message: 'Error creating note', error: err});
    }
};

//Controller method to delete note based on Id
exports.deleteNote = async (req, res) =>{
    const { id } = req.params;

    try {
        const note = await Note.findByPk(id);
        if(note){
            await note.destroy();
            res.json({ message: 'Note deleted successfully' });
        } else{ 
            res.status(404).json({ message: 'Note not found'});
        } 
    }
        catch (err) {
            res.status(500).json({ message: 'Error deleting note', error: err});
        }
    };

exports.updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content, userId } = req.body;

    if (!title || !content || !userId || id){
        return res.status(400).json({ message: 'Please provide title, content, userId, and ID'});
    }

    try {
        const note = await Note.findByPk(id);
        if(note){
            note.title = title || note.title;
            note.content = content || note.content;
            note.userId = userId || note.userId;

            await note.save();
            res.json({ message: 'Note updated suvvessfully', note });
        } else{
            res.status(404).json({ message: 'Note not found'});
        }
        }catch(err){
            res.status(500).json({ message: 'Error updating note', error: err});
        }
};

exports.getNotes = async (req, res) =>{
    try{
        const allNotes = await Note.findAll();
        res.json({ allNotes });
    } catch (err){
        res.status (500).json({ message: 'Error fetching notes', err });
    }
};

exports.getNote = async (req, res) => {
    const { id } = req.params;

    if (!id){
        return res.status(400).json({ message: 'Please provide ID'});
    }

    try{
        const note = await Note.findByPk(id);
        if(note){
            res.json({ note });
        } else {
            res.status(404).json({ message: 'Note not found'});
        }
    } catch (err) {
        res.status(500).json({ message: 'Error fetching note', err});
    }
};