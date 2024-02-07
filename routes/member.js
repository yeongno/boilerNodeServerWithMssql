const express = require('express');
const router = express.Router();
const Member = require('../models/Member'); // 모델 경로에 따라 조정하세요

// 모든 사용자 조회
router.get('/', async (req, res) => {
  try {
    const member = await Member.findAll();
    res.json(member);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 사용자 생성
router.post('/', async (req, res) => {
  try {
    const member = await Member.create(req.body);
    res.status(201).json(member);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;