import { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [platform, setPlatform] = useState('tb');
  const [userData, setUserData] = useState({ name: '', email: '' });

  const updatePlatform = (platform) => {
    setPlatform(platform);
    console.log(platform);
  };

  const updateUserData = (newData) => {
    setUserData({ ...userData, ...newData });
  };

  const sharedValues = {
    platform,
    updatePlatform,
    userData,
    updateUserData,
  };

  return (
    <MyContext.Provider value={sharedValues}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };