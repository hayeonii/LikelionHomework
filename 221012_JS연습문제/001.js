// 분산 => (각 값에 - 평균) ** 2
// [10, 20, 30, 10, 20, 30, 40, 10]

// 다음 값의 평균을 구하세요
let score = [10, 20, 30, 10, 20, 30, 40, 10]
let avg = score.reduce((a,b) => a+b, 0)/score.length;
console.log(avg)

// 다음 값의 분산을 구하세요
let vari = []
for (const i of score) {
    const sum = (i - avg) ** 2;
    vari.push(sum)
}

let 분산 = vari.reduce((a,b) => a+b, 0)/score.length
console.log(분산)

// map으로 순회해서 값을 배열에 저장할 순 없엇을 까 ..
// 콜백 함수 사용이 미흡한 것 같다