import express from 'express';
import hbs from 'hbs';

const app = express();

app.set('view engine', 'html');
app.set('views', './build');

app.engine('html', hbs.__express);
app.use(express.static('build'));

app.get('*', function (req, res) {
  res.render('index', {});
});

app.listen(3000, function () {
  console.log('Learn-rollup app started at http://localhost:3000/'); // eslint-disable-line no-console
});
