//high oerder functions
//funciones de orden superior
//funcuiones que reciben como parametros otras funciones
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const calculator = (a,b, callback) => {
    const result = callback(a, b);
    console.log(result);
}


calculator(15, 9, suma);
calculator(15, 9, resta);
calculator(15, 9, (a, b) => a * b);
calculator(15, 9, (a, b) => a / b);

const foods = ['tamales', 'pizza', 'chilaquiles',
    'pozole', 'tacos', 'maruchas'];

    foods.forEach(food => console.log(food.includes));
    foods.forEach(food => console.log(food.length));
    foods.forEach(food => console.log(food.includes('a')));

    const  FOODS = foods.map(food => food.toUpperCase());
    console.log(FOODS);

    const foodsEmojis = foods.map(food => food + '🍗');
    console.log(foodsEmojis);

    const sdoof = foods.map(food => {
        const separate = food.split('');
        const reversed = separate.reverse();
        const joined = reversed.join('');
        return joined;
        // food => food.split('') reverse().join('')
    });
    console.log(sdoof);

     // un arrawy  del 1 al 10 y que regrese  los  cubos cuadrado y mitades

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const cubos = numbers.map(num => Math.pow(num, 3));
    console.log("Cubos:", cubos);

    const cubosFiltrados = cubos.filter(num => num % 2 === 0);
    console.log("Cubos pares:", cubosFiltrados);

    const sumaCubosPares = cubosFiltrados.reduce((acc, num) => acc + num, 0);
    console.log("Suma de cubos pares:", sumaCubosPares);

    const cuadrados = numbers.map(num => Math.pow(num, 2));
    console.log("Cuadrados:", cuadrados);

    const mitades = numbers.map(num => num / 2);
    console.log("Mitades:", mitades);


    function wrappedGifts(gifts){
        return gifts.map(gift =>{
            const tapa = '*'.repeat(gift.length);
            return `${ tapa }\n*${ gift }*\n${ tapa }`;
        })
    }
    const foods  = ['tamales', 'pizza', 'chilaquiles','pozole', 'taco', 'maruchan'];
    const wrappeds = wrappedGifts(foods);
    wrappeds.forEach(item => console.log(item));

// filter
const containsZ = foods.filter(food => food.includes('z'));
console.log(foods);
console.log(containsZ);

const endsWithS = foods( food => food.endsWithS('s'));
console.log(endsWithS);


//pares,impares menores 5 mayores a 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const pares = numbers.filter(num => num % 2 === 0);
const impares = numbers.filter(num => num % 2 !== 0);


const menoresDe5 = numbers.filter(num => num < 5);
const mayoresDe5 = numbers.filter(num => num > 5);

console.log("Números pares:", pares);
console.log("Números impares:", impares);
console.log("Números menores a 5:", menoresDe5);
console.log("Números mayores a 5:", mayoresDe5);

// forEach, map, filter
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//reduce
const sumatoria = numeros.reduce((a, b) => a + b,);
const factorial = numeros.reduce((a, b) => a * b, 1);
console.log(numeros);
console.log(sumatoria);
console.log(factorial);

// "some(or)con algunos que los cumpla se vuelve verdadero" "every(and)cuando sean verdaderos"
const positivos = numeros.every(n=> n > 0);
console.log(positivos);
const negativos = numeros.every(n=> n < 0);
console.log(negativos);

const age = [20, 21, 25, 17, 18];
const algunos_mayores = age.some(n=> n > 18);
console.log(algunos_mayores);
const algunos_menores = age.some(n=> n < 18);
console.log(algunos_menores);


const fruits = ['🍎', '🍐', '🍊', '🍑', '🍒'];

const index_durazno =fruits.findIndex(f => f === '🍒');
console.log (fruits[index_durazno]);

fruits.
