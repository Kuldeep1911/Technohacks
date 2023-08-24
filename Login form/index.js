// Pass matching
function chpassmatch() {
    var password = $("#password").val();
    var confirmPassword = $("#conf_password").val();

    // If not correct
    if (password != confirmPassword)
        $(".password1, .password2").addClass("input-error");
    // If correct
    if (password == confirmPassword)
        $(".password1, .password2").addClass("input-succeeded");
    else
        $(".password1, .password2").removeClass("input-succeeded"), ("input-error");

    $('#password').blur(function() {
        if (!this.value) {
            $(".password1, .password2").removeClass('input-error');
        }
    });
};


// Show / Hide password icon

// Show pass icon
$(".show").click(function() {
    if ($(this).hasClass("fa-eye-slash")) {
        $(".show").removeClass("fa-eye-slash");
        $(".show").addClass("fa-eye")
    } else {
        $(".show").removeClass("fa-eye");
        $(".show").addClass("fa-eye-slash")

    }
});

$(document).ready(function() {
    $("#conf_password").keyup(chpassmatch);
});

// Swithing password to text
function checkpass() {
    var a = document.querySelector(".password1");
    var b = document.querySelector(".password2");

    if (b.type === "password") {
        b.type = "text", a.type = "text";
    } else {
        b.type = "password", a.type = "password";
    };
};
