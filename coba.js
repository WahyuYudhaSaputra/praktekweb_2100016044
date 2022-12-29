function login() {
    if ($("#username").val() == "admin" && $("#password").val() == "password") {
      alert("You are a valid user");
    } else {
      alert("You are not a valid user");
    }
  }
  function login() {
    if ($("#username").val() == "coba" && $("#password").val() == "test") {
      alert("You are a valid user");
      window.open('HomePage.html','_self');
    } else {
      alert("You are not a valid user");
      window.open('Login.html','_self');
    }
  }
    