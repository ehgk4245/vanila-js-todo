function Header({ $target }) {
  const $header = document.createElement("h1");
  $target.appendChild($header);

  this.state = "오늘 할 일";

  this.setState = (nextState) => {
    this.state = nextState;
    render();
  };

  const render = () => {
    $header.innerText = this.state;
  };

  render();
}

export default Header;
