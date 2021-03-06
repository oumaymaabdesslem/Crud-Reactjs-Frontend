import React, { Component } from 'react'
import EmployeeService from '../Services/EmployeeService';

 class UpdateEmployee extends Component {
     constructor(props){
         super(props)
         this.state={
            id: this.props.match.params.id,
            firstname:"",
            lastname:"",
            email:""
         }
         this.changefirstname= this.changefirstname.bind(this);
         this.changelastname = this.changelastname.bind(this);
         this.changeemail = this.changeemail.bind(this);
         this.updateEmployee = this.updateEmployee.bind(this);
     }


     changefirstname = (e)=>{
        this.setState({firstname: e.target.value});
    }

    changelastname =(e)=>{
        this.setState({lastname: e.target.value});
    }
    changeemail=(e)=>{
        this.setState({email: e.target.value});
    }

    cancel(){
        this.props.history.push(`/employees`);
    }

    updateEmployee = (e) =>{
            e.preventDefault();
            let employee = {firstname: this.state.firstname,lastname:this.state.lastname,email:this.state.email};
            console.log('employee => ' +JSON.stringify(employee));
            console.log('id => ' + JSON.stringify(this.state.id));
            EmployeeService.updateEmployee(employee,this.state.id).then(res=>{
                this.props.history.push(`/employees`);
            })
       
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res=>{
                    let employee= res.data
                    this.setState({
                        firstname: employee.firstname,
                        lastname:employee.lastname,
                        email:employee.email
                    })
                })
    }
    
    render() {
        return (
            <div>
                <div className="container mt-4">
                   <div className="row">
                       <div className="card col-md-6 offset-md-3 offset-md-3">
                           <h3 className="text-center">Update Employee</h3>
                           <div className="card-body">
                               <form>
                                   <div className="form-group">
                                       <label>Firstname :</label>
                                       <input placeholder="Firstname" name="firstname" type="text" className="form-control"
                                       value={this.state.firstname} onChange={this.changefirstname}/>
                                   </div>
                                   <div className="form-group">
                                       <label>Lastname :</label>
                                       <input placeholder=" Lastname" name="lastname" type="text" className="form-control"
                                       value={this.state.lastname} onChange={this.changelastname}/>
                                   </div>
                                   <div className="form-group">
                                       <label>Email :</label>
                                       <input placeholder="Email Address" name="email" type="email" className="form-control"
                                       value={this.state.email} onChange={this.changeemail}/>
                                   </div>

                                   <button type="submit" className="btn btn-success" onClick={this.updateEmployee}>Update</button>
                                   <button type="submit" className="btn btn-danger ml-2" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                               </form>
                           </div>

                       </div>
                   </div>
               </div>
            </div>
        )
    }
}

export default UpdateEmployee
