import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world')
})

app.listen(8000, 'localhost', () => {
    console.log('http://localhost:8000')
})