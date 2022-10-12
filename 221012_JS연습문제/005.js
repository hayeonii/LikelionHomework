// 로또 만들기
let lotto = []
for (i=0 ; i<6; i++){
    lotto.push(Math.floor(Math.random()*100))
}
console.log(lotto)