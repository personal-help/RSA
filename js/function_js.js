function print(text)  { document.write(text); }
function println(text){ document.write("<br>" + text); }   

function bodyColor(){
    var col = prompt("Ввод цвета body по кодировке #0000 или английским названием!");
    $("body").css("background", col);
}
         
function userName(){
   var uName = prompt("Как вас звать?");
    if(uName){
        $("#hdOne").text("Приветствую, " + uName + "!");
    }else{ 
        $("#hdOne").text("ВВЕСТИ ИМЯ");
    }
}     
         
function hideMenu(){
    $("#headMenu").hide(800, function(){
        $("#hide").hide(300);
        $("#show").show(300);
    });
}
         
function showMenu(){
    $("#headMenu").show(800, function(){
        $("#show").hide(300);
        $("#hide").show(300);
    });
}
         
$(document).ready(function(){
    showMenu();
    
    $("#hdOne").show(400);
    $("#hdTwo").show(600);
    $("#hdThr").show(800);
    
    $("#hide").bind("click", hideMenu);
    $("#show").bind("click", showMenu);
    
    $(".part1").bind("click", bodyColor);
    
    $(".part8").bind("click", code);
    $(".part9").bind("click", encode);
    $(".part10").bind("click", decode);
    
});

function numbers(num) {
    if(num<2) return false;
        for (var i=2;i<num;i++) {
            if(num%i==0)
                return false;
        }
    return true;
}

function code(){
    var p=prompt("ONE");
    var q=prompt("TWO"); 
    var mod=p*q;
    var fi=(p-1)*(q-1);

    var mode=false;
    while(mode==false){
        var exp=Math.floor(Math.random()*100);
        if(exp<fi){
            for(var i=2;i<exp;i++){
                if(numbers(exp)==true){
                    mode=true;
                    break; 
                }
            } 
        } 
    } 

    var mode2=false;
    while(mode2==false){
        for(var d=1;d<1000;d++){
            if((d*exp)%fi==1){
                
                mode2=true;
                break; 
            }
        } 
    }
    alert("exponent = "+exp+"\n d = "+d);
    
    var P=prompt("message < mod ");
    
    var coding= (Math.pow(P,exp))%mod;
    
    alert("coding data = "+coding);
    
    var decode= (Math.pow(coding,d)%mod);
    
    alert("Message = "+ decode);    
}

























