var express = require('express');
var app = express();
var jsonParser = require('body-parser').json();
var session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(session({
    secret: 'jsalkdjfkljasldjfl',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000*60*60*24 }
  }))
app.listen(3000, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));

app.post('/signIn', jsonParser, (req, res) => {
    var {username, password} = req.body;
    if (username === 'abc' && password === '123') {
        req.session.username = username;
        return res.send({result: 0});
    }
    return res.send({result: -1});
})

app.get('/getInfo', (req, res) => {
    if (req.session.username) {
        return res.send({result: 0, username: req.session.username});
    }
    return res.send({result: -1, username: null});
})

app.get('/signOut', (req, res) => {
    req.session.username = undefined;
    res.send({result: 0});
})