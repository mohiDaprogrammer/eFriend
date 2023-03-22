
function Login() {
  // retrieving data
  var uid = document.getElementById("Username").value;
  var pw = document.getElementById("Password").value;

  // storing data
  var user = localStorage.setItem("uid", uid);
  var pass = localStorage.setItem("pw", pw);

  // retrieving stored data and using it for calculation
  var user = localStorage.getItem("uid", uid);
  var pass = localStorage.getItem("pw", pw);

  var a, b;
  a = "Wooohooo";
  b = 1234;

  if (a==user && b==pass) {
    alert("Login Successfull !");
  } else{
    alert("Invalid Details !");
  }
}
function Signup(){
  // retrieving data
  var uid = document.getElementById("Username1").value;
  var pw = document.getElementById("Password1").value;
  var em = document.getElementById("Email1").value;
  // storing data
  var user = localStorage.setItem("uid", uid);
  var pass = localStorage.setItem("pw", pw);
  var email = localStorage.setItem("em", em);
  // retrieving stored data and using it for calculation
  var user = localStorage.getItem("uid", uid);
  var pass = localStorage.getItem("pw", pw);
  var email = localStorage.getItem("em", em);

  var a, b, c;
  a = "Wooohooo";
  b = "Yahoo1971";
  c = "prank-man01@gmail.com";

  if (a==user && b==pass && c==email) {
    alert("User Registration Has been completed successfully!");

  } else{
    alert("Invalid Registration");
  }

}
