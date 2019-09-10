module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create new note
    app.post('/notes', notes.create);

    // Retrieve all notes
    app.get('/notes', notes.findAll);

    // Retrieve single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes:/noteId',notes.update);

    // Delete a note with noteId
    app.delete('/notes/:noteId',notes.delete);
}