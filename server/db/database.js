const Sequelize = require('sequelize');


//For testing only...
// const cfg = require('./dbconfig.js');
//
// const sequelize = new Sequelize(cfg.myLocalDB, cfg.myLocalDBRole, cfg.myLocalDBPW, {
//   host: 'localhost',
//   dialect: 'postgres',
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });


const db = 'd86ihjgv4svehf';
const user = 'hlmmnszznagdqa';
const pw = '36da912586867af866169f37fac6fb7bb5a98bf97ef153c023a1923bb85b1de3';

const sequelize = new Sequelize(db, user, pw, {
  host: 'ec2-23-21-219-105.compute-1.amazonaws.com',

  port: 5432,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;