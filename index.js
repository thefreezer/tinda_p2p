const express = require('express');
// const config = require('./config/config');
// const auth  = require('./routes/auth')
const user = require('./routes/user');
// const wallet = require('./routes/wallet');

const app = express();

app.use(express.json()); // parsing json req body
app.use(express.urlencoded({ extended: true})); // parsing urlencoded req body

// app.use('/user', user);
// app.use('/auth', auth);
app.use('/wallet', wallet);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
