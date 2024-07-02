function hexValueToRGB(hex: string) {
    const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    const RGB = []
    if (hex.includes("#")) {
        hex = hex.replace("#", "")
    }
    let abbreviated = hex.length === 3;

    //if the hex is abbreviated split all characters instead of making pairs
    const hexRGB = abbreviated ? hex.split("") : hex.match(/.{1,2}/g) || []

    for (let i = 0; i < 3; i++) {
        const stringTwo = hexRGB[i].split("")
        const colorCode = []
        for (let j = 0; j < stringTwo.length; j++) {
            colorCode.push(hexValues.indexOf(stringTwo[j]))
        }
        if (abbreviated) {
            RGB.push(colorCode[0] + (colorCode[0] * 16))
        } else {
            colorCode[0] *= 16
            RGB.push(colorCode[0] + colorCode[1])
        }
    }
    return RGB
}


// (a*16) + (b * 1) = c

function rgbToHexValue(red: number, green: number, blue: number) {
    const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    function colorToHex(color: number) {
        for (let i = 0; i <= 15; i++) {
            let value = i * 16
            let remaining = color - value
            if ((color - value) <= 16) {
                //console.log(hexValues[i])
                //console.log(hexValues[remaining])
                return hexValues[i].toString() + hexValues[remaining].toString()
            }

        }
        return "??"
    }

    return colorToHex(red) + colorToHex(green) + colorToHex(blue)

}

console.log(rgbToHexValue(255, 100, 255))
