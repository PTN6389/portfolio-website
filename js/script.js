(function() {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#email');

    function showErrorMessage(input,message) {
        let container = input.parentElement; //the .input-wrapper
        //check and remove any existing errors
        let error = container.querySelector('.error-message');
        if(error) {
            container.removeChild(error);
        }
        //add error if message isn't empy
        if(message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateEmail() {
        let value = emailInput.value;
        if(!value) {
            showErrorMessage(emailInput,'Email is a required field.');
            return false;
        }
        if(value.indexOf('@') === -1){
            showErrorMessage(emailInput,'You must enter a valid email address');
            return false;
        }
        if(value.indexOf('.') === -1) {
            showErrorMessage(emailInput,'You must enter a valid email address');
            return false;
        }
        showErrorMessage(emailInput,null);
        return true;
    }

    function validateForm() {
        let isValidEmail = validateEmail();
        return isValidEmail;
    }

    form.addEventListener('submit',(e) => {
        e.preventDefault(); //do not submit to server
        if(validateForm()) {
            alert('Success!');
        }
    })

    emailInput.addEventListener('input',validateEmail);
})();