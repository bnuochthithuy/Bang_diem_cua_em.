function myfunction(){
    var number =document.getElementById('nhap').value;
    var greating;

    if (number==0){
        greating= "bạn được 0 điểm";
        document.getElementById("demo").style.color ="red";
    }
    else if(number >0){
        greating="đó là số dương";
        document.getElementById("demo").style.color = "green";
    }
    else{
        greating="đó là số âm"
        document.getElementById("demo").style.color = "yellow";
    }
    document.getElementById("demo").innerHTML = greating;
}