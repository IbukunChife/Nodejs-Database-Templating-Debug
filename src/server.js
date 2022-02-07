import express from 'express';
import path from 'path';

var app = express();

app.use(express.static('public'));


app.get('/users', function (req, res) {


  res.json('users is functioned')

})

app.get('/users/1',(req, res) => {
  res.json('users is functioned')
})


app.listen(8080);


