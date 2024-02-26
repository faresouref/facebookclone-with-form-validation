const show = () => {
    const form = document.querySelector("#signup")
    form.classList.toggle("show")
    document.querySelector(".layer").style.display="block"

}

const hide = () => {
    const hide = document.querySelector(".show")
    hide.classList.remove("show")
    document.querySelector(".layer").style.display="none"
}



function emailValidate() {
    let x = document.getElementById('email').value;
    let text;
    if (x.indexOf('@') == -1) {
        text = 'Enter a valid email';
        console.log(text);
        document.getElementById('demo').innerHTML = text; // Setting innerHTML to display the error message
    } else {
        document.getElementById('demo').innerHTML = ''; // Clearing any previous error message if email is valid


        let y= document.getElementById('pass').value;
        let text2;
        if (y.length <= 8) {
            text2 = 'enter more characters';
            console.log(text2);
            document.getElementById('passs').innerHTML = text2; // Setting innerHTML to display the error message
    } else {
        document.getElementById('passs').innerHTML = ''; // Clearing any previous error message if email is valid
    }

    }
}

