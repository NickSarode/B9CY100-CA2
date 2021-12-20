// function submitform(){
//    alert("Sending Json");
//      let email = document.getElementById('email').value;
//      let name = document.getElementById('name').value;
//      let currency = document.getElementById('currencyDropdown').value;
//      let threshold = document.getElementById('threshold').value;
//      let condition = document.getElementById('condition').value;
//    alert(email + ' ' + name + ' ' + currency + ' ' + threshold + ' ' + condition);
//    var todo = {
//        "email": email,
//        "name" : name,
//        "currency": currency,
//        "threshold": threshold,
//        "condition": condition
//    };
//    alert(JSON.stringify(todo));
// //    $.ajax({
// //     type: 'POST',
// //     url: 'http://localhost:8080/addUser',
// //     data: JSON.stringify(todo),
// //     contentType: 'application/json',
// //     success: function(data) {
// //       alert("success");
// //     }
// // });
// // try{
// //   const response = await fetch('http://localhost:8080/addUser',{
// //   method: "POST",
// //   body: JSON.stringify(todo),
// //   headers: {
// //     'Content-Type':'application/json'
// //   }
// // });
// // } catch(e){
// //   console.error(e);
// //   alert('there is an error');
// // }
//
//
//  }

function loading(){
  document.getElementById('subscription').style.display = "none";
}
// Jquery on fetch id is implemented to get user data based on email id
$('#fetch').click(function(event){
  event.preventDefault();
  var email = document.getElementById("email").value;
  // alert(email)
  const url = "http://104.40.132.4:5000/getUser/"+email;
  debugger;
  // alert(url)
  console.log(1)
  console.log(url)
  $.ajax({// ajax added to fetch the data from API
      type: "GET",
      //url: "http://api.exchangeratesapi.io/v1/latest?access_key=f27c66a897df264865447f0c2c682894",
      url: url,
      data: "{}",
      success: function (data) {
          console.log(data);
          //let details = ''
          var dataList = Object.entries(data)
          console.log(dataList);
          var details = []
          details = dataList[1]
          var d = details[1]
          //var obj = {d}
          console.log(d)
          //console.log('data: '+ d[0]);
          console.log(d.length);
          console.log(d[0])
          if(d.length > 0){
            var name = d[0]['name']
                  var email_add = d[0]['email']
                  var currency = d[0]['currency']
                  var threshold = d[0]['threshold']
                  var condition = d[0]['condition']
            console.log(name + ' ' + email_add + ' ' + currency + ' ' + threshold + ' ' + condition)
            $("#name").val(name);
                   document.getElementById('name').value = name;
                   document.getElementById('currencyDropdown').value = currency;
                   document.getElementById('threshold').value = threshold;
                   document.getElementById('condition').value = condition;
            console.log("success");
            document.getElementById('subscription').style.display = "block";
            document.getElementById('email').disabled = true;
          } else {
            alert("There is no subscription with this Email ID");
            document.getElementById('email').value = "";
          }

          // if(d.length > 0){
          //   console.log(d[0])
          //       var name = d[0]['name']
          //       var email_add = d[0]['email']
          //       var currency = d[0]['currency']
          //       var threshold = d[0]['threshold']
          //       var condition = d[0]['condition']
          //       alert(name + ' ' + email_add + ' ' + currency + ' ' + threshold + ' ' + condition);
          //        document.getElementById("name").value = name;
          //        document.getElementById("currencyDropdown").value = currency;
          //        document.getElementById("threshold").value = threshold;
          //        document.getElementById("condition").value = condition;
          // }
      }
  });

})
