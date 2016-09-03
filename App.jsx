import React from 'react';
import GraphListContainer from './GraphListContainer.jsx';
import StockList from './StockList.jsx';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        codes: JSON.parse(localStorage.StockList || "[]")
      }
   }

   updateList(codes) {
      this.setState({codes: codes});
      window.localStorage.StockList = JSON.stringify(codes);
   }
    
   render() {
      return (
         <div>
            <StockList data={this.state} updateList={this.updateList.bind(this)}/>
            <GraphListContainer data={this.state}/>
         </div>
      );
   }
}


export default App;