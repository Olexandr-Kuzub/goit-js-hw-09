const STORAGE_KEY = "feedback-form-state";
const formEl = document.querySelector('.feedback-form')

let formData = {
    email: "",
    message: "",
};

document.addEventListener('DOMContentLoaded', () => {
    const data = loadFromLS(STORAGE_KEY);

    if (data) {
        formData = data;

        formEl.elements.email.value = formData.email;
        formEl.elements.message.value = formData.message;
    }
});

formEl.addEventListener('input', (event) => {
    formData.email = formEl.elements.email.value.trim();
    formData.message = formEl.elements.message.value.trim();

    saveToLS(STORAGE_KEY, formData);
})



formEl.addEventListener("submit", event => {
  event.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
    
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);

  formData = {
    email: "",
    message: "",
  };

  
  formEl.reset();
});



function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

