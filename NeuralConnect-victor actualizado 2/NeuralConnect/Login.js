const $buttonSignIn= document.querySelector(".sign-in-button"),
$buttonSignUp= document.querySelector(".sign-up-button"),
$signUp= document.querySelector(".sign-up"),
$signIn= document.querySelector(".sign-in");

document.addEventListener('click', e=> {
    if (e.target === $buttonSignIn || e.target === $buttonSignUp){
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});