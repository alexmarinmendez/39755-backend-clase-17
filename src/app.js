import express from 'express'
import compression from 'express-compression'

const app = express()
app.use(compression())

app.get('/stringlargo', (req, res) => {
    let string = 'Este string es muy largo para la request!!!'

    for (let index = 0; index < 10e4; index++) {
        string += '<br>Estamos haciendo aun mas larga la respuesta!</br>'
    }
    res.send(string)
})

app.listen(8080, () => console.log('Server Up!'))
