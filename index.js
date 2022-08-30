require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const name = process.env.NAME
const upi_id = process.env.UPI_ID

app.get('/', (req, res) => res.send('Success!'))

app.get('/pay/:amount', (req, res) => {
    if (req.method === 'GET') {
        const { amount } = req.params
        console.log(`${name} is paying ${amount}`)
        if (amount)
            res.redirect(`upi://pay?pa=${upi_id}&amp;pn=${name}&amp;cu=INR&amp;am=${amount}`)
        else
            res.redirect(`upi://pay?pa=${upi_id}&amp;pn=${name}&amp;cu=INR`)
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})