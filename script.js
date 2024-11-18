const mixedArray = [1, "hello", true, false, null, undefined, {name: "John"}, [1, 2, 3], 2, "world", true];

let processData = ()=>{
    let dataCount = {
        totalSum: 0,
        concatenatedString: '',
        trueCount: 0,
        nullUndefinedCount: 0,
        objectCount: 0,
        arrayCount: 0,
      }
    for(let i = 0; i < mixedArray.length; i++ ){

        if(typeof(mixedArray[i]) === "string"){
            let x = dataCount.concatenatedString += mixedArray[i];
        }
        else if(Array.isArray(mixedArray[i])){
            dataCount.arrayCount++
        }
        else if(typeof(mixedArray[i]) === "number"){
            dataCount.totalSum ++;
        }
        else if(typeof(mixedArray[i]) === "boolean"){
            dataCount.trueCount ++;
        }
        else if(typeof(mixedArray[i]) === "undefined" || mixedArray[i] === null){
            dataCount.nullUndefinedCount ++;
        }
        else if(typeof(mixedArray[i]) === "object"){
            dataCount.objectCount ++;
        }

    }
    return dataCount;

}

console.log(processData(mixedArray))