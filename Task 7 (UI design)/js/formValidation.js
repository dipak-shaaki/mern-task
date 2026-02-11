const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const submitButton = form.querySelector(".btn-submit");

form.addEventListener("submit", event => {
    event.preventDefault();
    form.classList.add("was-validated");

    if (!form.checkValidity()) {
        formMessage.textContent = "Please fix the highlighted fields.";
        formMessage.style.color = "#d64545";
        return;
    }

    formMessage.textContent = "Sending...";
    formMessage.style.color = "#1f1f1f";
    submitButton.classList.add("is-loading");
    submitButton.disabled = true;

    setTimeout(() => {
        formMessage.textContent = "Thanks! We will reply shortly.";
        formMessage.style.color = "#26a15b";
        submitButton.classList.remove("is-loading");
        submitButton.disabled = false;
        form.reset();
        form.classList.remove("was-validated");
    }, 1200);
});
