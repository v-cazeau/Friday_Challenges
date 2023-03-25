//convertTemperature

// function convertTemperature (farTemp) {
//     const celTemp = (farTemp - 32)*(5/9)
//     return celTemp.toFixed(1)
// }

// farTemp = 80
// console.log(`Today is ${farTemp}ºF (${convertTemperature(farTemp)})ºC`)

//getLargestNumber

// const arrayOfNumber = [
//     2,//0
//     5,//1
//     7,//2 [i]
//     1337,
//     13,
//     22,
//     21,
//     55,
//     66, 
//     16, 
//     13,
//     14551, 
//     41
// ]


// function getLargeNumber () {
//     let largestNumber = 0;

//     for (let i = 0 ; i < arrayOfNumber.length; i++) {
//         if (arrayOfNumber[i]>largestNumber) {
//             largestNumber = arrayOfNumber[i];
//         }
//     }
//     return largestNumber
// }

// console.log(getLargeNumber());


const countNumber = [1,3,7,6,13,20,2,5,33,9,14];

function oddNumber() {
    let newArray = []

    for (let i = 0; i < countNumber.length; i++){
        if (countNumber[i]%2 === 1){
            newArray.push(countNumber[i]); 
        }
    }
    return newArray.length;
}

console.log(oddNumber())

