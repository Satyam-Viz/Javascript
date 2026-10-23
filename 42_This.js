function setUsername(username){
    this.username = username;
    // console.log("Called");
}

function userDetails(username, email, password){
    setUsername.call(this, username);
    this.email = email;
    this.password = password;

    function getuserDetails(){
        console.log(`Hello ${username}, \n You're Email is ${email} and the Password is ${password}`);
    }
}

const Satyam = new userDetails("Satyam", "Satyam@gmail.com", "12345678");

// Satyam.getuserDetails();
console.log(Satyam);