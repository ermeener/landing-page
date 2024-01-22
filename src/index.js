function imageslider(response){
  document.querySelector('.Starbucks').src=response;
}
function changeCircleColor(color){
  const circle=document.querySelector('.circle');
  circle.style.background=color;
}