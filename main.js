const rightUserName = "janne";
const rightPassWord = "test";

const header = document.querySelector("header");
const main = document.querySelector("main");

function loggadInPage() {

    const nameInput = document.createElement("input");
    nameInput.placeholder = "Användare namn";
    nameInput.className = "padding";

    const passWordInput = document.createElement("input");
    passWordInput.placeholder = "Lösenord";
    passWordInput.className = "padding";

    const loginBtn = document.createElement("button");
    loginBtn.textContent = "Logga in";
    loginBtn.className = "padding hover";

    header.append(nameInput, passWordInput, loginBtn);

    const mainText = document.createElement("h2");
    mainText.textContent = "Välkommen logga in";

    main.appendChild(mainText);

    loginBtn.addEventListener("click", () => {

        const nameInputValue = nameInput.value;
        const passWordInputValue = passWordInput.value;

        if (nameInputValue === rightUserName && passWordInputValue === rightPassWord) {
            localStorage.setItem("AnvändareNamn", rightUserName);
            localStorage.setItem("Lösenord", rightPassWord);

            location.reload();
        }
        else if (nameInputValue !== rightUserName && passWordInputValue !== rightPassWord) {
            mainText.textContent = "Fel Försök igen";
        }
    });
}

function loggadOutPage() {

    const logOutBtn = document.createElement("button");
    logOutBtn.textContent = "Logga ut";
    logOutBtn.className = "padding hover";

    header.appendChild(logOutBtn);

    const mainText = document.createElement("h2");
    mainText.textContent = "Välkommen Janne till min sida";

    main.appendChild(mainText);

    logOutBtn.addEventListener("click", ()=> {
        localStorage.clear();
        location.reload();
    });
}

if (localStorage.getItem('AnvändareNamn') === null) {
    loggadInPage();
}
else {
    loggadOutPage();
}