function myfunction(){
    var animal= document.getElementById("animal").value;
    localStorage.setItem("textvalue",animal);
    var another= document.getElementById("another").value;
    localStorage.setItem("another1",another);
    if(new1.checked==true){
        console.log("hello");
        var a="yes";
        localStorage.setItem("new11",a);
    }
    else{
        var a="No";
        localStorage.setItem("new11",a);
    }
    var sel= document.getElementById("speed").value;
    if(sel=="q"){
        var e="Quicker";
        localStorage.setItem("t2",e);
    }
    else if(sel=="s"){
        var c="slower";
        localStorage.setItem("t2",c)
    }
    var adject= document.getElementById("adjective").value;
    localStorage.setItem("adjective1",adject);
    var onemore= document.getElementById("Onemore").value;
    localStorage.setItem("onemore1",onemore);
    var example= document.getElementById("example1").value;
    localStorage.setItem("exam",example);
    var verb = document.getElementById("verb").value;
    localStorage.setItem("verb1",verb)
    var num = document.getElementById("num").value;
    localStorage.setItem("num1",num)
    var moral = document.getElementById("moral").value;
    localStorage.setItem("moral1",moral)
    return false ;
}