const repeatString = function(string, num){
        let result = '';
        for(i = 0; i > num; i++){
            result += string;
        }
        return result;
};


console.log(repeatString('hello', 3));
