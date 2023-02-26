import { Request, Response } from 'express'
import { Valhalla } from '@routingjs/valhalla'
import { Router } from 'express'

export const router = Router().get('/', async (req: Request, res: Response) => {
    const routingServiceBaseUrl = 'http://localhost:8002'

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
