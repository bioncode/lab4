$(document).ready(function() {
$(".navbar-nav a").on("click", function() {
    $(".navbar-nav").find(".active").removeClass("active");  
    $(this).parent().addClass("active");
    console.log("error");
    alert("Submitting form...");
});

});