const React = require("react");
require("./Timer.css");

class Timer extends React.Component {
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
      <div>
        <div>
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
          <p id="time">00 - 00 - 00</p>
        </div>
        <button>start</button>
        <button>stop</button>
        <button>reset</button>
      </div>
    );
  }
}
module.exports = Timer;
