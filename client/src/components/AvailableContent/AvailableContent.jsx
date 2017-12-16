import React, {Component} from 'react'

import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TextField } from 'material-ui'

const styles = {
  propContainer: {
    width: '700px',
    overflow: 'hidden',
    margin: '200px auto 0',
  },
  propToggleHeader: {
    margin: '200px auto 50px',
  },
};

const tableData = [
  {
    id: '15b33d0f-8453-4a99-801c-4a1266c09572',
    name: 'Rudy',
    lastname: 'Feinman',
    email: 'poltophagy@piezometric.com',
    telephone: '137.147.201.47',
    status: 'Available',
  },
  {
    id: '5e6b7c1f-7a27-403f-89dd-9358eaf66bb6',
    name: 'Sophie',
    lastname: 'Olivo',
    email: 'ultravirus@pedunculated.net',
    telephone: '28.236.209.184',
    status: 'Available',
  },
  {
    id: '9862f699-bf77-4469-b6a7-280351c35824',
    name: 'Brandi',
    lastname: 'Palmberg',
    email: 'touristproof@coodle.co.uk',
    telephone: '20.14.67.235',
    status: 'Not available',
  },
  {
    id: '41fdc910-5adf-4981-9a3c-7615b90c1767',
    name: 'Gwen',
    lastname: 'Meireles',
    email: 'quakerishness@satisfyingly.com',
    telephone: '52.203.228.71',
    status: 'Available',
  },
  {
    id: '8963ea23-80ec-43f6-a2af-5119cb3bb12e',
    name: 'Nanci',
    lastname: 'Satterfield',
    email: 'unamusing@magas.net',
    telephone: '161.183.211.74',
    status: 'Not available',
  },
  {
    id: '35af33d1-04cc-4459-a0f3-105bdb9357fd',
    name: 'Aleida',
    lastname: 'Chubicks',
    email: 'furca@tributyrin.co.uk',
    telephone: '158.228.129.180',
    status: 'Available',
  },
  {
    id: '35af33d1-04cc-4459-a0f3-105bdb9357fd',
    name: 'Aleida',
    lastname: 'Chubicks',
    email: 'furca@tributyrin.co.uk',
    telephone: '158.228.129.180',
    status: 'Available',
  }
]

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class TableExampleComplex extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: true,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '500px',
  }

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          table-responsive
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="6" style={{textAlign: 'center'}}>
                Translators database 
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn >ID</TableHeaderColumn>
              <TableHeaderColumn >Name</TableHeaderColumn>
              <TableHeaderColumn >Lastname</TableHeaderColumn>
              <TableHeaderColumn >Email</TableHeaderColumn>
              <TableHeaderColumn >Telephone</TableHeaderColumn>
              <TableHeaderColumn >Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.id}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.lastname}</TableRowColumn>
                <TableRowColumn>{row.email}</TableRowColumn>
                <TableRowColumn>{row.telephone}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}