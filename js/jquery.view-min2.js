    // var regex = /php\d+@@+\d[abc]/;
    var regex = /yu-design/;
    var pwd = window.prompt("Please type password: ", '');
    if (regex.test(pwd)){
    }
    else {
        alert("Hmmm, please contact me in person for access");
        window.location = "../index.html";
    }
