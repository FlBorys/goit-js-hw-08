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
    const dataInfo = localStorage.getItem("feedback-form-state");
    console.log(dataInfo);
        emailInput.value = '';
        messageInput.value = '';

        localStorage.removeItem("feedback-form-state");
    }
    
    function dataStorage() {
                // const data = localStorage.getItem("feedback-form-state");
        if (dataInfo !== null) {
            const formData = JSON.parse(dataInfo);
            emailInput.value = formData.email;
            messageInput.value = formData.message;

        }
    }

