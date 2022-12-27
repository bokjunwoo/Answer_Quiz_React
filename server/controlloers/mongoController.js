const mongoClient = require('../mongoConnect');

// _여러번 실행되는 걸 막음
const _client = mongoClient.connect();

const mongoDB = {
  getCounts: async () => {
    const client = await _client;
    const db = client.db('mbti').collection('counts');
    const data = await db.find({}).toArray();
    return data;
  },

  incCounts: async () => {
    const client = await _client;
    const db = client.db('mbti').collection('counts');
    const result = await db.updateOne({ id : 1 }, { $inc: { counts: +1 }});
    if(result.acknowledged) {
      return '업데이트 성공';
    } else {
      throw new Error ('통신이상');
    };
  },

  getData: async () => {
    const client = await _client;
    const db = client.db('mbti').collection('data');
    const data = await db.find({}).toArray();
    return data;
  }
};

module.exports = mongoDB;