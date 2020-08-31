import axios from 'axios';


const base_URL = "http://localhost:8086/app/employees";

class EmployeeService {


   getEmployee(){
       return axios.get(base_URL);
   }
   createEmployee(employee){
       return axios.post(base_URL,employee);
   }
   getEmployeeById(id){
       return axios.get(base_URL + '/' + id);
   }
   updateEmployee(employee,id){
       return axios.put(base_URL +'/' + id,employee);
   }

   deleteEmployee(id){
       return axios.delete(base_URL + '/' +id);
   }
}
export default new EmployeeService()