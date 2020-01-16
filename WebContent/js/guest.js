window.addEventListener('load',(e)=>{
    var signupBtns = document.querySelectorAll('.sign-up');
    signupBtns.forEach( (signupBtn,number,list)=>{
        signupBtn.addEventListener('click',(e)=>{
            window.location.href="signup.html";
        })
    })

    var loginBtns = document.querySelectorAll('.log-in');
    console.log('loginBtns',loginBtns);
    loginBtns.forEach( (loginBtn,number,list)=>{
        loginBtn.addEventListener('click',(e)=>{
            window.location.href="signin.html";
        })
    })
});