import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import exportFromJSON from 'export-from-json';

const fileName = "download";
const exportType = "xls";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: []
    }

    this.exportToExcel = this.exportToExcel.bind(this);
  }

  exportToExcel = () => {
    const data = this.props.result;
    if (data !== undefined) {
      console.log("data", data);
      exportFromJSON({ data, fileName, exportType });
    }
  }
  render() {
    const result = (this.state.result.length) ? this.state.result : this.props.result;
    const pagination = true;
    const paginationPageSize = 3;

    return (
      <div className="App">
        <button className="getResponse" onClick={this.props.onAPIResponse}>Get Response</button>
        <button className="export" onClick={this.exportToExcel}>Export</button>
        <div className="ag-theme-alpine" style={{height:300, width:850}}>
          <AgGridReact
            defaultColDef={{
              sortable: true,
              filter: true,
              resizable: true,
              minWidth: 100,
              flex: 1
            }}
            rowData={result}
            pagination={pagination}
            paginationPageSize={paginationPageSize}
          >
            <AgGridColumn field="name" sortable={true} filter={true}></AgGridColumn>
            <AgGridColumn field="email" sortable={true} filter={true}></AgGridColumn>
            <AgGridColumn field="phone" sortable={true} filter={true}></AgGridColumn>
            <AgGridColumn field="website" sortable={true} filter={true}></AgGridColumn>
            </AgGridReact>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.data.data
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAPIResponse: () => dispatch({ type: "APIRESPONSE_CALL", value: 1 })

  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
