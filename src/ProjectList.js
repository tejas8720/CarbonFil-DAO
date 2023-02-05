import React from 'react';

const arr=[
  {
   "Project Owner": "Owner1",
   "Offset project Type": "Project A",
   "Project Title": "ABC",
   "Project developer": "Starbucks",
   "Project Start date": "04/01/2023",
   "Project description": "Loreum ipsum",
   "SOC": 1.2,
   "Carbon credits": 5
  },
  {
   "Project Owner": "Owner2",
   "Offset project Type": "Project B",
   "Project Title": "ABC",
   "Project developer": "Microsoft",
   "Project Start date": "02/07/2022",
   "Project description": "Loreum ipsum",
   "SOC": 3,
   "Carbon credits": 4
  },
  {
   "Project Owner": "Owner3",
   "Offset project Type": "Project C",
   "Project Title": "ABC",
   "Project developer": "Kimberley",
   "Project Start date": "01/05/2022",
   "Project description": "Loreum ipsum",
   "SOC": 4,
   "Carbon credits": 6
  }
 ]

function ProjectList() {
  return (
    <>
    <table class="table table-light table-striped text-center">
  <thead>
    <tr>
      <th scope="col">Project Name</th>
      <th scope="col">Owner Name</th>
      <th scope="col">Developer</th>
      <th scope="col">Start Date</th>
      <th scope="col">SOC</th>
      <th scope="col">Carbon credits</th>
    </tr>
  </thead>
  <tbody>
  {arr.map(ar => (   
     <tr>
      <th scope="row">{ar['Offset project Type']}</th>
      <td>{ar['Project Owner']}</td>
      <td>{ar['Project developer']}</td>
      <td>{ar['Project Start date']}</td>
      <td>{ar['SOC']}</td>
      <td>{ar['Carbon credits']}</td>
    </tr>
  ))
  }
  </tbody>
</table>
      
    </>
  )
}

export default ProjectList;
