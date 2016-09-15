# FIO Bank Transaction Helper

## Synopsis

Simple module to get transactions from FIO bank API.
Contains two simple methods periodList and lastList.

## Code Example

Require module, call and get results!

```
var FioBankHelper = require('fio-bank-transaction-helper');

var Token = 'a55s4f6a4f6a'; // access Token generate in API section of account settings
var FromDate = '2016-09-01';
var ToDate = '2016-10-01';
var Format = 'json' // can be CSV, GPC, HTML, JSON, OFX, FIO XML

// select transactions - range by romDate and ToDate
FioBankHelper.periodList(Token, FromDate, ToDate, Format,function(result)){
  console.log(result);
});

```

```

var Token = 'a55s4f6a4f6a'; // access Token generate in API section of account settings
var Format = 'json' // can be CSV, GPC, HTML, JSON, OFX, FIO XML

// select transactions from last Download
FioBankHelper.lastList(Token, Format, function(result)){
  console.log(result);
});

```


## Contributors

Marek Feuermann

## License

MIT
