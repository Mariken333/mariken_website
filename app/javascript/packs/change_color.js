var nIntervId;

function changeColor() {
  nIntervId = setInterval(flashText, 1000);
}

function flashText() {
  var oElem = document.getElementById('name');
  oElem.style.color = oElem.style.color == 'rgb(244,244,244)' ? 'rgb(255, 140, 66)' : 'rgb(244,244,244)';
}


export { changeColor };
