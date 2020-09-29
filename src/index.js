function min() {
    if (arguments.length === 1) {

        let array = arguments[0]
        if (array.length === 0) return 0
        let minValue = array[0]
        for (let i = 1; i < array.length; i++) {
            if (minValue > array[i]) {
                minValue = array[i]
            }
        }
        return minValue
    } else if (arguments.length > 1) {
        let arrayOfValue = arguments
        let minValue = arrayOfValue[0]
        for (let i = 1; i < arrayOfValue.length; i++) {
            if (minValue > arrayOfValue[i]) {
                minValue = arrayOfValue[i]
            }
        }
        return minValue
    } else if (arguments.length === 0) {
        return 0
    }
}

function max() {
    if (arguments.length === 1) {

        let array = arguments[0]
        if (array.length === 0) return 0
        let maxValue = array[0]
        for (let i = 1; i < array.length; i++) {
            if (maxValue < array[i]) {
                maxValue = array[i]
            }
        }
        return maxValue
    } else if (arguments.length > 1) {
        let arrayOfValue = arguments
        let maxValue = arrayOfValue[0]
        for (let i = 1; i < arrayOfValue.length; i++) {
            if (maxValue < arrayOfValue[i]) {
                maxValue = arrayOfValue[i]
            }
        }
        return maxValue
    } else if (arguments.length === 0) {
        return 0
    }
}

function avg() {
    if (arguments.length === 1) {

        let array = arguments[0]
        if (array.length === 0) return 0
        let avg = 0
        let sum = 0
        let lengthArray = array.length
        for (let i = 0; i < lengthArray; i++) {
            sum += array[i]
        }
        avg = sum / lengthArray
        return avg
    } else if (arguments.length > 1) {
        let arrayOfValue = arguments
        let avg = 0
        let sum = 0
        let lengtharrayOfValue = arrayOfValue.length
        for (let i = 0; i < lengtharrayOfValue; i++) {
            sum += arrayOfValue[i]
        }
        avg = sum / lengtharrayOfValue
        return avg
    } else if (arguments.length === 0) {
        return 0
    }
}

console.log(avg());