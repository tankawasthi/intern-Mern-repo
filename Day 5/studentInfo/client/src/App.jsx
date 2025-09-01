import React, { useState } from 'react';
import StudentTable from './components/StudentTable';
import StudentCard from './components/StudentCard';
import Button from './components/Button';
import { students } from './data/students';
import './App.css';

function App() {
  
  return (
<>
{
  students.map((student)=>{
    return (
      <StudentCard key={student.id} name={student.name} grade={student.grade} isGraduated={student.isGraduated} address={student.address} email={student.email}  />
    )
  })
}
</>
  )
}

export default App;