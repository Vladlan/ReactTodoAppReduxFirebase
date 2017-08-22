var React = require('react');

var SearchTodoForm = React.createClass({
    handleSearch: function () {
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    },
   render: function () {
       return (
           <div>
               <div>
                   <input className="SearchBox" type="search"
                          ref="searchText" placeholder="search todos" onChange={this.handleSearch}/>
               </div>
               <div>
                   <label className="SearchTodoForm">
                       <input className="SearchTodoForm" type="checkbox"
                              ref="showCompleted" onChange={this.handleSearch}/>
                       Show completed todos
                   </label>
               </div>
           </div>
       )
   }
});

module.exports = SearchTodoForm;