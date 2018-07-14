import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props){
        super(props)

    this.handleChange=() =>{
    }
        ;
    // this.handleSubmit = this.handleSubmit.bind(this);
    console.log("**************************");
    }
        render() {
          return (
            <form>
              <input
                type="text"
                placeholder="Search..."
                value={this.props.filterText}
                ref="filterTextInput"
                onChange={this.handleChange}
              />
            </form>
          );
        }
    } 
