'use strict';

// var response = require('./res');
var connection = require('./conn');

module.exports = {

    //using callback

    getMahasiswa: async function (req, res, next) {
        const sql = `SELECT * FROM 	tbl_mahasiswa`;
        let usersList = [];
        connection.query(sql, (err, result) => {
            if (err) throw err;

            for (let user of result) {
                usersList.push({ id: user.nim, name: user.nama })
            }
            res.json({
                status: "success", message: "Users List Found!!",
                data: { user: usersList }
            });
        });
    },

    //   getMahasiswa: async (req, res, next) => {
    //     const sql = `SELECT * FROM 	tbl_mahasiswa`;
    //     let usersList = [];

    //     try {
            
    //         const result = await connection.query(sql);
    //         console.log(result);
            
    //         // for (let user of result) {
    //         //     usersList.push({ id: user.nim, name: user.nama })

    //         // }
    //         res.status(200).json(result);
            
          
    //     } catch (error) {
    //         console.error(error);
            
    //     }
    // },

    getMatkul: function (req, res, next) {
        const sql = `SELECT * FROM 	tbl_matkul`;
        let matkulList = [];
        connection.query(sql, (err, result) => {
            if (err) throw err;

            for (let matkul of result) {
                matkulList.push({ id: matkul.id, name: matkul.nama_matkul, nim: matkul.nim })
            }
            res.json({
                status: "success", message: "Users List Found!!",
                data: { user: matkulList }
            });
        });
    },

    getNilai: function (req, res, next) {
        const sql = `SELECT * FROM 	tbl_nilai`;
        let nilaiList = [];
        connection.query(sql, (err, result) => {
            if (err) throw err;

            for (let nilai of result) {
                nilaiList.push({ id: nilai.id, id_matkul: nilai.id_matkul, nilai, keterangan: nilai.keterangan });
            }
            res.json({
                status: "success", message: "Users List Found!!",
                data: { mahasiswa: nilaiList }
            });
        });
    },

    getAverageMahasiswa: function (req, res, next) {

        var query = `SELECT nama, AVG(nilai) AS Nilai_rata_rata FROM tbl_mahasiswa, tbl_matkul, tbl_nilai WHERE tbl_nilai.id_matkul = tbl_matkul.id_matkul AND tbl_matkul.nim = tbl_mahasiswa.nim GROUP BY nama`;
        connection.query(query,
            (err, result) => {
                if (err) throw err;              
                     res.json({
                         status: "success", message: "Users List Found!!",
                         data: {user: result}
                    });
                
            });
    },

    postDataNilai: function (req, res) {
        const { id_matkul, nilai, keterangan } = req.body;
        // console.log(first_name, last_name);
        let query = `INSERT INTO tbl_nilai (id_matkul, nilai, keterangan) VALUES(?, ?, ?)`;
        const data = [
            id_matkul,
            nilai,
            keterangan

        ]
        connection.query(query, data, err => {
            if (err) {
                res.send({ error: err.message })
            } else {
                return res.json({
                    status: "success", message: "Nilai input successfully!!",
                    data: {id_matkul,nilai,keterangan }
                });
            }
        })
    }

}
