let display=document.getElementById("input");
function add(val)
{
  display.value+=val;
}
function calc(){
  display.value=eval(display.value);
}
function clr()
{
  display.value="";
}
function del()
{
  display.value=display.value.slice(0,-1);
}