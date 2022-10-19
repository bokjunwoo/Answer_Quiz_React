const express = require('express');

const cors = require('cors');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const dataRouter = require('./routes/data');
app.use('/data', dataRouter)

// mongo
// const mongoRouter = require('./routes/mongo')
// app.use('/mongo', mongoRouter);


app.listen(PORT, () => {
  console.log(`데이터 서버는 ${PORT}에서 연결되었습니다.`)
});

