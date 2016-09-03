import React from 'react';
import GraphContainer from './GraphContainer.jsx';
var ReactGridLayout = require('react-grid-layout');

class GraphList extends React.Component {

    render() {
      return (
            <ReactGridLayout className="layout" cols={2} rowHeight={300} width={1400}>
               {this.props.data.codes.map((x, i) =>
			     (<div key={i} data-grid={{x: (i%2), y: 0, w: 1, h: 1}}>
			     	<GraphContainer key={i} name={x.text} code={x.text}/>
			     	</div>)
				)}
             </ReactGridLayout>
          );
    }
}

export default GraphList;