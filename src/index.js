// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	var obj={};
if (currency<=0){
	return obj;
} else if (currency>9999){
	obj.error="You are rich, my friend! We don't have so much coins for exchange";
	return obj;
};
if (currency>=50){
	var h=(currency-currency%50)/50;
	currency=currency%50;
	obj.H=h;
}
if (currency>=25){
	var q=(currency-currency%25)/25;
	currency=currency%25;
	obj.Q=q;
}
if (currency>=10){
	var d=(currency-currency%10)/10;
	currency=currency%10;
	obj.D=d;
}
if (currency>=5){
	var n=(currency-currency%5)/5;
	currency=currency%5;
	obj.N=n;
}
if (currency>=1){
	var p=currency;
	obj.P=p;
}
return obj;
}
