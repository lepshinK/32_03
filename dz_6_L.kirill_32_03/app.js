

// const books = ['Приключения', 'Фантастика', 'Детектив', 'Роман'];
//
// for (let i = 0; i < books.length; i++) {
//     console.log(books[i]);
// }
//
// console.log(Object.keys(tagObject).sort(function(tag1,tag2){
//     return tagObject[tag2] - tagObject[tag1]
// }))


// var fruits = ['apple', 'chery', 'pineapple'];
// var fruitsVar = fruits.filter(i => i.length > 6)
// console.log(fruitsVar)
// console.log(fruits)
//
// var user = [
//     {name: 'Adam', age: 30},
//     {name: 'John', age: 14},
//     {name: 'Mark', age: 10},
//     {name: 'Jordan', age: 42},
//     {name: 'Mikey', age: 18},
//     {name: 'Vinson', age: 19},
//     {name: 'Leo', age: 25},
//     {name: 'Aeo', age: 25},
// ]
// var resultAge = user.filter(i => i.age < 18)
// var resultName = user.filter(i => i.name.toLowerCase().includes('a'))
// console.log(resultAge)
// console.log(resultName)
//
//
// var numbers = [1, 2, 3, 4]
// var numfix = numbers.map(i => i*3)
// console.log(numfix)
//
// var som = [100000, 200000, 300000]
// var dollorf = som.map(i => i / 89)
// var dollars = dollorf.map(i => i.toFixed(1))
// console.log(dollars)
// console.log(hello2)
//
// var numbers2 = [3, 4, 5, 6, 7]
// numbers2.forEach(i => console.log(i * 4))
// var arrayNum = [23, 23, 34, 4, 5, 6, 43, 54, 3, 23, 2, 4, 6 ,8, 9, 45 ,32]
// var numSet = new Set(arrayNum)
// var array = Array.from(numSet)
// console.log(array)
//
//
// var hello = 'hello'
// var hello2 = 'hello2'
// const array2 = []
// //
// // array2.push(7)
// // console.log(array2)
// //
// // function  getAllSum(...nums){
// //     let sum = nums.reduce((n1, n2)=>n1+=n2)
// //     console.log(sum)
// //     console.log(nums)
// // }
// // getAllSum(45, 32, 34, 56, 12)
//
//
// const array = [1, 2, 3, 4, 5];
// const newArray = array.join('/')
// console.log(newArray)
//
// function joinArray(array,separator){
//     let resultText = ''
//     for (let i = 0; i < array.length; i++){
//         const el = array[i]
//         resultText += el + (i === array.length - 1 ? '' : separator)
//     }
//     return resultText
// }
//
// console.log(joinArray([1,2,3,4], '-'))
//
//
// var human = {
//     name: 'Aidana',
//     surname: 'Bekova',
//     id: 13,
//     isMarried: false,
//     address: {
//         city: 'Bishkek',
//         street: 'Ibraimova',
//         number: null
//     },
//     showInfo() {
//         console.log(`${human.name}`)
// //         console.log(`${this.name}`)
// //     },
// //     showInfo2(){
// //         function show(){
// //             console.log(`${this.name}`)
// //         }
// //         show()
// //     }
// // }
// // human.showInfo()






//todolist
const createButton = document.querySelector('#create_button');
const input = document.querySelector('#input');
const todoList = document.querySelector('.todo_list');

const createTodo = () => {
    if (input.value === '') {
        return alert('произошла ошибка. Введите текст');
    }

    const div = document.createElement('div');
    div.setAttribute('class', 'block_text');

    const divButton = document.createElement('div');
    divButton.setAttribute('class', 'div_button');

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete_button');
    deleteButton.innerText = 'DELETE';

    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit_button');
    editButton.innerText = 'EDIT';

    const text = document.createElement('h3');
    text.innerText = input.value;
    text.addEventListener('click', () => {
        text.classList.toggle('toggle');
    });

    divButton.append(deleteButton, editButton);
    div.append(text, divButton);

    todoList.prepend(div);
    input.value = '';

    deleteButton.addEventListener('click', deleteTask);
    editButton.addEventListener('click', editTask);
};

const deleteTask = (event) => {
    const taskBlock = event.target.closest('.block_text');
    taskBlock.remove();
};

const editTask = (event) => {
    const taskBlock = event.target.closest('.block_text');
    const textElement = taskBlock.querySelector('h3');
    const newText = prompt('Введите новый текст', textElement.innerText);

    if (newText !== null) {
        textElement.innerText = newText;
    }
};

createButton.onclick = () => createTodo();
