import fastify from 'fastify'
import cors from '@fastify/cors';
import { AuthBody, InfoBody } from './types'
import { initDB, authUser, getInfo } from './SQL/SQL';

const server = fastify({logger:true}).register(cors);

server.post<{Body: AuthBody}>('/auth', async (req, res) => {
  return await authUser(req.body);
})

server.post<{Body: InfoBody}>("/getInfo", async (req, res)=> {
  return await getInfo(req.body)
})

server.listen({host: "0.0.0.0", port: 8080 }, async (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
  await initDB();
})