import throttle from "lodash.throttle";
const formEl  = document.querySelector(".feedback-form");
const inputEl  = document.querySelector("input");
const messageEl = document.querySelector("textarea");
const btnEl = document.querySelector("button");
let feedback;
let storageEl;
formEl.addEventListener("input", throttle(() =>{
     feedback={
        email:inputEl.value,
        message:messageEl.value,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
    let localObj = localStorage.getItem("feedback-form-state")
    storageEl = JSON.parse(localObj);
}),500);

if(inputEl.value == "" && messageEl.value == "")
{
    if(storageEl){
    inputEl.value =  storageEl.email;
    messageEl.value = storageEl.message;
    }
};
btnEl.addEventListener("click", (event)=>{
event.preventDefault();
console.log(storageEl);
inputEl.value =  "";
messageEl.value = "";
localStorage.clear();
});
