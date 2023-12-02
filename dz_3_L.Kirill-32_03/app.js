function countTags(tags) {
    var tagCounts = {};
    for (let i = 0; i < tags.length; i++) {
        let tag = tags[i];
        if (tagCounts[tag]) {
            tagCounts[tag] += 1;
        } else {
            tagCounts[tag] = 1;
        }
    }
    console.log(tagCounts);
}
countTags(['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']);

//2
class Starbucks {
    constructor() {
        this.menu = {
            'кофе': {
                'лате': 'эспресо , молоко и мягкая пенка ',
                'копучино': 'эспресо , молоко,  мягкая пенка',
                'американо': 'эспресо с большим количеством воды',
                // Другие виды кофе
            },
            'чай' : {
                'черный': 'чай и вода',
                'зеленый': 'Чай и вода',
                'цитрусовый': 'Чай с дольками лимона , лайма, апельсина и кариццы',
                'облепиховый': 'Чай с облепихой'

                // еще пару видов чая
        }
    };
}
takeOrder(category, item) {
        if (category in this.menu && item in this.menu[category]) {
            return `заказ принят: ${item} ${category}`;
        } else {
            return "Ошибка: такого напитка нет в меню";
        }
    }
}

const starbucks = new Starbucks();

var drink = prompt("Введите вид напитка (кофе/чай): ").toLowerCase()
var name = prompt("Введите название напитка: ").toLowerCase()

let result = starbucks.takeOrder(drink, name);
console.log(result);
