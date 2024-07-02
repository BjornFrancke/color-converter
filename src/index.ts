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
                return hexValues[i].toString() + hexValues[remaining].toString()
            }

        }
        return "??"
    }

    return colorToHex(red) + colorToHex(green) + colorToHex(blue)

}

//0 to 360. 0 (or 360) is red, 120 is green, 240 is blue.
function rgbToHsl(red: number, green: number, blue: number) {
    const hue = {
        red: (red / 255),
        green: (green / 255),
        blue: (blue / 255)
    }

    const rgbArr = [hue.red, hue.green, hue.blue]
    //Find the minimum and maximum
    rgbArr.sort()
    let max = rgbArr[rgbArr.length - 1]
    let min = rgbArr[0]
    console.log("max" + max)
    console.log("min" + min)

    //Luminance
    const l = (max + min)/2

    let s: number
    if (min === max) {
        s = 0
    } else {
        if (l <= 0.5) {
            s = (max - min) / (max + min)
        } else {
            s = (max - min) / (2.0 - max - min)
        }
    }
    let h: number
    if (hue.red === max) {
        h = (hue.green - hue.blue)/(max-min)
    } else if (hue.green === max) {
        h = 2.0 + (hue.blue - hue.red) / (max-min)
    } else if (hue.blue === max) {
        h = 4.0 + (hue.red - hue.green) / (max-min)
    } else {
        throw new Error("Invalid hue value")
    }
    //Convert hue to degrees
    h *= 60
    h = Math.ceil(h)

    let S = Math.ceil(s*100)
    let L = Math.ceil(l*100)



    return [h, S, L]

}

console.log(rgbToHsl(251, 29, 9))

// 5, 97, 51
