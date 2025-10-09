document.addEventListener("DOMContentLoaded", onDomLoaded);

function onDomLoaded(){
    const res = document.getElementById("res")
    
    const btn0 = document.getElementById("btn0")
    const btn1 = document.getElementById("btn1")
    const btnSum = document.getElementById("btnSum")
    const btnSub = document.getElementById("btnSub")
    const btnMul = document.getElementById("btnMul")
    const btnDiv = document.getElementById("btnDiv")
    const btnEql = document.getElementById("btnEql")
    const btnClr = document.getElementById("btnClr")


    let values = [];
    const operators = ["+", "-", "*", "/"];
    
    function updateRes(){
        console.log(values);
        res.innerHTML = values.join("")
    }

    function handleInput(event){
        let value = event.target.innerHTML;

        const lastIdx = (values.length || 1) - 1;
        const lastIdxValue = values[lastIdx] || "";
        if(operators.includes(value)){
            if(operators.includes(lastIdxValue) || (lastIdx == 0 && lastIdxValue == "")){
                alert("enter a digit")
                return;
            }
            values.push(value); 
        } 
        else if(operators.includes(lastIdxValue)){
                values.push(value)
        } else{
            let lastVal = lastIdxValue + value;
            values[lastIdx] = lastVal;
        }
        updateRes();
    }
    [btn0, btn1, btnSum, btnSub, btnMul, btnDiv].forEach(btn => btn.onclick = handleInput);
    
    btnClr.onclick = () => {
        values = [];
        updateRes();
    }
    
    btnEql.onclick = () => {
        if(values.length == 1){
            return;
        } 
        
        if (values.length == 2 || values.length % 3 != 0){
            alert("enter correct values")
            return;
        }
        
        while(values.length > 1){
            let val1 = parseInt(values.shift(), 2);
            let opr = values.shift();
            let val2 = parseInt(values.shift(), 2);
            
            let result = eval(val1 + opr + val2).toString(2);
            values.unshift(result);
        }
        
        updateRes();
    }
    
}






