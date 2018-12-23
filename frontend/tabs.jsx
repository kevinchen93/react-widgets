import React from 'react';

class TabHeaders extends React.Component {
  handleClick(idx) {
    this.props.setCurrentTab(idx);
  }

  render() {
    const tabHeaders = this.props.tabs.map( (tabObj, idx) => {
      return (
        <li key={idx} onClick ={this.handleClick.bind(this, idx)} className={idx === this.props.currentTab ? "selected" : ""}>
          <h3>{tabObj.title}</h3>
        </li>
      );
    })

    return (
      <div className="tab-headers">
        <ul className="flex-parent tab-header-list">
          {tabHeaders}
        </ul>
      </div>
    );
  }
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabIndex: 0,
    };
  }

  setCurrentTab(tabIdx) {
    this.setState({ selectedTabIndex: tabIdx });
  }

  render() {
    const tabs = this.props.tabs;

    return (
      <div className="section tabs">
        <h2 className="section-header">Tabs</h2>
        <TabHeaders
          tabs={tabs}
          setCurrentTab={this.setCurrentTab.bind(this)}
          currentTab={this.state.selectedTabIndex} />
        <article className="tab-content">
          <p>{tabs[this.state.selectedTabIndex].content}</p>
        </article>
      </div>
    );
  }
}

export default Tabs;
