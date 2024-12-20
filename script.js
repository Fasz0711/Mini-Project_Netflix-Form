const user=document.getElementById('user');
const pass=document.getElementById('password');
const button=document.getElementById('login');
const message=document.getElementById('message');

button.addEventListener('click', login);


function login(){
    if(user.value === 'admin' && pass.value === 'admin'){
        message.textContent='Login Successful';
        alert('Login Successful');
    }else{
        alert('Login Failed');
    }

}