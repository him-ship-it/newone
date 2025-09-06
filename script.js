const loginBtn = document.getElementById("loginBtn");
const signUpBtn = document.getElementById("signUpBtn");
const nameField = document.getElementById("nameField");
const title = document.getElementById("title");
const authForm = document.getElementById("authForm");
// index.html ke script.js file mein iske jaisa code



// 'Sign Up' button par click hone par
signUpBtn.onclick = function() {
    nameField.style.maxHeight = "65px"; // Name field ko visible banaye
    title.innerHTML = "Sign Up"; // Title ko "Sign Up" mein change kare
    signUpBtn.classList.remove("disable");
    loginBtn.classList.add("disable");
};

// 'Login' button par click hone par
loginBtn.onclick = function() {
    nameField.style.maxHeight = "0"; // Name field ko hide kare
    title.innerHTML = "Login"; // Title ko "Login" mein change kare
    loginBtn.classList.remove("disable");
    signUpBtn.classList.add("disable");
};

// Form submission handle karne ke liye
authForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Default form submission ko roke

    const formTitle = title.innerHTML;
    if (formTitle === "Login") {
        window.location.href='dashboard.html';
        //alert("Login successful! (This is a placeholder)");

        // Yahan aap real login logic likh sakte hain
    } else {
        alert("Sign Up successful! (This is a placeholder)");
        // Yahan aap real sign up logic likh sakte hain
    }
});