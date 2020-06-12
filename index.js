function check1(pol){
    var age=parseInt(pol);
    if (age/100 >=1){
        console.log("age can within 100 yrs !");
        document.getElementById("feedback").innerHTML="age must within 100 yrs !";
    } 
}
function check2(num){
    var number=parseInt(num);
    len = number.toString().length;
    if(len !== 10){
        document.getElementById("feedback2").innerHTML="enter a valid mobile number !";

    }
}