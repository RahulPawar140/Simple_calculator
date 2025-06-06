// alert("dhhdhhd");
var input_val = document.getElementById('inputVal');
var sub_val = document.getElementById('subVal');
var history_div = document.getElementById('historyDiv');

function getValue(val) {
    if (input_val.value == '0') {
        input_val.value = val;
    }
    else if(input_val.value.split('-').length==2 || input_val.value.split('+').length==2 || input_val.value.split('*').length==2 || input_val.value.split('/').length==2){
        input_val.value += val;
        solve();
    }
    else {
        input_val.value += val;
    }
}
function removeLastDigit() {
    if (input_val.value.length > 1) {
        input_val.value = input_val.value.slice(0, -1);
    }
    else {
        input_val.value = input_val.value.slice(0, -1);
        input_val.value = "0";
    }
}
function clearAll() {
    input_val.value = "0";
    sub_val.value = "";
}
function solve() {
    var equation = input_val.value;
    var ans = eval(equation);
    input_val.value = ans;
    sub_val.value = equation + ' =';
    showHistory(equation, ans);
}
function showHistory(equation, ans) {
    //string or template literal
    history_div.innerHTML += `
        <div class="his">
            <p>${equation} =</p>
            <p>${ans}</p>
        </div> `
        ;
    // history_div.innerHTML += " <div class='his'><p>" + equation + " =</p><p>" + ans + "</p></div>";
}
function clearHistory() {
    if (history_div.innerText != "") {
        var choice = confirm("Are you sure you want to delete history ?");
        if (choice) {
            history_div.innerHTML = "";
        }
    }
}
function modulo() {

}