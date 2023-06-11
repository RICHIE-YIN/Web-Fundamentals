//                                          how to create alerts
//                    <button onclick="box1like()" id="box1button">16 likes</button>

function box1like() {
    alert("Ninja was liked");
}

//                                          how to change text
//                      <button onclick="logout()" id="login">Login</button>

function logout() {
    document.querySelector('#login').innerText = 'Logout';
}

//                                          how to delete
//            <button onclick="hide(this)" id="buttondefinition">Add Definition</button>
function hide(element) {
    element.remove();
}