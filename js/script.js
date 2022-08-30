console.log('JS OK')

const list = ['pane', 'latte', 'uova', 'burro', 'carne', 'pesce', 'olio', 'sale'];
let i = 0;
const expense =document.querySelector('.expense')

while(i < list.length){
    console.log(list[i])
    i++
    expense.innerHTML = list
}

