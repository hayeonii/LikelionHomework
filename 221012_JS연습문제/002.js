// 다음 string의 평균 값을 구하세요
// hint code : '5, 4, 10, 2, 5'.split(',')
// '5, 4, 10, 2, 5'

const arr = '5, 4, 10, 2, 5'.split(',');
let sum = 0;
for (const i of arr) {
    sum += parseInt(i)
}
const avg = sum/arr.length
console.log(avg)