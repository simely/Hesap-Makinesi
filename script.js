function c(val)
{
document.getElementById("yazdir").value=val;
}

function v(val)
{
document.getElementById("yazdir").value+=val;
}

function e() 
{ 
try 
{ 
  c(eval(document.getElementById("yazdir").value)) 
} 
catch(e) 
{
  c('Error') 
} 
}