var caseValue = ["name", "john","lastname", "Black", "age", "23"]
var resultObject = {}
for (let i = 0; i < caseValue.length; i += 2) {
    var name = caseValue[i]
    var value = caseValue[i + 1]
    resultObject[name] = value
}
console.log(resultObject)

function detailedDataType(value) {
    if (Array.isArray(value)){
        return 'array';
    } else if (value instanceof Date) {
        return 'date';
    } else if (value === null) {
        return 'null'
    }  else {
        return typeof value;
    }
}

console.log(detailedDataType([2, 3, 4]));
console.log(detailedDataType(new Date()));
console.log(detailedDataType(null));
console.log(detailedDataType({}));




function averagSum(){
    if(arguments.length === 0){
        return 0
    }
var sum = 0
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum / arguments.length;
}
const averagMeaning = averagSum(1,2,3,4,5,6,7,8,9,10,11,321,24,5,235,3,2,32,4,14,23,-423,52,45,325,23,5,-32)
console.log(averagMeaning)
const counterInput = document.getElementById('counterInput');
const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
var counterValue = 0;
counterInput.value = counterValue;
plusButton.addEventListener('click' , ()=>{
    counterValue += 1
    counterInput.value = counterValue
})
minusButton.addEventListener("click",()=>{
    counterValue -= 1
    counterInput.value = counterValue
} )
