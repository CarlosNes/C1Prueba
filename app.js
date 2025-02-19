const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

// Definir rutas
require('./routes/index')(app);

app.use(express.static('./public'));

app.get('*', (req, res) => res.status(200).send({
  message: 'Index.',
}));

const port = parseInt(process.env.PORT, 10) || 3000;
app.set('port', port);
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
