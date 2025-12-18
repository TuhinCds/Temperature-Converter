// Inputs 
const UserValueLeft = document.getElementById("UserValueLeft")
const UserValueRight = document.getElementById("UserValueRight")
const LeftSideData = document.getElementById("LeftSideData")
const RightSideData = document.getElementById("RightSideData")
const ShowFormula = document.getElementById("ShowFormula")


let UserValueLeftValue
let UserValueRightValue
let formula
let fahrenheit
let celcius 
let kelvin 
LeftSideData.addEventListener("change", () => {
    LeftVal()
})
RightSideData.addEventListener("change", () => {
    LeftVal()
})

const LeftVal = () => {
    UserValueLeftValue = Number(UserValueLeft.value)

   if (!UserValueLeftValue) return UserValueRight.value = 0
    if (LeftSideData.value === "DegreeCelsius" || RightSideData.value === "fahrenheit") {
        fahrenheit = (UserValueLeftValue * 9/5) + 32
        formula = `(${UserValueLeftValue}˚C * 9/5) + 32 = ${fahrenheit}˚F`
        UserValueRight.value = fahrenheit
        FormulaDisplay()
    } else if (LeftSideData.value === "fahrenheit" && RightSideData.value === "DegreeCelsius") {
        celcius = (UserValueLeftValue - 32 ) * 5/9
        UserValueRight.value = celcius
        formula = `(${UserValueLeftValue}˚F - 32) * 5/9 = ${celcius}˚C`
        FormulaDisplay()
    } else if (LeftSideData.value === "fahrenheit" && RightSideData.value === "fahrenheit") {
        LeftSideData.value = "DegreeCelsius"
        RightSideData.value = "fahrenheit"
        fahrenheit = (UserValueLeftValue * 9/5) + 32
        formula = `(${UserValueLeftValue}˚C * 9/5) + 32 = ${fahrenheit}˚F`
        UserValueRight.value = fahrenheit
        FormulaDisplay()

    } else if (LeftSideData.value === "DegreeCelsius" && RightSideData.value === "DegreeCelsius" || RightSideData.value === "DegreeCelsius" && LeftSideData.value === "DegreeCelsius") {
        LeftSideData.value = "fahrenheit"
        RightSideData.value = "DegreeCelsius"
        celcius = (UserValueLeftValue - 32 ) * 5/9
        UserValueRight.value = celcius
        formula = `(${UserValueLeftValue}˚F - 32) * 5/9 = ${celcius}˚C`
        FormulaDisplay()
    } else if (LeftSideData.value === "Kelvin" && RightSideData.value === "fahrenheit") {
        fahrenheit = (UserValueLeftValue - 273.15) * 9/5 + 32 
        formula = `(${UserValueLeftValue}K - 273.15) * 9/5 + 32 = ${kelvin}˚F`
         UserValueRight.value = fahrenheit
        FormulaDisplay()
    } else if (LeftSideData.value === "fahrenheit" && RightSideData.value === "Kelvin") {
        kelvin = (UserValueLeftValue - 32 ) * 5/9 + 273.15
        formula = `(${UserValueLeftValue}˚F - 32) * 5/9 + 273.15`
        UserValueRight.value = kelvin
        FormulaDisplay()
    } else if (LeftSideData.value === "Kelvin" && RightSideData.value === "DegreeCelsius") {
        celcius = UserValueLeftValue - 273.15
        formula = `${UserValueLeftValue} - 273.15 = ${celcius}` 
        UserValueRight.value = celcius
        FormulaDisplay()
    } else if (LeftSideData.value === "DegreeCelsius" && RightSideData.value === "Kelvin") {
        kelvin = UserValueLeftValue - 273.15
        formula = `${UserValueLeftValue} - 273.15 = ${celcius}` 
        UserValueRight.value = kelvin
        FormulaDisplay()
    } else if (LeftSideData.value === "Kelvin" && RightSideData.value === "Kelvin") {
        LeftSideData.value = "Kelvin"
        RightSideData.value = "DegreeCelsius"
        celcius = UserValueLeftValue - 273.15
        formula = `${UserValueLeftValue} - 273.15 = ${celcius}` 
        UserValueRight.value = celcius
        FormulaDisplay()
    }
}
UserValueLeft.addEventListener("input", () => {
   LeftVal()
})

UserValueRight.addEventListener("input", () => {
   UserValueRightValue = Number(UserValueRight.value)
})
const FormulaDisplay = () => {
    ShowFormula.innerHTML = formula
}