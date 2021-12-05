class Header {
  constructor() {
    this.ref = document.querySelector(".container");
  }
  currentTime() {
    let date = new Date();

    return date.toLocaleTimeString();
  }

  render(props) {
    this.ref.innerHTML = `
    <header>
      <a href="">Logo</a>
      <h1>Hello Again</h1>
      <span class="clock">${this.currentTime()}</span>
    </header>
  `;
    setTimeout(() => this.render(props), 1000);
  }
}

export default Header;
