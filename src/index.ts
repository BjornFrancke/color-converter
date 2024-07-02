function hexValueToRGB(hex: string) {
    const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    const RGB = []
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

console.log(hexValueToRGB("FFF"))
