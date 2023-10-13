function requestValidator(obj) {
    //Invalid request header: Invalid {Method/URI/Version/Message}
    const validMethod = ['GET', 'POST', 'DELETE' , 'CONNECT'];
    const uriPattern = /^[\w.]+$/g;
    const version = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const specialCharacters = [`<`, `>`, `\\`, `'`, `"`, `&`];

    if (!validMethod.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }


    if(!obj.uri || obj.uri !== "*" && !obj.uri.match(uriPattern)) {
        throw new Error("Invalid request header: Invalid URI");
    }

    if(!version.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }
    
    if(!obj.hasOwnProperty('message')) {
        throw new Error("Invalid request header: Invalid Message");
    }
    for (let iterator of obj.message) {
        if(specialCharacters.includes(iterator)) {
            throw new Error("Invalid request header: Invalid Message");
        }
    }
    return obj;
}
console.log(requestValidator(
    {
    method: 'GET',
    uri: 'm',
    version: 'HTTP/1.1',
    message: ``
    }
));