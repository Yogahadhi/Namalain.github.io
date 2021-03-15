
function average(){
    var A;
    var B;
    var C;

    A = parseFloat(document.getElementById("firstNum").value)
    B = parseFloat(document.getElementById("secondNum").value)
    C = parseFloat(document.getElementById("thirdNum").value)

    document.getElementById('rata').innerHTML = (A+B+C)/3

}

function highest(){
    var A,B,C;
    
    A = parseFloat(document.getElementById("firstNum").value)
    B = parseFloat(document.getElementById("secondNum").value)
    C = parseFloat(document.getElementById("thirdNum").value)

    if(A>B && A>C){
        document.getElementById("tinggi").innerHTML = A;
    }else if(B > A && B > C){
        document.getElementById("tinggi").innerHTML = B;
    }else if(C > A && C > B){
        document.getElementById("tinggi").innerHTML = C;
    }else if(A == B  && A > C){
        document.getElementById("tinggi").innerHTML = A;
    }else if(B == C && B > A){
        document.getElementById("tinggi").innerHTML = B;
    }else if(C == A && C > B){
        document.getElementById("tinggi").innerHTML = C;
    }else if(A == B && A == C && B == C){
        document.getElementById("tinggi").innerHTML = A;
    }
}
function lowest(){
    var A,B,C;
    
    A = parseFloat(document.getElementById("firstNum").value)
    B = parseFloat(document.getElementById("secondNum").value)
    C = parseFloat(document.getElementById("thirdNum").value)

    if(A<B && A<C){
        document.getElementById("rendah").innerHTML = A;
    }else if(B < A && B < C){
        document.getElementById("rendah").innerHTML = B;
    }else if(C < A && C < B){
        document.getElementById("rendah").innerHTML = C;
    }else if(A == B && A < C){
        document.getElementById("rendah").innerHTML = A;
    }else if(A == C && A < B){
        document.getElementById("rendah").innerHTML = C;
    }else if(B == C && B < A){
        document.getElementById("rendah").innerHTML = B;
    }else if(A == B && A == C && B == C){
        document.getElementById("rendah").innerHTML = A;
    }
}
function middle(){   

    var A,B,C;
    
    A = parseFloat(document.getElementById("firstNum").value)
    B = parseFloat(document.getElementById("secondNum").value)
    C = parseFloat(document.getElementById("thirdNum").value)

    var arr=[A,B,C];
    arr.sort(function(a, b){return a-b});

    document.getElementById("tengah").innerHTML = arr[1];
}





