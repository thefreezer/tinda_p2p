const express = require('express');
const authM = require('./middlewares/auth');
const auth  = require('./routes/auth');
// const user = require('./routes/user');
// const wallet = require('./routes/wallet');

const app = express();

app.use(express.json()); // parsing json req body
app.use(express.urlencoded({ extended: true})); // parsing urlencoded req body

// app.use('/user', user);
app.use('/auth', auth);
// app.use('/wallet', wallet);

app.get('/nothing', authM, (req, res) => {
  res.send({'msg':'testing_purpose'});
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
