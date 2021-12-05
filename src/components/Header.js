class Header {
  constructor() {
    this.ref = document.querySelector(".container");
  }
  currentTime() {
    let date = new Date();
    return date.toLocaleTimeString();
  }

  render(props) {
    props = {
      title: "Hello Again!",
      date: this.currentTime(),
    };

    this.ref.innerHTML = `
    <header>
      <a href="">Logo</a>
      <h1>${props.title}</h1>
      <span class="clock">${props.date}</span>
    </header>
  `;
  }
}

export default Header;
