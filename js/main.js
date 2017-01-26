function toggleDiv(divId) {
 $("."+divId).toggle("slow", function(){});
}
function showDiv(divId) {
 $("."+divId).show("slow", function(){});
 $("button").removeClass('active');
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}