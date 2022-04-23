const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    steamName: String,
    steamId: String,
    // vehicles: []
});

const PlayerModel = mongoose.model('Player', PlayerSchema);

module.exports = PlayerModel