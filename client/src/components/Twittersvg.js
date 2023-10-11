import React from "react";
import { ReactComponent as MySvg } from "./images/twitter.svg";

let styles = {
    Svgcontainer: {
      backgroundColor: "#000"
    },
    svg: {
      fill: '#ffff',
      width: "40px",
      height: "30px",
      margin: "10px"
    }
  };

function Twittersvg() {
  return (
    <div style={styles.Svgcontainer}>
      <MySvg style={styles.svg} />
    </div>
  );
}

export default Twittersvg;
