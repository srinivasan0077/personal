const Express=require('express')
const app=Express()
//require('dotenv').config()

const port=process.env.PORT

app.listen(port)

app.use(Express.static('public'))