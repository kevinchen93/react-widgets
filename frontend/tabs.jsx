import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabIndex: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    switch (e.currentTarget.innerHTML) {
      case 'Tab 1':
        this.setState({ selectedTabIndex: 0 });
        break;
      case 'Tab 2':
        this.setState({ selectedTabIndex: 1 });
        break;
      case 'Tab 3':
        this.setState({ selectedTabIndex: 2 });
        break;
    }
  }

  renderTabsContent() {
    return this.props.content[this.state.selectedTabIndex];
  }

  render() {
    return (
      <div>
        <h1>Tabs</h1>
        <div>
          <ul>
            <li onClick={this.handleClick}>Tab 1</li>
            <li onClick={this.handleClick}>Tab 2</li>
            <li onClick={this.handleClick}>Tab 3</li>
          </ul>

          <article>{this.renderTabsContent()}</article>
        </div>
      </div>
    );
  }
}

export default Tabs;
