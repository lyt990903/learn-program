const express = require('express');
const app = express();

const fileRouter = require('./routers/fileRouter');
app.use('/file',fileRouter);

app.listen(3000,() => {
  console.log('Start on 3000');
})