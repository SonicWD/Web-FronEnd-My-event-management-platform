// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import MyAccount from './My-Account'; // Asegúrate de que la ruta sea correcta

const AccountPage = () => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '', password: '' });

  useEffect(() => {
    // Simulación de llamada a la API
    setTimeout(() => {
      // Datos de ejemplo, reemplaza esto con la llamada de la API
      setUserInfo({
        name: 'Camila Yodkoo',
        email: 'camilayokoo@gmail.com',
        password: '*********'
      });
    }, 1000); // Simulación de retardo de 1 segundo
  }, []);

  return (
    <MyAccount
      name={userInfo.name}
      email={userInfo.email}
      password={userInfo.password}
    />
  );
};

export default AccountPage;
