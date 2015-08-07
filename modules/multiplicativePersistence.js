module.exports = {
    iterations: 0,
    getFirstNumberWith: function (steps) {
        if(!steps){
            return 0;
        }
        var result = 0,
            i = 0;

        while (result < steps) {
            i += 1;
            result = this.getSteps(i);
        }
        console.log(i, result);
        return i;
    },
    getSteps: function (number) {
        this.iterations = 0;
        var numberList = number.toString();

        if (numberList.indexOf('0') > 0) {
            return 1;
        }

        this.multiply(numberList);
        return this.iterations;
    },
    multiply: function (numberList) {
        var result = 1;
        this.iterations++;
        for (var i = 0, len = numberList.length; i < len; i++) {
            result *= numberList[i];
        }

        if(result < 10){
            return result;
        }
        return this.multiply(result.toString());
    }
}
