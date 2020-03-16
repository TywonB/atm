var accountFirstName = document.getElementById('accountFirstName');
var accountLastName = document.getElementById('accountLastName');
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
    let x = document.getElementById("balance");
    let deposit = document.getElementById("deposit");
    let withdrawal = document.getElementById("withdrawal");
    let withdrawalMessage = document.getElementById("withdrawalMessage");
    let depMessage = document.getElementById("depositMessage");
        x.style.display = "block";
        deposit.style.display = "none";
        withdrawal.style.display = "none";
        withdrawalMessage.style.display = "none";
        depMessage.style.display = "none";
        document.getElementById('depositInput').value='';
        document.getElementById('withdrawalInput').value='';

};

function changePageTwo() {
    let deposit = document.getElementById("deposit");
    let withdrawal = document.getElementById("withdrawal");
    let withdrawalMessage = document.getElementById("withdrawalMessage");
    let depMessage = document.getElementById("depositMessage");
        depMessage.innerText = '';
        withdrawal.style.display = "none";
        deposit.style.display = "block";
        withdrawalMessage.style.display = "none";
        depMessage.style.display = "block";
        document.getElementById('withdrawalInput').value='';
};

function changePageThree() {
    let withdrawal = document.getElementById("withdrawal");
    let deposit = document.getElementById("deposit");
    let depMessage = document.getElementById("depositMessage");
    let withdrawalMessage = document.getElementById("withdrawalMessage");
        withdrawalMessage.innerText = '';
        deposit.style.display = "none";
        withdrawal.style.display = "block";
        depMessage.style.display = "none";
        withdrawalMessage.style.display = "block";
        document.getElementById('depositInput').value='';
};

function incrementBal() {
    let message = document.getElementById("depositMessage");
    let input = document.getElementById('depositInput').value;

        if (input == '') {
            input = 0;
        } else {
            message.innerText = "Deposit Accepted!";        
        }
    let balance = parseFloat(accBal.innerText) + parseFloat(input)
        accBal.innerText = balance.toFixed(2);
};

function decrementBal() {
    let message = document.getElementById("withdrawalMessage");
    let withdrawalInput = document.getElementById("withdrawalInput").value;
    let input = document.getElementById('withdrawalInput').value;
        input = parseFloat(input)
    
        if (withdrawalInput == '') {
            withdrawalInput = 0;
        } else if (input > accBal.innerText) {
            message.innerText = "Insufficient Funds!";
            return message;
        } else {
            message.innerText = "Transaction Completed!";
        }
    let balance = parseFloat(accBal.innerText) - parseFloat(withdrawalInput);
        accBal.innerText = balance.toFixed(2);
};

function check() {
    let card = document.getElementById('cardNumber').value;
    let pin = document.getElementById('pin').value;
    let bankStuff = document.getElementById('bankStuff');
    let message = document.getElementById("errorOutput");
    let account = [
        {
            lname: "Mullican",
            fname: "Bryce",
            acc_number: "704672",
            card_number: "1584685237651846",
            pin_code: 2050,
            balance: 195043.24
        }, {
            lname: "Brown",
            fname: "Herbert",
            acc_number: "498115",
            card_number: "8846843585435487",
            pin_code: 5016,
            balance: 159437.87
        }, {
            lname: "Singleton",
            fname: "Nekiedra",
            acc_number: "962485",
            card_number: "1586815353487862",
            pin_code: 8351,
            balance: 48645.21
        }, {
            lname: "Peraza",
            fname: "Javier",
            acc_number: "970483",
            card_number: "1538483123843651",
            pin_code: 9255,
            balance: 32813.97
        }
    ];

    for (let i = 0; i < account.length; i++) {
        let x = document.getElementById("bank");
        if (card == account[i].card_number && pin == account[i].pin_code) {
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                bankStuff.style.display = 'none';
                x.style.display = "block";
            };
            accountFirstName.innerText = account[i].fname;
            accountLastName.innerText = account[i].lname;
            accBal.innerText = account[i].balance;
        } else if (!(card == account[i].card_number && pin == account[i].pin_code)) {
            message.innerText = 'No account found... TRY AGAIN';
        };
    };
};