import React from "react";
import { ReactComponent as MySvg } from "./images/cloud-arrow-up-solid.svg";

let styles = {
  svg: {
    fill: '#08fdd8',
    width: "40px",
    height: "50px",
  }
};

function Discordsvg() {
  return (
    <div style={styles.Svgcontainer}>
      <MySvg style={styles.svg} />
    </div>
  );
}

export default Discordsvg;