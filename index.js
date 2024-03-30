/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

setupPage()


const inputEl = document.getElementById("to-convert")


function setupPage() {
    const convertBtn = document.getElementById("convert")
    convertBtn.addEventListener("click", convertUnits)

}
function convertLengths(val) {
    const mToF = (val*3.281).toFixed(3)
    const fToM = (val/3.281).toFixed(3)
    console.log(mToF);
    console.log(fToM);
    const lString = `${val} meters = ${mToF} feet | ${val} feet = ${fToM} meters`
    const lPara = document.getElementById("length-result")
    lPara.textContent = lString
}

function convertVolumes(val) {
    const lToG = (val*0.264).toFixed(3)
    const gToL = (val/0.264).toFixed(3)
    console.log(lToG);
    console.log(gToL);
    const vString = `${val} liters = ${lToG} gallons | ${val} gallons = ${gToL} liters`
    const vPara = document.getElementById("volume-result")
    vPara.textContent = vString

}

function convertMass(val) {
    const kToP = (val*2.204).toFixed(3)
    const pToK = (val/2.204).toFixed(3)
    console.log(kToP);
    console.log(pToK);
    const mString = `${val} kilos = ${kToP} pounds | ${val} pounds = ${pToK} kilos`
    const mPara = document.getElementById("mass-result")
    mPara.textContent = mString
}


function convertUnits(event) {
    event.preventDefault();

    const val = parseFloat(inputEl.value);
    if(val) {
        convertLengths(val)
        convertVolumes(val)
        convertMass(val)

    }
    console.log(val)
}