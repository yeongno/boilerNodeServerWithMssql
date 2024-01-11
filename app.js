const express = require('express')
const config = require('./src/config/config')

const app = express()

app.listen(3000, function() {
    console.log("start! express server on port 3000")
})

app.get('/get', function(req,res) {
    res.send("123")
})

const Connection = require('tedious').Connection;
const Request = require('tedious').Request;

// const config = {  
//     server: 'localhost', 
//     authentication: {
//         type: 'default',
//         options: {
//             userName: 'pdm', 
//             password: 'PdmWLRud@1#1'  
//         }
//     },
//     options: {
//         // 에러 DeprecationWarning: Setting the TLS ServerName to an IP address is not permitted by RFC 6066. This will be ignored in a future version.Connected
//         encrypt: false,
//         database: 'LINC_Zigbang',
//         port: 14033
//     }
// };  

// SQL Server 연결 생성
var connection = new Connection(config.dbconfig);
console.log(config.dbconfig)
// 연결 이벤트 핸들러
connection.on('connect', function(err) {
    if (err) {
        console.error('연결 중 에러 발생:', err);
    } else {
        console.log("SQL Server에 연결됨");
        executeSelectQuery();
    }
});

// SQL 쿼리 실행 함수
function executeSelectQuery() {
    var query = "SELECT * FROM member";

    // 쿼리 요청 객체 생성
    var request = new Request(query, function(err, rowCount, rows) {
        if (err) {
            console.error('쿼리 실행 중 에러 발생:', err);
        } else {
            console.log(rowCount + '개의 행 반환됨');
        }
        connection.close();
    });

    // 각 행의 데이터를 처리하는 이벤트
    request.on('row', function(columns) {
        var result = {};
        columns.forEach(function(column) {
            result[column.metadata.colName] = column.value;
        });
        console.log(result);
    });

    // 쿼리 요청 실행
    connection.execSql(request);
}

// 연결 시작
connection.connect();