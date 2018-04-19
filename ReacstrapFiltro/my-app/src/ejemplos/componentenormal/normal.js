import React, { Component } from 'react';

export default class Normal extends Component {
    constructor(props) {
       super(props);
        this.state = {
          val: 1
        };
      }

      shouldComponentUpdate(nextProp, nextState){
          console.log(nextState);
          console.log(this.state);

          return this.state.val === nextState.val ? false : true;
      }
      componentDidMount(){
        setInterval(()=>{
            this.setState(()=>{
                //return {val:this.state.val+1}
                return {val:1};
            });
        },2000);
      } 
      render(){
          console.log('Llamada al render!!');
          return(
              <div>
                  <h2>{this.state.val}</h2>
              </div>
          );
      }
  }