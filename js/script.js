let email = document.getElementById("email");
let dangerIcon = document.getElementById('danger-button');
let dangerText = document.getElementById("danger-text");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    if (email.validity.typeMismatch) {
        e.preventDefault();
        dangerIcon.style.opacity = 1;
        dangerText.style.opacity = 1;
    } else {
        dangerIcon.style.opacity = 0;
        dangerText.style.opacity = 0;
    }
})

/*const input = document.getElementById("email-input-box");
const submitBtn = document.getElementById("submit-btn");

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validate(email) {
  if (!validateEmail(email)) {
    const alertMsg = document.getElementById("alert-msg");
    const alertFlag = document.getElementById("alert-flag");
    alertMsg.classList.add("active");
    alertFlag.classList.add("active");

    setTimeout(() => {
      alertMsg.classList.remove("active");
      alertFlag.classList.remove("active");
    }, 1000);
  } else {
    input.value = "";
  }
}

submitBtn.addEventListener("click", (evt) => {
  evt.preventDefault();

  var email = input.value;
  validate(email);
});
*/