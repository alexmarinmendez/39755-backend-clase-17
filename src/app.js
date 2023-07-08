import express from 'express'

const app = express()

app.get('/stringlargo', (req, res) => {
    let string = 'Este string es muy largo para la request!!!'
    res.send(string)
})

app.listen(8080, () => console.log('Server Up!'))
