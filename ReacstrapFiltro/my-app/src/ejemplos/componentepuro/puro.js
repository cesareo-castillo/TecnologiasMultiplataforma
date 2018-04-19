import React, { PureComponent } from 'react';

export default class Normal extends PureComponent {
    constructor(props) {
        super(props);
         this.state = {
           val: 1
         };
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
                   COMPONENTE PURO
                   <h2>{this.state.val}</h2>
               </div>
           );
       }
   }