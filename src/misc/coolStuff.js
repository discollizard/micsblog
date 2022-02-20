//YOU'VE FOUND THE SECRET ARCHIVES OF THIS WEBSITE. YOU NOW BELONG TO THE MIC'S 
// SECRET BRO SOCIETY, ENJOY YOUR STAY

import "./quotes.js"

window.mode = "vanilla"

const changeMode = (newMode) => {
    elementClasses.forEach((x) => {
        let elementToUpdate = document.querySelector(`.${x}--${window.mode}`)
        elementToUpdate.classList.remove(`${x}--${window.mode}`)
        elementToUpdate.classList.add(`${x}--${newMode}`)
    })
    //updating current mode and changing title reactively
    window.mode = newMode
    window.title = titlesForModes[newMode]
    let titleSur = document.getElementById("titleSurrogate")
    titleSur.value = titlesForModes[newMode]
    let changeEvent = new Event('change')
    titleSur.dispatchEvent(changeEvent)
}

const specDates = {
    "01-08": "bday",
    "02-14": "valentine",
    "06-22": "bday",
    "10-31": "halloween",
    "12-25": "xmas",
}

const titlesForModes = {
    "cyber": "Cybercafé",
    "xmas": "Cozy Cabin",
    "vanilla": "Art Gallery",
    "halloween": "Spooky Mansion",
    "valentine": "Love Shack",
    "dark": "Gallery After Hours",
    "bday": "Birthday Party"
}

const cheatCodes = {
    "xmasAllYear": {response: "Xmas decoration activated!!!", mode: "xmas"},
    "bdayAllYear": {response: "Bday decoration activated!!!", mode:"bday"},
    "enterTheMatrix": {response: "CYB3R M0D3 4CT1V4T3D!1!", mode: "cyber"},
    "darkMode": {response: "dark mode activated", mode: "dark"},
    "asciiCat": {response: `                 _..
    /}_{\           /.-'
   ( a a )-.___...-'/
   ==._.==         ;
        \\ i _..._ /,
        {_;/   {_//  ` },
    "bestJuiceFlavor": {response: "Orange."},
    "returnToNormal": {response: "Returning to normal...", mode: "vanilla"}
}

//const modes = [
//    'bday',
//    'cyber',
//    'halloween',
//    'xmas',
//    'valentine',
//    'dark',
//    'vanilla'
//]

const elementClasses = [
    'App',
    'wrapper',
]



let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1; 
if(dd<10) 
{
    dd=`0${dd}`;
} 

if(mm<10) 
{
    mm=`0${mm}`;
}

let dayFormatted = `${mm}-${dd}`

window.addEventListener('load', () => {
    if(Object.keys(specDates).includes(dayFormatted)){
        changeMode(specDates[dayFormatted])
    }
})

window.activateCheat = (cheatCode) => {
    if(Object.keys(cheatCodes).includes(cheatCode) && cheatCodes[cheatCode].mode){
        changeMode(cheatCodes[cheatCode].mode)
    }
    return cheatCodes[cheatCode].response
}