import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import { Manager, Reference, Popper } from 'react-popper';

class App extends Component {
  state = {
    name: ""
  };

  setName = () => {
    this.setState({ name: document.getElementById("name").value });
  }

  showMouseMovement = (event) => {
    // console.log(value/1103 * 2005/100);
    let btn = document.getElementById("popover-trigger");

    if (event.pageY) {
      btn.style.top = event.pageY / 100 + "%";
      // btn.style.top = (value/document.getElementById("line").offsetHeight * value)/100 + "%";
    }
  }

  togglePopper = () => {
    let popper = document.getElementById("popper");

    if (popper.style.display === "flex") popper.style.display = "none";
    else popper.style.display = "flex";
  }

  render() {
    return (
      <main id="top">
        <div class="floating vertical">
          <a href="#top" class="shadowS squared anchor mb-2"><i class="adaptiveSize fas fa-chevron-up"></i></a>
          <a href="#bottom" class="shadowS squared anchor"><i class="adaptiveSize fas fa-chevron-down"></i></a>
        </div>
        <header>
          <img src={logo} className="logo" alt="logo" />
          <h1 class="my-3">
            {!this.state.name ?
              "What's your name ?"
              :
              "Welcome " + this.state.name + " !"
            }
          </h1>
          <input id="name" onKeyUp={e => this.setName()} />
          <a
            href="#playground"
            class="btnLike mt-3">
            <span>Proceed to playground</span>
          </a>
          {/* <button
            disabled={!this.state.name}>
            <span>Proceed to playground</span>
          </button> */}
        </header>
        <section id="section1">
          <div id="line" class="line" onMouseOver={e => this.showMouseMovement(e)}>
            <button id="popover-trigger" class="popover-trigger" onClick={e => this.togglePopper()}><i class="fas fa-plus"></i></button>
            <div id="popper">
              <div class="">

              </div>
              <div>

              </div>
            </div>
          </div>
          {/* <h1 id="playground" className="top white">Welcome {this.state.name} !</h1>
          <a id="playground" className="anchor"><span>Link to playground</span></a> */}
        </section>
        <footer id="bottom">
          <a href="#top" class="anchor expand center"><i class="fas fa-chevron-up mr-2"></i>Go up</a>
        </footer>
      </main>
    );
  }
}

export default App;