module.exports = function toReadable (number) {
    let res;
      const obj = {
        'oneDig': {
            '0': 'zero',
            '1': 'one',
            '2': 'two',
            '3': 'three',
            '4': 'four',
            '5': 'five',
            '6': 'six',
            '7': 'seven',
            '8': 'eight',
            '9': 'nine'
        },
        'twoBeginOne': {
            '10': 'ten',
            '11': 'eleven',
            '12': 'twelve',
            '13': 'thirteen',
            '14': 'fourteen',
            '15': 'fifteen',
            '16': 'sixteen',
            '17': 'seventeen',
            '18': 'eighteen',
            '19': 'nineteen'
        },
        'twoDig': {
            '2': 'twenty',
            '3': 'thirty',
            '4': 'forty',
            '5': 'fifty',
            '6': 'sixty',
            '7': 'seventy',
            '8': 'eighty',
            '9': 'ninety'
        },
        'three': 'hundred'
    }

    if (number.toString().length == 1) {
        res = obj.oneDig[number];
    } else if (number.toString().length == 2) {
        if (number.toString()[0] == 1) {
            res = obj.twoBeginOne[number];
        } else {
            if (number.toString()[1] == 0) {
                res = obj.twoDig[number.toString()[0]];
            } else {
                res = obj.twoDig[number.toString()[0]] + " " + obj.oneDig[number.toString()[1]];
            }
        }
    } else if (number.toString().length == 3) {
        let num = number.toString()[1] + number.toString()[2];
        if (num.toString().length == 2) {
            if (num.toString()[0] == 1) {
                res = obj.oneDig[number.toString()[0]] + " " + "hundred" + " " + obj.twoBeginOne[num];
            } else {
                if (num.toString()[1] == 0) {
                    res = obj.oneDig[number.toString()[0]] + " " + "hundred" + " " + obj.twoDig[num.toString()[0]];
                } else {
                    res = obj.oneDig[number.toString()[0]] + " " + "hundred" + " " + obj.twoDig[num.toString()[0]] + " " + obj.oneDig[num.toString()[1]];
                }
            }
    }
}

let arr = res.split(" ");
let arr2 = arr.filter(item => item != "undefined");
return arr2.join(" ");

}
