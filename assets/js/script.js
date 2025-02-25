document.addEventListener("DOMContentLoaded", function () {
    function setupPasswordToggle(inputId, eyeOpenId, eyeSlashId) {
        const passwordInput = document.getElementById(inputId);
        const eyeOpen = document.getElementById(eyeOpenId);
        const eyeSlash = document.getElementById(eyeSlashId);

        eyeSlash.addEventListener("click", togglePassword);
        eyeOpen.addEventListener("click", togglePassword);

        function togglePassword() {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                eyeSlash.style.display = "none";
                eyeOpen.style.display = "inline";
            } else {
                passwordInput.type = "password";
                eyeSlash.style.display = "inline";
                eyeOpen.style.display = "none";
            }
        }
    }

    setupPasswordToggle("password", "Eye", "Eye-slash");
    setupPasswordToggle("confirmPassword", "Eye-confirm", "Eye-slash-confirm");
});



document.querySelectorAll('input[name="gender"]').forEach(input => {
    input.addEventListener('change', function () {
        document.querySelectorAll('input[name="gender"]').forEach(otherInput => {
            if (otherInput !== this) {
                otherInput.checked = false;
            }
        });
    });
});
