console.log('JS OK')
console.log('JS OK')
console.log('JS OK')

const list = ['pane', 'latte', 'uova', 'burro', 'carne', 'pesce', 'olio', 'sale','odori'];
let i = 0;
const expense =document.querySelector('.expense')

while(i < list.length){
    console.log(list[i])
    expense.innerHTML += ` <div class="fs-4 py-3"> ${list[i]} </div> `;
    i++
   
}


