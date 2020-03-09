var accountName = document.getElementById('accountName');
var accBal = document.getElementById('accBal');

function showPin() {
    let visible = document.getElementById("pin");
    if (visible.type === "password") {
        visible.type = "text";
    } else {
        visible.type = "password";
    };
};

function showBankInfo() {

    let card = document.getElementById('cardNumber').value;
    let pin = document.getElementById('pin').value;

    if (card == '') {
        alert("ENTER Card Number");
    } else if (pin == '') {
        alert("ENTER Pin Number");
    } else if (card == '' && pin == '') {
        alert("ENTER Card and Pin Number");
    } else if (card.length < 16) {
        alert("Insufficient Card Numbers");
    } else if (pin.length < 4) {
        alert("Insufficient Pin Numbers");
    } else {
        check();
    }
};

function changePageOne() {
    var x = document.getElementById("balance");
    // input.value - balance
    // number (input.value)
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    };
};

function changePageTwo() {
    var deposit = document.getElementById("deposit");
    var withdrawal = document.getElementById("withdrawal");
    var withdrawalMessage = document.getElementById("withdrawalMessage");
    var depMessage = document.getElementById("depositMessage");
        withdrawal.style.display = "none";
        deposit.style.display = "block";
        withdrawalMessage.style.display = "none";
        depMessage.style.display = "block";
};

function changePageThree() {
    var withdrawal = document.getElementById("withdrawal");
    var deposit = document.getElementById("deposit");
    var depMessage = document.getElementById("depositMessage");
    var withdrawalMessage = document.getElementById("withdrawalMessage");
        deposit.style.display = "none";
        withdrawal.style.display = "block";
        depMessage.style.display = "none";
        withdrawalMessage.style.display = "block";
};

function incrementBal() {
    let message = document.getElementById("depositMessage");
    let input = document.getElementById('depositInput').value;
    accBal.innerText = parseFloat(accBal.innerText) + parseFloat(input);
    message.innerText = "Deposit Accepted!";
};

function decrementBal() {
    let message = document.getElementById("withdrawalMessage");
    let input = document.getElementById('withdrawalInput').value;
    accBal.innerText = parseFloat(accBal.innerText) - parseFloat(input);
    message.innerText = "Transaction Completed!";
};



function check() {

    let card = document.getElementById('cardNumber').value;
    let pin = document.getElementById('pin').value;

    var account = [
        {
            lname: "Mullican",
            fname: "Bryce",
            acc_number: "704672",
            card_number: "1584685237651846",
            pin_code: 2050,
            balance: 9500.24
        }, {
            lname: "Brown",
            fname: "Herbert",
            acc_number: "498115",
            card_number: "8846843585435487",
            pin_code: 5016,
            balance: 150000.87
        }, {
            lname: "Singleton",
            fname: "Nekiedra",
            acc_number: "962485",
            card_number: "1586815353487862",
            pin_code: 8351,
            balance: 4864.21
        }, {
            lname: "Peraza",
            fname: "Javi",
            acc_number: "970483",
            card_number: "1538483123843651",
            pin_code: 9255,
            balance: 2813.97
        }
    ];

    for (let i = 0; i < account.length; i++) {
        let x = document.getElementById("bank");
        if (card == account[i].card_number && pin == account[i].pin_code) {
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "block";
            };
            accountName.innerText = account[i].fname;
            accBal.innerText = account[i].balance;
        };
    };
};