import _ from "lodash.throttle";
const storage_key = "feedback-form-state";
const formEl  = document.querySelector("form");
const email  = formEl.elements.email;
const message = formEl.elements.message;
onPageLoading();
formEl.addEventListener('input', _(onInputFn,500));
formEl.addEventListener('submit', onSubmit);
function onInputFn(){
    const feedback={
        email:email.value,
        message:message.value,
    };
    localStorage.setItem(storage_key, JSON.stringify(feedback));
};
function onPageLoading(){
    const storageEl = JSON.parse(localStorage.getItem(storage_key));
    if(!storageEl) return;
    email.value = storageEl.email;
    message.value = storageEl.message;
};
function onSubmit(e){
    e.preventDefault();
    if(!email.value || !message.value){
        return alert("All feels must be feel out!");
    }
    console.log({email: email.value, message: message.value });
    formEl.reset();
    localStorage.removeItem(storage_key);
}
