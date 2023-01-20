let outputsc = document.getElementById("output-sc");
function display(num){

  outputsc.value +=num;

}
function Calculate(){
  try{
    outputsc.value = eval(outputsc.value);

  }
  catch(err)
  {
    alert("Invalid")
  }
}
function Clear(){
  outputsc.value = "";
}

function del(){
  outputsc.value = outputsc.value.slice(0,-1);
}
