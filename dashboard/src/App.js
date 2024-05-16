import React from 'react';
import ChartComponent from './Components/Dashboard';
import CustomNavbar from './Components/navbar';
import TopCompanies from './Components/Companies';
function App() {
  return (
    <div>
      <CustomNavbar/>
      <TopCompanies />
      <ChartComponent />

      
    </div>
  );
}

export default App;