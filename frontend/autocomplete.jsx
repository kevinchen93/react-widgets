import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };

    this.getInput = this.getInput.bind(this);
    this.matchedItems = this.matchedItems.bind(this);
    this.handleCompleteClick = this.handleCompleteClick.bind(this);
  }

  getInput(event) {
    if (event.key === 'Backspace' && this.state.input.length > 0) {
      this.setState({ input: this.state.input.slice(0, this.state.input.length - 2) });
    } else if (event.key === 'Backspace' && this.state.input.length === 0) {
      return;
    } else {
      this.setState({ input: this.state.input + event.key });
    }
  }

  matchedItems() {
    const mappedList = this.props.names.map( el => el.toLowerCase() );
    const result = mappedList.filter( el => el.startsWith(`${this.state.input.toLowerCase()}`));

    return result.length > 0 ? result : ['No match found...:l'];
  }

  handleCompleteClick(event) {
    this.setState({ input: event.currentTarget.innerHTML.toLowerCase() });
  }

  render() {
    const that = this;
    const matchedItems = this.matchedItems().map( (matchedItem, idx) => {
      return (
        <li key={idx} onClick={this.handleCompleteClick}>{matchedItem}</li>
      );
    });

    return (
      <div>
        <h1>Autocomplete</h1>

        <div>
          <label>
            <input
              type='text'
              placeholder='Start typing...'
              onKeyDown={this.getInput}
              value={this.state.input} />
          </label>
        </div>

        <ul>
          <ReactCSSTransitionGroup
            transitionName='auto'
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            {matchedItems}
          </ReactCSSTransitionGroup>
        </ul>

      </div>
    );
  }
}

export default Autocomplete;
