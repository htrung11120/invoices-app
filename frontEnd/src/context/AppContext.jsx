import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/src/assets/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const contextValue = { data, darkMode, setDarkMode };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
