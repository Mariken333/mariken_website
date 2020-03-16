
const scroll = () => {
  const arrow = document.getElementById("scroll-arrow");

  arrow.addEventListener("click", (event) => {
    window.scrollTo({
      top: 425,
      left: 0,
      behavior: "smooth"
    })
  });
};


export { scroll };
