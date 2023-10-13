function townsToJSON(array){
  const [, ...items] = array
  //  regexp to match all spaces and |
  const regex = /\s?\|\s?/;
  const res = [];
  
  for (let i = 0; i <items.length; i++) {
    let [, town, latitude, longitude,] = items[i].split(regex); // you need to declare with let instead of const, because you need to parse to numbers in the next lines
    latitude = Number(latitude).toFixed(2);  // we fix the latitude and longitude to the second digit after the decimal point.
    longitude = Number(longitude).toFixed(2);
    const obj = {};
    obj.Town = town;
    
    obj.Latitude = Number(latitude); // .toFixed() parsed our numbers into strings, but we need them back to numbers again.
    obj.Longitude = Number(longitude);
    res.push(obj);
  }

  console.log(JSON.stringify(res));
 
}
townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);
