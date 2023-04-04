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