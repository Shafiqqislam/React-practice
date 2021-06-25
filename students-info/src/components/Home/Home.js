import React, { useEffect, useState } from 'react';
import Students from '../Students/Students';

const Home = () => {
    const [students,setStudents]=useState([]);
    const [search, setSearch] = useState([]);
    useEffect(()=>{
      fetch(`https://api.hatchways.io/assessment/students?search=`+search)
      .then(res=>res.json())
      .then(data=>setStudents(data.students))
    },[search])
  
    const handleSearch = event => {
        setSearch(event.target.value)
        console.log(search)
    }
    return (
        <div>
           <input type="text" onChange={handleSearch} placeholder="Search by name" />
          {
            students.map(student=> <Students student={student}></Students>)  
          }
        </div>
    );
};

export default Home;