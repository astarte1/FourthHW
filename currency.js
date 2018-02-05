// var us_currency = 29;

// function roundTwoDecimal(amount){
// 	return Math.round(amount*100)/100;
// };

// module.exports.UStoUA = function(currency){
// 	return roundTwoDecimal(currency * us_currency);
// };

// module.exports.UAtoUS = function(currency){
// 	return roundTwoDecimal(currency / us_currency);
// };
//var htmlScript = require('./index.html');
//var input = document.getElementById('money');

var Currency = function(us_currency,rub_currency,eur_currency,jpy_currency,gbp_currency){
	this.us_currency = us_currency;
	this.rub_currency = rub_currency;
	this.eur_currency = eur_currency;
	this.jpy_currency = jpy_currency;
	this.gbp_currency = gbp_currency;
};

Currency.prototype.roundTwoDecimal = function(amount){
	return Math.round(amount*100)/100;
};

Currency.prototype.UStoUA = function(currency){
	console.log(this.roundTwoDecimal(currency*this.us_currency));
	return this;
};

Currency.prototype.UAtoUS = function(currency){
	console.log(this.roundTwoDecimal(currency/this.us_currency));
	return this;
};
Currency.prototype.UAtoRUB = function(currency){
	console.log(this.roundTwoDecimal(currency*this.rub_currency));
	return this;
};
Currency.prototype.RUBtoUA = function(currency){
	console.log(this.roundTwoDecimal(currency/this.rub_currency));
	return this;
};
Currency.prototype.UAtoEUR = function(currency){
	console.log(this.roundTwoDecimal(currency*this.eur_currency));
	return this;
};
Currency.prototype.EURtoUA = function(currency){
	console.log(this.roundTwoDecimal(currency/this.eur_currency));
	return this;
};
Currency.prototype.UAtoJPY = function(currency){
	console.log(this.roundTwoDecimal(currency*this.jpy_currency));
	return this;
};
Currency.prototype.JPYtoUA = function(currency){
	console.log(this.roundTwoDecimal(currency/this.jpy_currency));
	return this;
};
Currency.prototype.UAtoGBP = function(currency){
	console.log(this.roundTwoDecimal(currency*this.gbp_currency));
	return this;
};
Currency.prototype.GBPtoUA = function(currency){
	console.log(this.roundTwoDecimal(currency/this.gbp_currency));
	return this;
};


module.exports = Currency;