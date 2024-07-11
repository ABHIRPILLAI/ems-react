import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from './Employee';
import {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Edit() {
  const [id , setId]=useState('')
  const [empname , setEmpname]=useState('')
  const [age , setAge]=useState('')
  const [designation , setDesignation]=useState('')
  const [salary , setSalary]=useState(0)

  let history=useNavigate()

  const handleUpdate=(e)=>
  {
    e.preventDefault()
    console.log(e);
    let emp=Employee[index]
    console.log(emp);


    emp.empname=empname
    emp.age=age
    emp.designation=designation
    emp.salary=salary

    history("/")
  }
  useEffect(()=>
  {
    setId(localStorage.getItem("ID"));
    setEmpname(localStorage.getItem("empname"));
    setAge(localStorage.getItem("age"));
    setDesignation(localStorage.getItem("designation"));
    setSalary(JSON.parse(localStorage.getItem("salary")));

  },[]
  )
  var index=Employee.map(item=>item.id).indexOf(id);
  console.log(index);
  return (
    <>
    <h1 className='text-center m-3'>Update Employee Details </h1>
    <Row>
      <Col className='ms-4'>
      <img className='mt-2' src='https://pngimage.net/wp-content/uploads/2018/06/pekerja-png-9.png' alt='img'/>
      </Col>
      <Col >
      <h4 className='text-center'>Update Details</h4>
      <Form className='border border-3 p-3 ms-5 me-5 w-75'>
      <Form.Group className="mb-3">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={empname} onChange={(e)=>setEmpname(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter age" value={age} onChange={(e)=>setAge(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Designation" value={designation} onChange={(e)=>setDesignation(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Salary" value={salary} onChange={(e)=>setSalary(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I Agree the Terms and Conditions" />
      </Form.Group>
      <Button variant="primary" onClick={(e)=>handleUpdate(e)} >
       Update
      </Button>
    </Form></Col>
    </Row>
    </>
  )
}

export default Edit