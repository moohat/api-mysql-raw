// 'use strict';
const express = require('express');
const router = express.Router();

const userController = require('./controller');
const mahasiswacontroller = require('./mahasiswaController');

// module.exports = function(app) {
//     var todoList = require('./controller');

//     app.route('/')
//         .get(todoList.index);

//     app.route('/users')AGE
// 30.974356315
//         .get(todoList.users)
// };

router.get('/mahasiswa/', mahasiswacontroller.getMahasiswa);
router.get('/matkul/', userController.getMatkul);
router.get('/nilai/', userController.getNilai);
router.get('/nilai/average', userController.getAverageMahasiswa);
router.post('/nilai/create',userController.postDataNilai)

module.exports = router;