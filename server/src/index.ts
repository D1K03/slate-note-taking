import express from 'express'
import authRouter from './routes/auth'

const app = express()
const port = 5000;

// Apply middleware ONCE here
app.use(express.json())

// Tell the app to use your auth routes for any request to /api/auth
app.use('/api/auth', authRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});