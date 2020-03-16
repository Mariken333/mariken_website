const changeFontcolor = () => {
  const myName = document.getElementById("name");
  myName.addEventListener("click", (event) => {
    event.currentTarget.color = "#A1CF6B";
  });
};


export { changeFontcolor };
