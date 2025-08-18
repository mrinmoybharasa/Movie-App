import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [state, setState] = useState({
    user: null,
  });
  //default axios satting
  axios.defaults.baseURL = 'http://192.168.0.101:8080/api/v1';
  useEffect(() => {
    const loadLocalStorageData = async () => {
      let data = await AsyncStorage.getItem('@user');
      let loginData = JSON.parse(data);
      setState({...state, user: loginData?.user});
    };
    loadLocalStorageData();
  }, []);

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};
export {AuthContext, AuthProvider};
