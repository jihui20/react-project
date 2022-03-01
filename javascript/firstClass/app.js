// 일급함수란?
// 함수를 다른 변수와 동일하게 다루는 언어

function salePrice(discountRate, price) {
  return price - price * (discountRate * 0.01);
}

console.log(salePrice(10, 560000));

function discountPrice(discountRate) {
  return function (price) {
    return price - price * (discountRate * 0.01);
  };
}

// discountPrice 함수를 호출하는 방법 2가지
// 첫번째.
console.log(discountPrice(10)(570000));
// 두번째.
let firstPrice = discountPrice(10);
console.log(firstPrice(570000));
