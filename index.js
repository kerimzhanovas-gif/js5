"Задание №1"
const users = [
    {
        login: "rufina",
        password: "111",
        name: "Руфина"
    },
    {
        login: "samina",
        password: "222",
        name: "Самина"
    },
    {
        login: "ramina",
        password: "333",
        name: "Рамина"
    },
    {
        login: "imran",
        password: "444",
        name: "Имран"
    },
    {
        login: "diana",
        password: "555",
        name: "Диана"
    }
];
const loginInput = document.querySelector('#loginInput');
const passwordInput = document.querySelector('#passwordInput');
const loginBtn = document.querySelector('#loginBtn');
const authMessage = document.querySelector('#authMessage');
let loginUser = () => {
    let enteredLogin = loginInput.value.trim();
    let enteredPassword = passwordInput.value.trim();
    if (enteredLogin === '' || enteredPassword === '') {
        authMessage.textContent = "Заполните все поля!";
        authMessage.className = "message error";
        return;
    }
    let foundUser = users.find(user => user.login === enteredLogin && user.password === enteredPassword);
    if (foundUser) {
        authMessage.textContent = `Здравствуйте, ${foundUser.name}!`;
        authMessage.className = "message success";
    } else {
        authMessage.textContent = "Неверный логин или пароль!";
        authMessage.className = "message error";
    }
};
loginBtn.addEventListener('click', loginUser);

"Задание №2"
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += Number(num);
    }
    return total;
}
console.log("sumAll(2, 5, 6, 7) ->", sumAll(2, 5, 6, 7)); 
console.log("sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) ->", sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //примеры, которые были написаны в задании
const numbersInput = document.querySelector('#numbersInput');
const calcBtn = document.querySelector('#calcBtn');
const sumResult = document.querySelector('#sumResult');
let handleCalculate = () => {
    let value = numbersInput.value;
    let argsArr = value.split(/[,|\s]+/).map(item => item.trim()).filter(item => item !== "");
    let result = sumAll(...argsArr);
    sumResult.textContent = result;
};
calcBtn.addEventListener('click', handleCalculate);