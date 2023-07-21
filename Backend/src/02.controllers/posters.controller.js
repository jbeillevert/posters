const database = require("../../database")


// Create 

const createOnePoster = (req, res) => {
    const { id_color } = req.body;

    database
        .query('INSERT INTO posters (poster_text, id_color) VALUES (?, ?)', ['', id_color])
        .then(() => res.status(201).send("Poster created"))
        .catch((err) => {
            res.status(500).send("Error creating a new poster")
            console.error(err)
        })
}


// Read

const getAllPosters = (req, res) => {

    database
        .query("SELECT * FROM posters JOIN colors ON posters.id_color = colors.color_id ORDER BY posters.poster_date DESC")
        .then(([posters]) => res.json(posters))
        .catch((err) => res.status(500).send("Error getting data from database", err))
}

// Update

const updateOnePoster = (req, res) => {
    const postersId = Number(req.params.postersId);
    const { poster_text, id_color } = req.body;

    database
        .query('UPDATE posters SET poster_text = ?, id_color = ? WHERE poster_id = ?', [poster_text, id_color, postersId])
        .then(() => res.send("Poster updated"))
        .catch((err) => res.status(500).send(err))
}


// Delete

const deleteOnePoster = (req, res) => {
    const postersId = Number(req.params.postersId);

    database
        .query('DELETE FROM posters WHERE poster_id = ?', [postersId])
        .then(() => res.send("Poster deleted"))
        .catch((err) => res.status(500).send(err))
}



module.exports = {
    createOnePoster,
    getAllPosters,
    updateOnePoster,
    deleteOnePoster,
}