var amount = process.argv.slice(2);

function round(number) {
  return Math.floor(number);
}

function investBottles(amount){
  var bottles = amount / 2;
  var redeemBottle = round(bottles / 2);
  var redeemCap = round(bottles / 4);
  var redeemTotal = redeemBottle + redeemCap;

  console.log('$' + amount, 'will get:', bottles, 'bottles of pop.');
  console.log('_________');
  console.log('If recycled, you will get:');
  console.log(' from bottle returns:', redeemBottle, 'bottles');
  console.log(' from bottle cap returns: ', redeemCap, 'bottles');
  console.log('From the return, you will have\n', redeemTotal, 'bottles and ', redeemTotal, 'caps leftover ', '\n if you recycled!');

  return;
}

investBottles(amount);
module.exports = investBottles;