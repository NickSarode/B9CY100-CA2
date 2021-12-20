data1 = [{
  'name' : 'us dollar',
  'abbr' : 'USD',
  'val' : 1.1562
},{
  'name' : 'indian rupee',
  'abbr' : 'INR',
  'val' : 86.725
},{
  'name' : 'aus dollar',
  'abbr' : 'AUD',
  'val' : 1.64567
},{
  'name' : 'ca dollar',
  'abbr' : 'CAD',
  'val' : 1.7466
},{
  'name' : 'chinese yuan',
  'abbr' : 'CNY',
  'val' : 7.8545
},{
  'name' : 'japanese yen',
  'abbr' : 'JPY',
  'val' : 21.6455
}]

const url = "http://localhost:8080/getRates"
fetch(url).then((response)=>{
  return response.json();  // converting byte data to json
}).then(data=>{
  //console.log(data)
  //console.log(data.rates)
  var ratesStr = JSON.stringify(data.rates);
  let ratesObj = Object.entries(data.rates);
  //console.log(ratesObj[1][0])
  console.log(ratesObj);
  // document.getElementById("strRatesObj").value = ratesObj
  let cur = '';
//   Object.entries(data.rates).forEach((entry) => {
//   const [key, value] = entry;
//   //console.log(`${key}: ${value}`);
//   let key1 = entry[0];
//   let value1 = entry[1];
//   var mainContainer = document.getElementById("currTable");
//   cur += ' <tr> '
//          ' <td> '+ key +' </td>'
//          ' <td> '+ value + ' </td>'
//          ' </tr> '
//   //   var div = document.createElement("div");
// });
  cur += '<table class="table table-dark table-hover justify-content-center">'+
        '<thead class="table table-dark">'+
        '<tr>'+
        '<th>   </th>'+
        '<th>Currency</th>'+
        '<th>Rate</th>'+
        '</tr>'+
        '</thead>'+
        '<tbody>'
  Object.entries(data.rates).forEach(entry => {
    let key = entry[0];
    let value = entry[1];
    rates = ' '+ key + value + ' ';
    //var mainContainer = document.getElementById("currTable");
    //var div = document.createElement("div");
    cur += ' <tr> ' +
                    ' <td> '+ ' ' +' </td>' +
                    ' <td> '+ key +' </td>' +
                    ' <td> '+ value + ' </td>' +
                    ' </tr> ';
    //mainContainer.appendChild(div);
    //console.log(key, value);
  });
  cur +=
    '</tbody> </table>'

   $('div.container').append(cur)
   //console.log(cur)
  //console.log(rates)
}).catch(error=>{
    // logging error
   console.log(error);
})
