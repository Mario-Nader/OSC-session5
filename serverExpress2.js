const express = require ('express')
const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

app.get('/',(req,res) =>{
return res.status(200).send({message : "OSC is awsome"})
})