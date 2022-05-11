let wBtn = document.getElementById('withdraw');
let bBtn = document.getElementById('balance');
let dBtn = document.getElementById('deposite');
let cpBtn = document.getElementById('cp');

let balance = 0;

let passWord;

let pin = prompt('Enter pin');

passWord = pin;

cpBtn.addEventListener('click', function(){
    let opw = prompt('Enter Original Pin');
    if(opw ==passWord){
        let npw = prompt('Enter New Pin');
        if(npw == passWord){
            alert('New Pin Cannot Be Identical As Old Pin')
        }else{
        passWord = npw;
        alert('Operation Successful!');
        };
    }else{
        alert('Wrong Pin, Please Try Again :)');
    }
    
})

wBtn.addEventListener('click', function(){
    let withdrawString = prompt('Enter Amount');
    let withdraw = parseInt(withdrawString);
    if(withdraw < balance){
        balance = balance - withdraw;
    }else{
        alert('Insufficient Balance');
    }
});

bBtn.addEventListener('click', function(){
    if(balance < 100){
        alert('Balance lower Than 100$');
    };
    alert(balance);
});

dBtn.addEventListener('click', function(){
    alert('Deposite No More Than 1000$')
    let amount = prompt('Enter Amount');
    let number = parseInt(amount);
    if(number <= 1000){
        balance = number + balance;
    }else{
        alert('Deposite failed: Amount Over 1000$');
    };
    
});