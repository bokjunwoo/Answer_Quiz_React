const connection = require('../dbConnect');

const db = {
  // 메소드 이름 설정
  getCounts: (cb) => {
    connection.query('SELECT counts FROM mydb.visitor', (err, data) => {
                      // 쿼리문 전달
      if(err) throw err;
      cb(data);
    })
  },
  incCounts: (cb) => {
    connection.query('UPDATE mydb.visitor SET counts = counts + 1 WHERE id = i' , (err) => {
      if(err) throw err;
      cb(JSON.stringify('업데이트 성공')); // 통신 성공 메세지
    })
  }
}

module.exports = db;