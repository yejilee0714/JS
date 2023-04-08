// 문제 1
let fruits = ["사과", "배", "오렌지"];

let shoppingCart = fruits;
shoppingCart.push("바나나"); //push는 배열 뒤에 값을 추가하는 것

alert(fruits.length); // 4개

alert(fruits); //사과,배,오렌지,바나나

// 문제 2
let styles = ["Jazz", "Blues"]; //Jazz, Blues
styles.push("Rock-n-Roll"); //Jazz, Blues, Rock-n-Roll
styles[Math.floor(styles.length - 1) / 2] = "Classics" //Jazz, Classics, Rock-n-Roll
styles.shift(); //Classics, Rock-n-Roll
styles.unshift("Rap", "Reggae"); //Rap, Reggae, Classics, Rock-n-Roll

// 문제 3
let arr = ["a", "b"];

arr.push(function(){
    alert(this);
})

arr[2](); // function(){alear(this)}가 배열로 들어간다. 즉, 함수가 메서드처럼 호출된다. arr[0]은 a, arr[1]은 b이므로 arr[2]가 function(){}이다.
// a,b,function(){...}

// 문제 4
function sumInput(){
    let numbers = [];
    do{
        let value = prompt('숫자를 입력하세요');
        if(value === "" || value === null || !isFinite(value)) 
        break;

        numbers.push(+value);
    }while(true)
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum;
}

alert(sumInput());

// 문제 5 - 배열에서의 최대 합
function getMaxSubSum(arr){
    let maxSum = 0;
    let sum = 0;

    for (let item of arr){
        sum += item;
        maxSum = Math.max(maxSum, sum);
        if(sum < 0) sum = 0;
    }
    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]))
console.log(getMaxSubSum([2, -1, 2, 3, -9])) 
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum([-2, -1, 1, 2]))
console.log(getMaxSubSum([100, -9, 2, -3, 5]))
console.log(getMaxSubSum([1, 2, 3]))

// 문제 6
function camelize(text){
    let arr = text.split('-').map((word, index)=> index==0 ? word : word[0].toUpperCase()+word.slice(1)).join('');
    return arr;
}
console.log(camelize("background-color"));  // 'backgroundColor'
console.log(camelize("list-style-image"));  // 'listStyleImage'
console.log(camelize("-webkit-transition"));  // 'WebkitTransition'

// 문제 7
let arr1 = [5, 3, 8, 1];

let filtered = filterRange(arr1, 1, 4);

alert( filtered ); // 3,1 (조건에 맞는 요소)

alert( arr1 ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)

function filterRange(arr, num1, num2){
    return arr.filter(arr => (num1 <= arr && arr <= num2)).reverse();
}

// 문제 8 - 다시 풀어보기
let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

alert( arr2 ); // [3, 1]

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

          // 범위 밖의 요소를 제거함
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;    
        }
    }
}

// 문제 9 - 내림차순
let arr3 = [5, 2, 1, -10, 8];

arr3.sort(function(a, b) { return b - a; });

alert( arr3 ); // 8, 5, 2, 1, -10

/////////////////

// 문제 10 - 배열 정렬
let arr4 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr4);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr4 ); // HTML, JavaScript, CSS (no changes)


// 문제 11 - 확장 가능한 계산기
let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

// 문제 12 - 이름 매핑하기

// 문제 13 - 객체 매핑하기

// 문제 14 - 나이 기준으로 객체 정렬하기

// 문제 15 - 배열 요소 무작위로 섞기

// 문제 16 - 평균 나이 구하기

// 문제 17 - 중복 없는 요소 찾기

// 문제 18 - 배열에서 키 있는 객체 생성