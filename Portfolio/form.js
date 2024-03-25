const form = document.querySelector('form');
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const subject = document.querySelector("#subject");
const mess = document.querySelector("#message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}
    <br> Phone Number: ${phone.value} <br> Message: ${mess.value}`

    Email.send({
        SecureToken : "90e23d29-9cd2-4096-9293-6e70a4d6df34",
        To: 'derikimoura1209@gmail.com',
        From: "derikimoura1209@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item")

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error")
            item.parentElement.classList.add("error")
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error")
                item.parentElement.classList.remove("error")
            }
            else {
                item.classList.add("error")
                item.parentElement.classList.add("error")
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-zA-Z\d\.-]+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?)$/;
    const errorTxtEmail = document.querySelector(".error-txt.email")

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address"
        }
        else {
            errorTxtEmail.innerText = "Email Address can't be blank"
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

console.log(form)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error")
        && !subject.classList.contains("error") && !mess.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }
});