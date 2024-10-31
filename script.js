$(document).ready(function() {
    $("#myForm").submit(function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Clear previous errors
        $(".error").text("");

        // Get form values
        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const password = $("#password").val().trim();

        // Validation flags
        let isValid = true;

        // Name validation
        if (name === "") {
            $("#nameError").text("Name is required.");
            isValid = false;
        } else if (name.length < 3) {
            $("#nameError").text("Name must be at least 3 characters long.");
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email === "") {
            $("#emailError").text("Email is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#emailError").text("Enter a valid email address.");
            isValid = false;
        }

        // Password validation
        if (password === "") {
            $("#passwordError").text("Password is required.");
            isValid = false;
        } else if (password.length < 6) {
            $("#passwordError").text("Password must be at least 6 characters long.");
            isValid = false;
        }

        // If the form is valid, submit it
        if (isValid) {
            alert("Form submitted successfully!");
            // You can add code here to actually submit the form data
            // $.post or $.ajax if needed
        }
    });
});
