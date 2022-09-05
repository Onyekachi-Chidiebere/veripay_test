
const express = require('express');
const app = express();
const port = process.env.PORT||80

app.get('*',(req, res)=>{
    console.log('route hit')

    return res.send('hello world')
})
app.listen(5001, () => {
    //listen to port
    console.log(`Server started at http://localhost:${port}`);
  });