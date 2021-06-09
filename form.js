var nameV;
var emailV;
var passV;
var c_passV;


registered_users = {

}

function get_details(){
    nameV = document.getElementById('name').value
    emailV = document.getElementById('email').value
    passV = document.getElementById('password').value
    c_passV = document.getElementById('password').value
    

    // validation

    if (emailV in registered_users){
        alert("You are already registered.")
    }
    else{
        if (passV === c_passV){
        registered_users[emailV] = {names : nameV, password: passV}
        alert("Registered.")
        }
        else{
            alert("Passwords did not match.")
        }
    }
}



