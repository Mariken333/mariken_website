const myName = document.getElementById("name");
const changeFontcolor = () => {
  myName.addEventListener("click", (event) => {
  event.currentTarget.color = "#A1CF6B";
  });
};


export { changeFontcolor };
