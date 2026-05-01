
document.cookie = "username=user or  admin; expires=Thu, 01 Jan 2026 00:00:00 UTC; path=/";
console.log(document.cookie);

function setCookie(name, value, days) {
    let d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "username" + value + ";" + expires + ";path=/";
}

setCookie("user", "admin", 7); // cookie valable 7 jours
if (document.cookie = "visited=true; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT") {
    alert("Bienvenue pour la première fois !");

} else {
    document.cookie.includes("visited=true")
    alert("Bienvenue à nouveau !");
}
function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // enregistrer un "compte"
    localStorage.setItem("user", username);
    localStorage.setItem("pass", password);

    document.getElementById("message").innerHTML = "Compte créé !";
}
function sendEmail() {
    const templateParams = {
        from_name: "Leviathan",
        to_name: "Admin",
        message: "Bonjour, ceci est un test",
        reply_to: "lelackwarren@gmail.com"
    };

    emailjs.send('SERVICE_ID', 'TEMPLATE_ID', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}
