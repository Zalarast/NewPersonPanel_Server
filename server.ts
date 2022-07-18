import fastify from 'fastify'
import { AuthBody } from './types'

const server = fastify({logger:true})

server.post<{Body: AuthBody}>('/auth', async (req, res) => {
    req.body
})

server.listen({host: "0.0.0.0", port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})