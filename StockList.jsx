import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';
import styles from './StockList.css';

class StockList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            tags: this.props.data.codes
        }
    }

    saveTags(tags) {
        this.props.updateList(tags);
    }

    handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.saveTags(tags);
    }
    handleAddition(tag) {
        tag = tag.replace(/"/g,"");
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.saveTags(tags);
    }
    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;

        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);

        // re-render
        this.saveTags(tags);
    }
    render() {
        let tags = this.state.tags;
        return (
            <div>
                <ReactTags tags={tags}
                    placeholder="Add new stock"
                    handleDelete={this.handleDelete.bind(this)}
                    handleAddition={this.handleAddition.bind(this)}
                    handleDrag={this.handleDrag.bind(this)} />
            </div>
        )
    }
};

export default StockList;

