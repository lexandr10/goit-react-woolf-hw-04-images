import { Component } from 'react';
import stl from './Button.module.css';
export class Button extends Component {
  render() {
    return (
      <button className={stl.Button} onClick={this.props.handlerLoadMore}>
        Load more...
      </button>
    );
  }
}
