const { Sequelize } = require('sequelize');

// 데이터베이스 연결 설정
const sequelize = new Sequelize('LINC_Zigbang', 'pdm', 'PdmWLRud@1#1', {
  host: 'localhost',
    dialect: 'mssql', // 사용하는 데이터베이스에 따라 변경
    port:14033
});

module.exports = sequelize;