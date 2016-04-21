var express = require('express')
	, app = express()
	, bodyParser = require('body-parser')
	, morgan = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

var routes = require('./routes');

var notyet = (req, res) => res.json('notyet'); 

app.get('/', (req, res) => {
	res.render('index.ejs');
});

app.get('/test', routes.test);

app.listen(3000, () => console.log('running'));
