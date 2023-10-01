function submit1(){
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("Mobile").value;
    var email = document.getElementById("Email").value;
    var pass = document.getElementById("pass").value;
    var co_pass = document.getElementById("c_pass").value;

    if (name == "")
    {
        alert("Name Feild is Blank !!")
    }

    if (mobile == "")
    {
        alert("Mobile Feild is Blank !!")
    }

    if (email == "")
    {
        alert("Email Feild is Blank !!")
    }

    if (pass == "")
    {
        alert("Password Feild is Blank !!")
    }

    if (co_pass == "")
    {
        alert("Confirm Password Feild is Blank !!")
    }

    if (pass == co_pass)
    {
        document.getElementById("pass_status").innerHTML = "Password Matched !!";
    }
    else
    {
        document.getElementById("pass_status").innerHTML = "Password Doesn't Matched !!";
    }

}