// 'use strict';

// var response = require('./res');
const connection = require('./conn');

exports.getMahasiswa = async (req, res, next) => {
    const sql = `SELECT * FROM 	tbl_mahasiswa`;
    try {
        const result = await connection.query(`SELECT * FROM tbl_mahasiswa`);
        console.log(result);
        for (let user of result) {
            usersList.push({ id: user.nim, name: user.nama })
        }
        res.json({
            status: "success", message: "Users List Found!!",
            data: { user: usersList }
        });
        
    } catch (error) {
        console.error(error);
        
    }
}