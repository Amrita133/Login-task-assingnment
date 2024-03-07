import  './styles.module.css';
import React from 'react';

    const Main=()=>{  
const handleLogout=()=>{
    localStorage.removeItem("token");
    window.location.reload()
}

    const people = [
      { name: 'John Doe', dob: '1990-01-01', contact: '1234567890', email: 'john@example.com', password: 'password1' },
      { name: 'Jane Smith', dob: '1985-05-15', contact: '9876543210', email: 'jane@example.com', password: 'password2' },
      { name: 'Alice Johnson', dob: '1995-10-20', contact: '4567890123', email: 'alice@example.com', password: 'password3' },
      { name: 'Bob Brown', dob: '1980-07-30', contact: '7890123456', email: 'bob@example.com', password: 'password4' },
      { name: 'Emily Davis', dob: '1988-03-25', contact: '2345678901', email: 'emily@example.com', password: 'password5' }
    ];
    return (
      <div className="table-container">
        <h2>People Table</h2>
        <table className="people-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.dob}</td>
                <td>{person.contact}</td>
                <td>{person.email}</td>
                <td>{person.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }


export default Main;