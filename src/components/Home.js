import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import { FaEdit,FaRegTrashAlt,FaUserPlus } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import {Link , useNavigate} from 'react-router-dom'
function Home() {
  const history=useNavigate();
  const handledelete=(id)=>{

    alert("Do u want to delete")
    console.log(Employee.map((item)=>item.id).indexOf(id));//index of the particular item
    let index=Employee.map((item)=>item.id).indexOf(id)
    console.log(index);
    Employee.splice(index,1)
    history('/')
  }

  const handleedit=(id,empname,age,designation,salary)=>
  {
    localStorage.setItem("ID",id);
    localStorage.setItem("empname",empname);
    localStorage.setItem("age",age);
    localStorage.setItem("designation",designation);
    localStorage.setItem("salary",JSON.stringify(salary));

  }
  return (
    <div className='mt-5'>
    <h1 className='text-center'>Employee Management System</h1>
    <p>An effective employee management system is used to manage the work process and organizational responsibilities of human resources and other departments. It helps managers and employees to work together and accurately monitor, access, manage, and efficiently utilize the working hours for better business growth</p>
    <Link to={'/add'}>
    <Button className='btn btn-success'>ADD &nbsp;<FaUserPlus/></Button>
    </Link>
    <Table className='mt-3'   bordered hover style={{
            border:"1px solid black"
    }} >
    <thead>
      <tr>
        <th>Id</th>
        <th>Employee Name</th>
        <th>Age</th>
        <th>Designation</th>
        <th>Salary</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
        Employee && Employee.length>0 ?

            Employee.map((item)=>
            (
                <tr>
                    <td>
                        {item.id} </td>
                    <td>
                  {item.empname}
                    </td>
                    <td>
                  {item.age}
                    </td>   <td>
                  {item.designation}
                    </td>   <td>
                  {item.salary}
                    </td>
                    <td>
                      <Link to={'/edit'}>
                      <Button onClick={()=>handleedit(item.id,item.empname,item.age,item.designation,item.salary)} className='btn btn-secondary'><FaEdit/></Button>
                      </Link> 
                       <Button className='btn btn-warning' onClick={()=>handledelete(item.id)}><FaRegTrashAlt/></Button>
                    </td>
                </tr>

            ))
            :"No data"
}

    </tbody>
  </Table>
  </div>
  )
  

}
export default Home