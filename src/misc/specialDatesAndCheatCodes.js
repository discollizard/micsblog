//YOU'VE FOUND THE SECRET ARCHIVES OF THIS WEBSITE. YOU NOW BELONG TO THE MIC'S 



const changeMode = (mode) => {
    elementClasses.forEach((x) => {
        document.querySelector(`.${x}`).classList.remove(`${x}--vanilla`)
        document.querySelector(`.${x}`).classList.add(`${x}--${mode}`)
    })
}

window.activateCheat = (cheatCode) => {
    if(Object.keys(cheatCodes).includes(cheatCode)){
        changeMode(cheatCodes[cheatCode].mode)
        return cheatCodes[cheatCode].response
    }
}

const specDates = {
    "01-08": "bday",
    "02-14": "valentine",
    "06-22": "bday",
    "10-31": "halloween",
    "12-25": "xmas",
}

const cheatCodes = {
    "xmasAllYear": {response: "Xmas decoration activated!!!", mode: "xmas"},
    "bdayAllYear": {response: "Bday decoration activated!!!", mode:"bday"},
    "enterTheMatrix": {response: "CYB3R M0D3 4CT1V4T3D!1!", mode: "cyber"},
    "darkMode": {response: "dark mode activated", mode: "dark"},
    "asciiCat": `                 _..
    /}_{\           /.-'
   ( a a )-.___...-'/
   ==._.==         ;
        \\ i _..._ /,
        {_;/   {_//  fsc`,
    "bestJuiceFlavor": "Orange."
}

const modes = [
    'bday',
    'cyber',
    'halloween',
    'xmas',
    'valentine',
    'dark'
]

const elementClasses = [
    'App',
    'header',
]



let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1; 
const yyyy = today.getFullYear();
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