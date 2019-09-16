import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Sigma } from "react-sigma";

import SigmaLoader from "./Sigma/Loader";
import NodeShapes from "./Sigma/NodeShapes";



import axios from 'axios';

import Graph from "./graph";
var graph = new Graph;
class App extends Component {
  graphData;
  constructor(props) {
    super(props);
     

    this.state = {
      persons: [],
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
        maxNodeSize: 8,
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

  //   this.graphData.nodes.push({
  //     id: "user",
  //     label: "Vasanth",
  //     x: 5,
  //     y: 8,
  //     size: 9,
  //     color: "#000000",
  //     borderColor: "#FF3333",
  //     type: "image",
  //     image: {
  //       url: userIcon,
  //       // scale/clip are ratio values applied on top of 'size'
  //       scale: 3,
  //       clip: 3,
  //       w: 24,
  //       h: 24
  //     }
  //   });

  //   this.graphData.nodes.push({
  //     id: "device1",
  //     label: "Tablet",
  //     x: 1,
  //     y: 10,
  //     size: 8,
  //     color: "#000000",
  //     borderColor: "#FF3333",
  //     type: "image",
  //     image: {
  //       url: tabletIcon,
  //       // scale/clip are ratio values applied on top of 'size'
  //       scale: 2,
  //       clip: 2,
  //       w: 24,
  //       h: 24
  //     }
  //   });

  //   this.graphData.nodes.push({
  //     id: "device2",
  //     label: "Ipad",
  //     x: 10,
  //     y: 10,
  //     size: 8,
  //     color: "#000000",
  //     borderColor: "#FF3333",
  //     type: "image",
  //     image: {
  //       url: ipadIcon,
  //       // scale/clip are ratio values applied on top of 'size'
  //       scale: 2,
  //       clip: 2,
  //       w: 24,
  //       h: 24
  //     }
  //   });

  //   this.graphData.edges.push({
  //     id: "userEdge",
  //     source: "device2",
  //     target: "user",
  //     size: 3,
  //     color: "#ff0000",
  //     neighborsOf: "n" + ((Math.random() * 2) | 0),
  //     nodesBy: "n" + ((Math.random() * 2) | 0),
  //     type: "dotted"
  //   });

  //   this.graphData.edges.push({
  //     id: "userEdge2",
  //     source: "device1",
  //     target: "user",
  //     size: 3,
  //     color: "#ff0000",
  //     neighborsOf: "n" + ((Math.random() * 2) | 0),
  //     nodesBy: "n" + ((Math.random() * 2) | 0),
  //     type: "dotted"
  //   });


  }

   req = async (params)=> {
    let name1 = params
    let  name2 = "Andre-Eduardo"
    let encontrado = false
    let aux = 0
    var res =[2,3]
    var valor = {}

    
     while(!encontrado && (aux <= 3)){
  
       axios.get(`https://api.github.com/users/${name1}/followers`).then(response => {
      var persons = response.data;
       
      this.setState({ persons });
      
      var data = {
        user: name1,
        avatar_url: 'www',
        vizinhos: []
      }

      persons.map((vizinho)=>{
        data['vizinhos'].push(vizinho.login)

      })
      
      graph.add_vertex(data);
       
    let index = 1
    for (var x = 0; x<=0;x++){
      persons.map((data)=>{
        var data1 = {}
      data1 = {
        user: data.login,
        avatar_url: data.avatar_url,
        vizinhos: []
        
      }
      this.busca_user(data).then(person => person.map((us)=> {
       data1['vizinhos'].push(us.login)
        
      } ));

      
      graph.add_vertex(data1);

    })
  

  }

  console.log(graph.get_vertex())
  })
   
  aux+=1;
  encontrado = true
  }


  
  }

   busca_user  = async (data)=> {
    var valor=[]
    //console.log(data.login)
    const res=await fetch(`https://api.github.com/users/${data.login}/followers`)
      return await res.json()
    
     
  }
  imprimi(a){
    console.log(a)
  }
  componentDidMount() {
  

  this.req("arthurarp");

  }

    
 
  render() {
    

    this.state.persons.map((person, index) => {
      
      this.graphData.nodes.push({
        id: person.login,
        label: person.login,
        x: index*10,
        y: index*50,
        size: 1,
        color: "#000000",
        borderColor: "#FF3333",
        type: "image",
        image: {
          url: person.avatar_url,
          // scale/clip are ratio values applied on top of 'size'
          scale: 5,
          clip: 5,
          w: 15,
          h: 15
        }
      });

    }) 
    
  //   var data = {
  //     user: "arthurarp",
  //     vizinhos: ['andre-eduardo', 'bruno']
  //  };

  //  var data1 = {
  //     user: "andre-eduardo",
  //     vizinhos: ['arthurarp']
  // };
 
  //  graph.add_vertex(data);
  //  graph.add_vertex(data1);

   //console.log(graph.get_vertex())

    return (
      <div className="App">
        <div>
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
      </div>
    );
  }
}


export default App;
