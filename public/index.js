const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")

let userListObj = {}

userCreateSubmitButton.addEventListener("click", action)

function action(event) {
    event.preventDefault()
    userListObj = {
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        userName: document.getElementById("userName").value,
        password: document.getElementById("password").value,
        securityQuestion: document.getElementById("securityQuestion").value,
        website: document.getElementById("website").value,
        ownPhone: document.getElementById("mobile").value,
        ownMac: document.getElementById("mac").value,
        ownWindows: document.getElementById("windows").value,
        isAmish: document.getElementById("amish").value,
        userType: document.getElementById("userType").value,
        satisfaction: document.getElementById("count").value


    }

    // userListObj.email = email
    // userListObj.userName = userName
    // userListObj.password = password
    // userListObj.securityQuestion = securityQuestion
    // console.log(userListObj)
    // console.log(JSON.stringify(userListObj))
    const jsonUserListObj = JSON.stringify(userListObj)
    postUser(jsonUserListObj)
}

function postUser(userInfo) {
    // console.log('again user', userInfo)
    fetch(`./api/user`, {
        method: 'POST',
        body: userInfo,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => {
            console.log('Reached Server, Server Message:', data)
            if (data.message === "Error, username Exists") {
                document.getElementById("error").textContent = "Username Exists"
                document.getElementById("error").style.color = "red"
            } else {

                document.getElementById("error").textContent = "Username Works, Nice Pick!"
                document.getElementById("error").style.color = "green"

            }
        })

        .catch(error => console.log('Error:', error))

}


let counter = document.querySelector('#count');
let countDisplay = document.querySelector('.countDisplay');

countDisplay.textContent = counter.value;

counter.oninput = function () {
    countDisplay.textContent = counter.value;
}