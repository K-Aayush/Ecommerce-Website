// popup
window.addEventListener("load", function(){
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "block";
        },
        2000
    )
})

document.querySelector("#close").addEventListener (
    "click", function(){
        document.querySelector(".popup").style.display = "none";
    })

// contacts form
function validate() {
    const Name = document.getElementById("Fname");
    const Email = document.getElementById("E-adress");
    const subject = document.getElementById("Sub");
    const form = document.getElementById("form");

    if(Name.value.trim() =="" || Email.value.trim() =="" || subject.value.trim() =="" || form.value.trim() == ""){
        alert("No blank values allowed!");
        return false;
    }
    else {
        return true;
    }
}

// News letter
function validEmail() {
    const email = document.getElementById("email");

    if(email.value.trim() ==""){
        alert("No blank values allowed!");
        return false;
    }
    else {
        return true;
    }
}


