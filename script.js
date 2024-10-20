
function relt(){
    let a=parseInt(document.getElementById("num1").value );
    let b=parseInt(document.getElementById("num2").value );
    let c=parseInt(document.getElementById("num3").value );
    let d=parseInt(document.getElementById("num4").value );
    let e=parseInt(document.getElementById("num5").value );
     
    let result=a+b+c+d+e;
    let perc=result*100/500;

    document.getElementById("data1").innerHTML="Total Marks = "+result;
    document.getElementById("data2").innerHTML="Percentage = "+perc+"%";

    if(perc>=90 && perc<=100){
        document.getElementById("data3").innerHTML="Congratulations, Pass with Grade O  and  " +perc+"%";
    }

    else if(perc>=60 && perc<=89){
        document.getElementById("data4").innerHTML="Congratulations, Pass with Grade A and  " +perc+"%";
    }
    else if(perc>=40 && perc<=59){
        document.getElementById("data5").innerHTML="Congratulations, Pass with Grade B and  " +perc+"%";
    }
    else if(perc<40){
        document.getElementById("data6").innerHTML="Sorry Fail  with  " +perc+"%";
    }
    else{
        document.getElementById("data4").innerHTML="Sorry Not Found it ! " +perc+"%";
    }
}

function clr(){
    let a=parseInt(document.getElementById("num1").value=" ");
    let b=parseInt(document.getElementById("num2").value=" " );
    let c=parseInt(document.getElementById("num3").value=" " );
    let d=parseInt(document.getElementById("num4").value=" " );
    let e=parseInt(document.getElementById("num5").value=" " );

    document.getElementById("data1").innerHTML=" ";
    document.getElementById("data2").innerHTML=" ";
    document.getElementById("data3").innerHTML=" ";
    document.getElementById("data4").innerHTML=" ";
    document.getElementById("data5").innerHTML=" ";
    document.getElementById("data6").innerHTML=" ";
}