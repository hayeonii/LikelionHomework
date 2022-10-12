// 다음 array의 각 자리수의 합을 구하세요
const arr = [11, 22, 33, 111, 2];

const newStr = arr.join('');
let total = 0;
for (i = 0; i < newStr.length ; i++){
    total += parseInt(newStr[i])
}
console.log(total)
