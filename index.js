var Currency = require('./currency.js');
var us_currency = 29;
var rub_currency = 2.01;
var eur_currency = 34.68;
var jpy_currency = 0.2538;
var gbp_currency = 40.03;
var currency = new Currency(us_currency,rub_currency,eur_currency,jpy_currency,gbp_currency);
currency.UAtoUS(100).UStoUA(5).UAtoJPY(50).GBPtoUA(400);

