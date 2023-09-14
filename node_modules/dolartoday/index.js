const fetch = require('node-fetch');
const Today = {};

const dolarToday = () => {
    return fetch('https://s3.amazonaws.com/dolartoday/data.json')
    .then(res => res.json())
    .then(tasa => {
        return tasa;
    })
    .catch((error) => {
        return error;
    });
}

const tasaDolar = async () => {
    const arrayDatos = await dolarToday().then(tasa => tasa);
    return arrayDatos.USD.dolartoday;
}

const tasaEuro = async () => {
    const arrayDatos = await dolarToday().then(tasa => tasa);
    return arrayDatos.EUR.dolartoday;
}

const calcularEuro = (cantidad) => {
    return dolarToday().then(tasa => { 
        return tasa.EUR.dolartoday * cantidad;  
    } );
}

const calcularDolar = (cantidad) => {
    return dolarToday().then(tasa => { 
        return tasa.USD.dolartoday * cantidad;  
    } );
} 


Today.dolarToday = dolarToday;
Today.tasaDolar = tasaDolar;
Today.tasaEuro = tasaEuro;
Today.calcularDolar = calcularDolar;
Today.calcularEuro = calcularEuro;


module.exports = Today;
