/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthDiv = document.getElementById("length-div")
const volumeDiv = document.getElementById("volume-div")
const massDiv = document.getElementById("mass-div")

initialValue()

convertBtn.addEventListener("click", function(){
    initialValue()
    const inputValue = inputEl.value
    lengthDiv.innerHTML += `<p>${metersFeet(inputValue)}</p>`
    volumeDiv.innerHTML += `<p>${litersGallons(inputValue)}</p>`
    massDiv.innerHTML += `<p>${kilogramsPounds(inputValue)}</p>`
})

function initialValue(){
    lengthDiv.innerHTML = `<h2>Length (Meter/Feet)</h2>`
    volumeDiv.innerHTML = `<h2>Volume (Liters/Gallons)</h2>`
    massDiv.innerHTML = `<h2>Mass (Kilograms/Pounds)</h2>`
}

function metersFeet(value)
{
    const m = (value / 3.281).toFixed(3)
    const f = (value * 3.281).toFixed(3)
    return `${value} meters = ${f} feet | ${value} feet = ${m} meters`
}

function litersGallons(value)
{
    const l= (value / 0.264).toFixed(3)
    const g = (value * 0.264).toFixed(3)
    return `${value} liters = ${g} gallons | ${value} gallons = ${l} liters`
}

function kilogramsPounds(value)
{
    const k= (value / 2.204).toFixed(3)
    const p = (value * 2.204).toFixed(3)
    return `${value} kilos = ${p} pounds | ${value} pounds = ${k} kilos`
}
