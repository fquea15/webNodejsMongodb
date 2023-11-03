const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = process.env.MONGODB_URI;

// Configurate tool mongoose to conet mongodb
mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })

  .then((db) => console.log('\n<-- Data Base is Connected!-->\n'))
  .catch((err) => console.error(`\nHubo un error -> ${err}\n`));

