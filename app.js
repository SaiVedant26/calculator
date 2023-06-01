let l=0;
let w=0;

let l1=0;
let w1=0;

let r=0;

document.getElementById("sub").onclick=function(){
    
    l=parseInt(document.getElementById("len").value);
    w=parseInt(document.getElementById("wid").value);
    r=l*w;
    if(isNaN(r)||l<0||w<0)
    {
        document.getElementById("res").innerHTML="Errornous values have been entered";
        document.getElementById("res1").style.display="none";
        document.getElementById("result").style.display="flex";
    }
    else{
    document.getElementById("res").innerHTML="The area is:  "+r;
    document.getElementById("result").style.display="flex";
    }
    }


document.getElementById( "close").onclick=function(){
    document.getElementById("result").style.display="none";
    document.getElementById("len").value='';
    document.getElementById("wid").value='';
    document.getElementById("len1").value='';
    document.getElementById("wid1").value='';
    document.getElementById("len2").value='';
    document.getElementById("wid2").value='';
    l=0;
    w=0;
    l1=0;
    l2=0;
    r=0;
}

document.getElementById("feet").onclick=function(){
    document.getElementById("length").style.display='none';
    document.getElementById("width").style.display='none';
    document.getElementById("length1").style.display='flex';
    document.getElementById("width1").style.display='flex';
    document.getElementById("toggle").style.display='none';
    document.getElementById("toggle1").style.display='flex';
    document.getElementById("submit").style.display='none';
    document.getElementById("submit1").style.display='flex';
    document.getElementById("len").value='';
    document.getElementById("wid").value='';
    document.getElementById("len1").value='';
    document.getElementById("wid1").value='';
    document.getElementById("len2").value='';
    document.getElementById("wid2").value='';
}

document.getElementById("feet1").onclick=function(){
    document.getElementById("length1").style.display='none';
    document.getElementById("width1").style.display='none';
    document.getElementById("length").style.display='flex';
    document.getElementById("width").style.display='flex';
    document.getElementById("toggle1").style.display='none';
    document.getElementById("toggle").style.display='flex';
    document.getElementById("submit1").style.display='none';
    document.getElementById("submit").style.display='flex';
    document.getElementById("len").value='';
    document.getElementById("wid").value='';
    document.getElementById("len1").value='';
    document.getElementById("wid1").value='';
    document.getElementById("len2").value='';
    document.getElementById("wid2").value='';
}

document.getElementById("sub1").onclick=function(){
    
    l=parseInt(document.getElementById("len1").value);
    w=parseInt(document.getElementById("wid1").value);
    l1=parseInt(document.getElementById("len2").value);
    w1=parseInt(document.getElementById("wid2").value);

    if(l1>11||w1>11)
    {
        document.getElementById("res").innerHTML="Inches need to be under 12";
        document.getElementById("res1").style.display="none";
        document.getElementById("result").style.display="flex";
    }
    else{
    l1=l1+l*30;
    w1=w1+l*30;
    r=l1*w1;
    if(isNaN(r)||l1<0||w1<0||w<0||l<0)
    {
        document.getElementById("res").innerHTML="Errornous values have been entered";
        document.getElementById("res1").style.display="none";
        document.getElementById("result").style.display="flex";
    }
    else
    {
    document.getElementById("res").innerHTML="The area is:  "+r;
    document.getElementById("res1").innerHTML="inch^2";
    document.getElementById("result").style.display="flex";
    }
    }
}