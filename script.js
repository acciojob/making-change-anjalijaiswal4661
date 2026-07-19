const makeChange = (c) => {
  // your name here
	const coins = [
  ['q', 25],
  ['d', 10],
  ['n', 5],
  ['p', 1]
];
let obj={};
// let count=0;
	forEach(coin of coins){
		 coinName = coin[0]
        coinValue = coin[1]
		let count=Math.floor(c/coinValue);
		obj[coinName]=count;
		c=c%coinValue;
		
	}
	return obj;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
