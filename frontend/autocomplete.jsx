import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.matchedItems = this.matchedItems.bind(this);
    this.handleCompleteClick = this.handleCompleteClick.bind(this);
  }

  handleInput(event) {
    this.setState({ input: event.currentTarget.value });
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
    const matchedItems = this.matchedItems().map( (matchedItem, idx) => {
      return (
        <li key={idx} onClick={this.handleCompleteClick}>{matchedItem}</li>
      );
    });

    return (
      <div className="section autocomplete">
        <h2 className="section-header">Autocomplete</h2>
        <input
          className="autocomplete-input"
          type="text"
          placeholder="Start typing..."
          onChange={this.handleInput}
          value={this.state.input} />

        <ul className="matched-results-ul">
          <ReactCSSTransitionGroup
              transitionName='auto'
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
          >
            {matchedItems}
          </ReactCSSTransitionGroup>
        </ul>

      </div>
    );
  }
}

export default Autocomplete;
