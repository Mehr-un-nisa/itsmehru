var database = {
  username: "Mehru",
  password: "2345",
};

var usernameprompt = prompt("what is your name");
var userpasswordprompt = prompt("what is your passsword");

function signin(name, pass) {
  if (name == database.username && pass == database.password) {
    console.log("True username is", usernameprompt);
  } else {
    console.log("False username is", usernameprompt);
  }
}
console.log(signin(usernameprompt, userpasswordprompt));
