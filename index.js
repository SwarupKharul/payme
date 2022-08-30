require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const name = process.env.NAME

app.get('/', (req, res) => res.send('Success!'))

app.get('/test', (req, res) => res.redirect(`https://${name}.com`))

app.get('/pay/:amount', (req, res) => {
    if (req.method === 'GET') {
        const { amount } = req.params
        console.log(`${name} is paying ${amount}`)
        if (amount)
            res.redirect(`upi://pay?pa=7828369492@ybl&amp;pn=${name}&amp;cu=INR&amp;am=${amount}`)
        else
            res.redirect(`upi://pay?pa=7828369492@ybl&amp;pn=${name}&amp;cu=INR`)
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})