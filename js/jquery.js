$(document).ready(function(){
    $("#projects").on("click", function(){
        $("#content").load("views/projects.html");
    });
    // $("#contact").click(function(){
        // $("#content").load("./contact.html");
    // });
});