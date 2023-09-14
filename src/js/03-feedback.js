import throttle from "lodash.throttle";

    const formEl = document.querySelector('.feedback-form');
    const emailInput = formEl.querySelector('input[name="email"]');
    const messageInput = formEl.querySelector('[name="message"]');
    
    formEl.addEventListener('input', throttle(saveFormData, 500));
    formEl.addEventListener('submit', onSubmit);
    
    function saveFormData() {
        const dataForm = {
            email: emailInput.value,
            message: messageInput.value
        }
        localStorage.setItem("feedback-form-state", JSON.stringify(dataForm));
    }
    
    function onSubmit(e) {
        e.preventDefault();
        emailInput.value = '';
        messageInput.value = '';

        localStorage.removeItem("feedback-form-state");

    }
    
    function dataStorage() {
        const data = localStorage.getItem("feedback-form-state");
        if (data !== null) {
            const dataForm = JSON.parse(data);
            console.log(dataForm);
            emailInput.value = dataForm.email;
            messageInput.value = dataForm.message;

        }
    }

