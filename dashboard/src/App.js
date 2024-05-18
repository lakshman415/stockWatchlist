import React from 'react';
import ChartComponent from './Components/Dashboard';
import CustomNavbar from './Components/navbar';
import TopCompanies from './Components/Companies';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import your main CSS file'

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