const express = require('express');
const cors = require('cors');
const auth  = require('./routes/auth');
const morgan = require('morgan');
// const user = require('./routes/user');
const wallet = require('./routes/wallet');

const app = express();
app.use(cors());
app.use(morgan('tiny'));

app.use(express.json()); // parsing json req body
app.use(express.urlencoded({ extended: true})); // parsing urlencoded req body

// app.use('/user', user);
app.use('/auth', auth);
app.use('/wallet', wallet);

app.get('/', (req, res) => {
  res.json({msg:'welcome'});
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
