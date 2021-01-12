// $(document).ready(function(){
//   $("#gmail").click(function(){
//   	var regex = /php\d+@@+\d[abc]/;
//     var pwd = window.prompt("Please type password: ", '');
//     if (regex.test(pwd)){
//     	window.location = "Work_gmail/Gmail.html";
//     }
//     else {
//     	alert("Hmmm, it seems like you don't know the password. Please contact me in person if necessary.");
//     }
//   });
//
//   $("#in_gmail").click(function(){
//     var regex = /php\d+@@+\d[abc]/;
//     var pwd = window.prompt("Please type password: ", '');
//     if (regex.test(pwd)){
//       window.location = "../Work_gmail/Gmail.html";
//     }
//     else {
//       alert("Hmmm, it seems like you don't know the password. Please contact me in person if necessary.");
//     }
//   });

 $(document).ready(function(){
    $("#mediaPlanner").click(function(){
      var regex = /design/;
      var pwd = window.prompt("Please type password: ", '');
      if (regex.test(pwd)){
      	window.location = "../Work_mplanner/Mplanner.html";
      }
      else {
      	alert("Please contact me in person to see the full project.");
      }
    });
});
