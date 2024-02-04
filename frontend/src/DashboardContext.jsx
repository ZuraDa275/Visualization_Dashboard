import { createContext, useContext, useState } from "react";

const Dashboard = createContext();

export const DashboardContext = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <Dashboard.Provider value={{ data, setData }}>
      {children}
    </Dashboard.Provider>
  );
};
export const useDashboardContext = () => {
  return useContext(Dashboard);
};
