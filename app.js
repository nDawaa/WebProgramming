const express = require('express')
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');

const app = express()
app.listen(3000, function() {
  console.log("The server is listening at port 3000");
})

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
 
app.get('/', function (req, res) {
  res.sendFile(__dirname +"/index.html")
  })

//  // Handling querystring 
  // app.get('/Blog/post?id=11&page=1', function (req, res) {

  //   console.log(req.query.id, req.query.id)
  //   res.send('<h1> Please check your console </h1>');
  // })

  app.get('/Contact', function (req, res) {
    res.sendFile(__dirname +"/contact.html")
  })

  app.post("/ContactForm", (req, res) => {

    var _email  = req.body.txtEmail;
    var _phone  = req.body.txtNumber;
    var _subject  = req.body.txtSubject;
    var _body  = req.body.txtBody;

    console.log(_email, _phone, _subject, _body);

    res.sendFile(__dirname +"/contactsent.html");
    });

  app.get('/contact.html', function (req, res) {
    res.redirect('/Contact')
  })

  app.get('/index.html', function (req, res) {
    res.redirect('/')
  })

  // app.use(express.static(__dirname + '/public'));
  app.use('/CSS', express.static('CSS'));
  app.use('/Images', express.static('Images'));

  app.use((req, res) => {
    res.status(404).send('Хуудас олдсонгүй!');
    }); 

