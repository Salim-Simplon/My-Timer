const React = require("react");
require("./Timer.css");

class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
    }
  }
  calculTemps() {
    let x = document.getElementById("nombre").value;
    let h = x / 3600;
    let heur = Math.floor(h);
    let m = (h - heur) * 60;
    let minute = Math.floor(m);
    let s = (m - minute) * 60;
    let seconde = Math.floor(s);
    document.getElementById("time").innerHTML =
      heur + " - " + minute + " - " + seconde;
  }
  render() {
    return (
      <div className="first">
        <h1>MY TIMER</h1>
        <div className="second">
          <p>
            Saisir le temps en seconde :
            <input
              type="text"
              name="nombre"
              id="nombre"
              onKeyUp={this.calculTemps}
              size="10"
            />
          </p>
          <p id="time">{(this.state.time)}</p>
        </div>
        <button className="btn">Start</button>
        <button className="btn">Stop</button>
        <button className="btn">Répeter</button>
      </div>
    );
  }
}
module.exports = Timer;
