import React from 'react';
import { Outlet } from 'react-router';

const Dashboard = () => {
  return (
    <div>
      <p>Dashboard</p>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;