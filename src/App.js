import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botaInicioPausar: "INICIAR",
    };
    this.timer = null;
    this.disparar = this.disparar.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  disparar() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      let state = this.state;

      state.botaInicioPausar = "INICIAR";

      this.setState(state);
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        let statebotao = this.state;

        state.numero += 0.1;
        state.botaInicioPausar = "PAUSAR";

        this.setState(statebotao);
        this.setState(state);
      }, 100);
    }
  }

  zerar() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = "INICIAR";
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require("./assets/cronometro.png")} className="img"></img>
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.disparar}>
            {this.state.botaInicioPausar}
          </a>
          <a className="botao" onClick={this.zerar}>
            ZERAR
          </a>
        </div>
      </div>
    );
  }
}

export default App;
