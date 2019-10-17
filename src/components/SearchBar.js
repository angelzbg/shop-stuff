import React from 'react';

export default class SearchBar extends React.Component {

  render() {
    return (
        <div className="searchBar">
            <input className="searchBox" type="text" placeholder="Какво търсиш?" onChange={(e) => this.props.updateSearch(e.target.value)}/>
        </div>
    );
  } // render()

} // SearchBar{}