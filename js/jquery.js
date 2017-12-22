$(document).ready(function(){
    $("#about").click(function(){
        $("#content").load("../views/about.html");
    });
    $("#education").on("click", function(){
        $("#content").load("../views/education.html");
    });
    $("#work").on("click", function(){
        $("#content").load("../views/work.html");
    });
    $("#projects").on("click", function(){
        $("#content").load("../views/projects.html");
    });
    $("#skills").on("click", function(){
        $("#content").load("../views/skills.html");
    });
    $("#activities").on("click", function(){
        $("#content").load("../views/activities.html");
    });
});