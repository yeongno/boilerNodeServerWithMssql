// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const memberShcema = mongoose.Schema(
//   {
//     userFrom: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//     },
//     movieId: {
//       type: String,
//     },
//     movieTitle: {
//       type: String,
//     },
//     moviePost: {
//       type: String,
//     },
//     movieRunTime: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

// const Favorite = "Favorite", memberShcema

// module.exports = { Member };

const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Member = sequelize.define('Member', {
    // 모델 필드 정의
  member_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // 모델 옵션
  tableName: 'member',
  timestamps: false
});

module.exports = Member;