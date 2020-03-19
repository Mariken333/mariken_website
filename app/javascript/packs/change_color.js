var nIntervId;

function changeColor() {
  nIntervId = setInterval(flashText, 1000);
}

function flashText() {
  var oElem = document.getElementById('name');
  oElem.style.color = oElem.style.color == 'rgb(229, 122, 114)' ? 'rgb(255, 140, 66)' : 'rgb(229, 122, 114)';
}


export { changeColor };
