import express from 'express'
// import compression from 'express-compression'
import compression from 'compression'

const app = express()
app.use(compression({
    level: 1
}))

app.get('/stringlargo', (req, res) => {
    let string = 'Este string es muy largo para la request!!!'

    for (let index = 0; index < 10e4; index++) {
        string += '<br>Estamos haciendo aun mas larga la respuesta!</br>'
    }
    res.send(string)
})

app.get('/otrostringlargo', (req, res) => {
    const payload = 'Hello World from Coder!!'
    res.send(payload.repeat(100000))
})

app.listen(8080, () => console.log('Server Up!'))
