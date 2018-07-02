const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")

let userListObj = {}

userCreateSubmitButton.addEventListener("click", action)

function action(event) {
    event.preventDefault()
    const email = document.getElementById("email").value
    const userName = document.getElementById("userName").value
    const password = document.getElementById("password").value
    const securityQuestion = document.getElementById("securityQuestion").value

    userListObj.email = email
    userListObj.userName = userName
    userListObj.password = password
    userListObj.securityQuestion = securityQuestion
    console.log(userListObj)
    console.log(JSON.stringify(userListObj))
    const jsonUserListObj = JSON.stringify(userListObj)
    postUser(jsonUserListObj)
}

function postUser(userInfo) {
    console.log('again user', userInfo)
    fetch(`./api/user`, {
        method: 'POST',
        body: userInfo,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(data => console.log('Reached Server, Server Message:', data))
        .catch(error => console.error('Error:', error))
}