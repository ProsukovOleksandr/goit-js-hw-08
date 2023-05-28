const formEl  = document.querySelector(".feedback-form");
const inputEl  = document.querySelector("input");
const messageEl = document.querySelector("textarea");
const btnEl = document.querySelector("button");
let feedback;
formEl.addEventListener("input", () =>{
     feedback={
        email:inputEl.value,
        message:messageEl.value,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
});
let storageEl = JSON.parse(localStorage.getItem("feedback-form-state"));
if(inputEl.value == "" && messageEl.value == "")
{
    if(storageEl){
        inputEl.value =  storageEl.email;
        messageEl.value = storageEl.message;
    };
};
btnEl.addEventListener("click", (event)=>{
event.preventDefault();
console.log(storageEl);
inputEl.value =  "";
messageEl.value = "";
localStorage.clear();
});
