import React, { Component } from 'react'
import EmployeeService from '../Services/EmployeeService'

export default class ViewEmployee extends Component {

    constructor(props){
        super(props)
        this.state= {
            id:this.props.match.params.id,
            employee:{}

        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res=>{
            this.setState({employee : res.data});
        });

    }
    
    render() {
        return (
            <div>
              <div className="card col-md-6 offset-md-3">
                  <div className="text-center">View Employee</div>
                  <div className="card-body">
                      <div className="row">
                          <label><strong>Employee Firstname : </strong></label>
                          <div>{this.state.employee.firstname}</div>
                      </div>
                      <div className="row">
                          <label><strong>Employee Lastname : </strong></label>
                          <div>{this.state.employee.lastname}</div>
                      </div>
                      <div className="row">
                          <label><strong>Employee Email : </strong></label>
                          <div>{this.state.employee.email}</div>
                      </div>
                  </div>
              </div>
            </div>
        )
    }
}
