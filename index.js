let email,password;

function check(){
    mail = document.getElementById("email").value;
    password = document.getElementById("password").value
    { 
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if(password.match(passw)) 
        { 
        alert('Correct, try another...')
        return true;
        }
        else
        { 
        alert('Wrong...!')
        return false;
        }
    }
console.log(email)
console.log(password)

}


