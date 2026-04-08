import React, { useEffect, useState } from 'react';

function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(data => setCompanies(data));
  }, []);

  return (
    <div>
      <h1>Company Records</h1>
      <table border="1">
        <thead>
          <tr><th>Name</th><th>Industry</th><th>Location</th></tr>
        </thead>
        <tbody>
          {companies.map(company => (
            <tr key={company._id}>
              <td>{company.name}</td>
              <td>{company.industry}</td>
              <td>{company.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;
