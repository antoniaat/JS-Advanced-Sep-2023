function townsToJSON(array){
  const [, ...items] = array
  //  regexp to match all spaces and |
  const regex = /\s?\|\s?/;
  const res = [];
  
  for (let i = 0; i <items.length; i++) {
    const [, town, latitude, longitude,] = items[i].split(regex);
    latitude = Number(latitude);
    longitude = Number(longitude);
    const obj = {};
    obj.Town = town;
    // Помощ за тези 2 реда ако може
    obj.Latitude = Math.round(latitude * 100) / 100;
    obj.Longitude = Math.round(longitude * 100) / 100;
    res.push(obj);
  }

  console.log(JSON.stringify(res));
 
}
townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);
