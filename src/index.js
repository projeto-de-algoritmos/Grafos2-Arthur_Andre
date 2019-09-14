import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Sigma } from "react-sigma";

import SigmaLoader from "./Sigma/Loader";
import NodeShapes from "./Sigma/NodeShapes";

import userIcon from "./icons/user.png";
import tabletIcon from "./icons/tablet.png";
import ipadIcon from "./icons/ipad.png";

import "./styles.css";

class App extends Component {
  graphData;
  constructor(props) {
    super(props);

    this.state = {
      filterNeighbours: "",
      settings: {
        batchEdgesDrawing: true,
        drawEdges: true,
        drawLabels: true,
        drawEdgeLabels: true,
        hideEdgesOnMove: false,
        animationsTime: 3000,
        clone: false,
        doubleClickEnabled: true,
        mouseWheelEnabled: true,
        minNodeSize: 5,
        maxNodeSize: 10,
        minArrowSize: 2,
        minEdgeSize: 0.5,
        maxEdgeSize: 1,
        defaultNodeBorderColor: "#000",
        defaultHoverLabelBGColor: "transparent",
        labelHoverColor: "transparent",
        defaultLabelSize: 11
      },
      style: {
        maxWidth: "1200px",
        height: "600px"
      }
    };

    this.graphData = {
      nodes: [],
      edges: []
    };

    // Generate a random graph:

    this.graphData.nodes.push({
      id: "user",
      label: "Vasanth",
      x: 5,
      y: 8,
      size: 9,
      color: "#000000",
      borderColor: "#FF3333",
      type: "image",
      image: {
        url: userIcon,
        // scale/clip are ratio values applied on top of 'size'
        scale: 3,
        clip: 3,
        w: 24,
        h: 24
      }
    });

    this.graphData.nodes.push({
      id: "device1",
      label: "Tablet",
      x: 1,
      y: 10,
      size: 8,
      color: "#000000",
      borderColor: "#FF3333",
      type: "image",
      image: {
        url: tabletIcon,
        // scale/clip are ratio values applied on top of 'size'
        scale: 2,
        clip: 2,
        w: 24,
        h: 24
      }
    });

    this.graphData.nodes.push({
      id: "device2",
      label: "Ipad",
      x: 10,
      y: 10,
      size: 8,
      color: "#000000",
      borderColor: "#FF3333",
      type: "image",
      image: {
        url: ipadIcon,
        // scale/clip are ratio values applied on top of 'size'
        scale: 2,
        clip: 2,
        w: 24,
        h: 24
      }
    });

    this.graphData.edges.push({
      id: "userEdge",
      source: "device2",
      target: "user",
      size: 3,
      color: "#ff0000",
      neighborsOf: "n" + ((Math.random() * 2) | 0),
      nodesBy: "n" + ((Math.random() * 2) | 0),
      type: "dotted"
    });

    this.graphData.edges.push({
      id: "userEdge2",
      source: "device1",
      target: "user",
      size: 3,
      color: "#ff0000",
      neighborsOf: "n" + ((Math.random() * 2) | 0),
      nodesBy: "n" + ((Math.random() * 2) | 0),
      type: "dotted"
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Sigma Js</h1>
        <Sigma
          renderer="canvas"
          settings={this.state.settings}
          style={this.state.style}
        >
          <SigmaLoader graph={this.graphData}>
            <NodeShapes defult="cross" />
          </SigmaLoader>
        </Sigma>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
