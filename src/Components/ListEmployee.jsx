import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ListEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            employees:[],
         }

         this.addEmployee = this.addEmployee.bind(this);
         this.editEmployee = this.editEmployee.bind(this);
         this.deleteEmployee = this.deleteEmployee.bind(this);

    }
    editEmployee(id){
        this.props.history.push(`/add-employees/${id}`);
    }
    addEmployee(){
        this.props.history.push(`/add-employees/_add`);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }

    componentDidMount() {
        EmployeeService.getEmployee().then( (res)=> {
                this.setState({employees: res.data})
            });
    }
    
    render() { 
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row mt-3">
                    <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                            this.state.employees.map(
                                employee =>
                                <tr key={employee.id}>
                                    <td>{employee.firstname}</td>
                                    <td>{employee.lastname}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <button className="btn btn-info" onClick={()=>this.editEmployee(employee.id)}>Update</button>
                                        <button  onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger ml-1">Delete </button>
                                        <button  onClick={ () => this.viewEmployee(employee.id)} className="btn btn-warning ml-1">View </button>
                                    </td>
                                </tr>
                            )
                            
                            }
                         
                            </tbody>
                    </table>
                </div>
            </div>
          );
    }
}
 
export default ListEmployee;