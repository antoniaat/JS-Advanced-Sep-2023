function rectangle(width,height,color) {
    return {
        width: width,
        height: height,
        color: color.substring(0,1).toUpperCase()+color.substring(1),
        calcArea : function calcArea(){
            return width * height
        }
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());