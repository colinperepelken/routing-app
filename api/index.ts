import dotenv from 'dotenv'
import { App } from './src/App'
import { Logger } from './src/logging/Logger'

dotenv.config()

const app = new App()
const port = process.env.PORT ?? 3001

app.express.listen(port, () => {
    Logger.info(`⚡️ Listening on port ${port}`)
})
