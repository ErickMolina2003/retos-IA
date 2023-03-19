const patrones = [
    [1, -1, -1, -1, 1, -1, 1, -1, 1, -1, -1, -1, 1, -1, -1, -1, 1, -1, 1, -1, 1, -1, -1, -1, 1],
    [-1, 1, 1, 1, -1, 1, -1, -1, -1, 1, 1, -1, -1, -1, 1, 1, -1, -1, -1, 1, -1, 1, 1, 1, -1]
]
const patron1 = [1, -1, -1, -1, 1, -1, 1, -1, 1, -1, -1, -1, 1, -1, -1, -1, 1, -1, 1, -1, 1, -1, -1, -1, 1];
const patron2 = [-1, 1, 1, 1, -1, 1, -1, -1, -1, 1, 1, -1, -1, -1, 1, 1, -1, -1, -1, 1, -1, 1, 1, 1, -1];
const targets = [1, -1]

const firstRowTable = document.querySelector('.first-row');
const secondRowTable = document.querySelector('.second-row');
const thirdRowTable = document.querySelector('.third-row');

patron1.forEach((patron, index) => {
    firstRowTable.innerHTML += `<th>X<sub>${index + 1}</th>`
});

patron1.forEach((patron, index) => {
    secondRowTable.innerHTML += `<th>${patron}</th>`
});

patron2.forEach((patron, index) => {
    thirdRowTable.innerHTML += `<th>${patron}</th>`
});


//PASO 0 -> Inicializar pesos y bias
let w = 0;
let b = 0;
let pesos = [];
let bias = [];


patrones.forEach((patron, index) => {
    let y = targets[index];
    let replace = 0;
    if (index == 1) {
        replace = 1;
    }
    patron.forEach((p, i) => {
        let x = p;
        if (pesos[i - 1]) {
            pesos.splice(i, replace, pesos[i - 1] + (x * y));
        } else {
            pesos.splice(i, replace, w + (x * y));
        }
        b = b + y;
    })
})

console.log('pesos: ', pesos);
console.log('bia: ', b);

const table = document.querySelector('.weights-table');

pesos.forEach((peso, index) => {
    table.insertAdjacentHTML("beforeend", `
    <tr>X<sub>${index + 1}</sub>: ${peso}</tr>
    `)
})

