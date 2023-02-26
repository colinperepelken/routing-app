import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { Valhalla } from '@routingjs/valhalla'

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? 3000

const routingServiceBaseUrl = 'http://localhost:8002'

app.get('/', async (req: Request, res: Response) => {
    const routingClient = new Valhalla({ baseUrl: routingServiceBaseUrl })
    const directions = await routingClient.directions(
        [
            [49.856413, -119.47166],
            [49.85901360673831, -119.49025777469902],
        ],
        'auto',
    )

    res.json(directions)
})

app.listen(port, () => {
    console.log(`⚡️[api]: Server is running at http://localhost:${port}`)
})
