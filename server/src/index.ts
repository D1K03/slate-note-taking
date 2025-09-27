import express from 'express'

const app = express()
const port = 5000

// Apply middleware ONCE here
app.use(express.json())

// Tell the app to use your auth routes for any request to /api/auth

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
