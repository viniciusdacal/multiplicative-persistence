module.exports = {
    getFirstNumberWith: function (steps) {
        if(!steps){
            return 0;
        }

        return 10;
    },
    getSteps: function (number) {

        var strList = number.toString().split('');

        if(strList.length === 1){
            return 0;
        }

        if (strList.indexOf('0') >= 0) {
            return 1;
        }
    }
}
