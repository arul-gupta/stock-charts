import React from 'react';
import GraphListContainer from './GraphListContainer.jsx';

class App extends React.Component {
   constructor(props) {
      super(props);
        
      this.state = {
         header: "Header from props..."
      }
   }
    
   render() {
      return (
         <GraphListContainer/>
      );
   }
}


export default App;