
//work 1
var array_with_duplicates = [5, 6, 76, 7676, 4, 4, 5, 6, 6, 7,8 ,9 ,10];

var array_only_duplicates = array_with_duplicates.filter((value, index, self) => {
    return self.indexOf(value) !== index;
});

console.log(array_only_duplicates);

//work 2
function filterBooks(arr) {
    const booksWithU = arr.filter(book => book.toLowerCase().includes('у'));

    const booksWithoutU = arr.filter(book => !book.toLowerCase().includes('у'));

    const booksWithUText = booksWithU.map(book => `${book} - книга с буквой "у"`);

    console.log("Книги с буквой 'у':");
    booksWithUText.forEach(book => console.log(book));

    console.log("\nОстальные книги:");
    booksWithoutU.forEach(book => console.log(book));
}

var books = [
    'Гарри Поттер и Философский камень',
    'кладбище домашних животных',
    'Паутина Шарлоты',
    'гранатовый браслет',
    'Убить пересмешника',
    'мертвая зона'
];

filterBooks(books);


//work 3

const users = [
    { name: 'karl', age: 88 },
    { name: 'Bart', age: 10 },
    { name: 'Liza', age: 8 },
    { name: 'Marge', age: 37 },
    { name: 'Homer', age: 39 },
    { name: 'Abraham ', age: 69 },
    { name: 'Kaneki', age: 23 },
    { name: 'Kirito', age: 20 }
];
const youngestUser = users.reduce((minAgeUser, currentUser) => (currentUser.age < minAgeUser.age ? currentUser : minAgeUser));
const oldestUser = users.reduce((maxAgeUser, currentUser) => (currentUser.age > maxAgeUser.age ? currentUser : maxAgeUser));
const ageDifference = oldestUser.age - youngestUser.age
console.log(`Пользователь ${oldestUser.name} старше ${youngestUser.name} на ${ageDifference} лет.`);