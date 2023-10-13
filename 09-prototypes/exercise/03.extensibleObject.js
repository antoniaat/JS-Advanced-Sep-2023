function extensibleObject(params) {
    let parentObj = {};
    let childObj = Object.create(parentObj);
    
    childObj.extend = function (obj){
        let objAsArray = Object.entries(obj);
        for(let [key, value] of objAsArray){
            if(typeof value === 'function'){
                parentObj[key] = value;
            }else{
                childObj[key] = value;
            }
        }
    }
    return childObj;
}
