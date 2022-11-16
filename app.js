const express = require("express")

// localhost:9100/profile
// localhost:9100/business
// localhost:9100/hobbies

const port = 9100
const app = express()

app.get('/profile', (rec, res) => {
    res.json({
        name: "Walter",
        age: 25,
        country: "COL"
    })
})

app.post('/business', (rec, res) => {
    res.json([
        {
            1: "Mercado Libre",
            2: "Globant",
            3: "Oracle"
        }
    ])
})

app.patch('/hobbies', (rec, res) => {
    res.json([
        {
            1: "Videojuegos",
            2: "Deporte",
            3: "Leer"
        }
    ])
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})