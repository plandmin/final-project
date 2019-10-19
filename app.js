// Change background-color
$(document).ready(function(){
    $(".transbox").mouseover(function(){
      $(".transbox").css("opacity", "1");
    });
    $(".transbox").mouseout(function(){
      $(".transbox").css("opacity", "0.6");
    });
  });

// Change name
function changeName() {
    name = prompt("กรุณากรอกชื่อและนามสกุลใหม่");
    document.getElementById("newName").innerHTML = name;
}

// Add Skill
function addSkill() {
    var node = document.createElement("li");
    node.innerHTML = document.getElementById("myInput").value;
    document.getElementById("mySkill").appendChild(node);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "closebtn";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Delete Skill
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "closebtn";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("closebtn");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}