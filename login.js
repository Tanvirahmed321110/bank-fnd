


document.getElementById('submit-button').addEventListener('click',function(){
    // user email
    const emailFrield=document.getElementById('email-frield')
    const userEmail=emailFrield.value
    
    // user password
    const passwordFrield=document.getElementById('password-frield')
    const userPassword=passwordFrield.value
    
    // check email and password
    if(userEmail=='tanvir@gmail.com' && userPassword=='1111'){
        window.location.href='deposite.html'
    }
    else{console.log('bed')}
})


 

















