const express = require('express')
const path=require('path')
const app = express()
const port=3000

const jyotMiddleware =(req,res,next)=>{
    console.log(req)
    // next()
}

app.use(express.static(path.join(__dirname,"public")))
// app.use(jyotMiddleware)

app.get('/hello/:name', (req, res) => {
    res.send("hello"+ req.params.name)
})

app.get('/about', (req, res) => {
    // res.send("about");
    // res.sendFile(path.join(__dirname,'index.html'));
    // res.status(500);//you can change the status
    res.json({"jyot":34})
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})