require('dotenv').config()
const app = require('fastify')({ logger: false })
const mongoose = require('mongoose')

// Register Socket
app.register(require('fastify-socket.io'), {})

// Allow requests from every host
app.register(require('fastify-cors'), { 
  origin: '*'
})

app.register(require('./controllers/player.controller'))

app.listen(3000, '0.0.0.0', async function (err, address) {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Server is now listening on ${address}`)
  } catch (err) {
    console.log(err)
  }
})

exports = app.io