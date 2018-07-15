import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import React from 'react';
import { Wrapper } from './StyleComponent/HeaderOfTable';
import { Button } from './StyleComponent/Button';
let order = 'desc';
export default class Search extends React.Component {
  handleBtnClick = () => {
      console.log("Button tapped ********");
    if (order === 'desc') {
      this.refs.table.handleSort('asc', 'id');
      order = 'asc';
    } else {
      this.refs.table.handleSort('desc', 'id');
      order = 'desc';
    }
  }
  handleBtnClickName = () => {
    console.log("Button tapped ********");
  if (order === 'desc') {
    this.refs.table.handleSort('asc', 'first_name');
    order = 'asc';
  } else {
    this.refs.table.handleSort('desc', 'first_name');
    order = 'desc';
  }
}
  render() {
    const Employee = [
        {"id":1,"first_name":"William","email":"welliott0@wisc.edu",
    "country":"Argentina","ip_address":"247.180.226.89"},
        {"id":2,"first_name":"Carl","email":"cross1@mlb.com",
    "country":"South Africa","ip_address":"27.146.70.36"},
        {"id":3,"first_name":"Jeremy","email":"jscott2@cbsnews.com",
    "country":"Colombia","ip_address":"103.52.74.225"},
    {"id":4,"first_name":"Megha","email":"megha@yopmail.com",
    "country":"London","ip_address":"192.52.74.225"},
    {"id":5,"first_name":"Shraddha","email": "sg@gmail.com",
    "country":"Colombia","ip_address":"192.52.74.254"},
    {"id":6,"first_name":"Jack","email": "jack@yahoo.com",
    "country":"India","ip_address":"192.52.84.251"},
    {"id":7,"first_name":"William","email":"welliott0@wisc.edu",
    "country":"Argentina","ip_address":"247.180.226.89"},
        {"id":8,"first_name":"Carl","email":"cross1@mlb.com",
    "country":"South Africa","ip_address":"27.146.70.36"},
        {"id":9,"first_name":"Jeremy","email":"jscott2@cbsnews.com",
    "country":"Colombia","ip_address":"103.52.74.225"},
    {"id":10,"first_name":"Megha","email":"megha@yopmail.com",
    "country":"London","ip_address":"192.52.74.225"},
    {"id":11,"first_name":"Shraddha","email": "sg@gmail.com",
    "country":"Colombia","ip_address":"192.52.74.254"},
    {"id":12,"first_name":"Jack","email": "jack@yahoo.com",
    "country":"India","ip_address":"192.52.84.251"}
  ];
    return (
        <div style={{ marginTop: "10px"}} >
     <Wrapper> Employee Data Table</Wrapper>
    <div style={{ marginTop: "30px"}}>    
    <Button onClick={ this.handleBtnClick }>Sort By ID</Button>
    <Button onClick={ this.handleBtnClickName }>Sort By Name</Button>
    <BootstrapTable data={ Employee } ref='table'>
        <TableHeaderColumn dataField='id'isKey={ true } dataSort={ true }>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='first_name' filter={ { type: 'TextFilter', delay: 1000 } } dataSort={ true } >Name</TableHeaderColumn>
        <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
        <TableHeaderColumn dataField='country' >Country</TableHeaderColumn>
        <TableHeaderColumn dataField='ip_address'>IP Address</TableHeaderColumn>
      </BootstrapTable>
      </div>
      </div>
    );
  }
}