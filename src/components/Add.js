import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState , useEffect} from 'react'
import uuid from 'react-uuid';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';


function Add() {

  const [id , setId]=useState('')
  const [empname , setEmpname]=useState('')
  const [age , setAge]=useState('')
  const [designation , setDesignation]=useState('')
  const [salary , setSalary]=useState(0)


  let history=useNavigate()
  const handleData=(e)=>{
 e.preventDefault();
 let ids=uuid()
 console.log(ids);
 let uniqueId=ids.slice(0,8)
 console.log(uniqueId);
 Employee.push({
  id :uniqueId,
  empname:empname,
  age:age,
  designation:designation,
  salary:salary
 })
 history('/')
  }
  return (
    <>
    <h1 className='text-center m-3'>Add New Employee </h1>
    <Row>
      <Col className='ms-4'>
      <img className='mt-2' src='https://pngimage.net/wp-content/uploads/2018/06/pekerja-png-9.png' alt='img'/>
      </Col>
      <Col >
      <h4 className='text-center'>Add New Employee</h4>
      <Form className='border border-3 p-3 ms-5 me-5 w-75'>
      <Form.Group className="mb-3">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setEmpname(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter age" onChange={(e)=>setAge(e.target.value)}  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Designation" onChange={(e)=>setDesignation(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Salary" onChange={(e)=>setSalary(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I Agree the Terms and Conditions" />
      </Form.Group>
      <Button variant="primary" onClick={(e)=>handleData(e)} >
       Add
      </Button>
    </Form></Col>
    </Row>
    </>
  )
}

export default Add