var request = require('request');

// Transactions from specific date range
// viz docs 5.2.1
exports.periodList = function(Token, FromDate, ToDate, Format, callback) {

  var URL = 'https://www.fio.cz/ib_api/rest/periods/'+Token+'/'+FromDate+'/'+ToDate+'/transactions.'+Format
  request(URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
    }
  })

}

// Transactions from last download
exports.lastList = function(Token, Format, callback) {

  var URL = 'https://www.fio.cz/ib_api/rest/last/'+Token+'/transactions.'+Format;

  request(URL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
    }
  })

}
