const PlayerModel = require('../models/player.model')

async function routes(app) {
    app.io.on('connection', () => {
        
    })
    app.post('/player/in', async (request, reply) => {

        try {
            const { steamId, steamName } = request.body
            // Find player by steam identifier
            const [player] = await PlayerModel.find({ steamId })
            // Player found
            if (player) {
                app.io.emit('love:login', player)
                reply.send(player)
                return
            }

            // Register new player with steamId
            const newPlayer = new PlayerModel({
                steamId,
                steamName
            })
            await newPlayer.save()
            app.io.emit('love:login', newPlayer)
            return reply.send({ status: 'OK' })
        } catch (err) {
            return reply.code(503)
        }
    })
}

module.exports = routes