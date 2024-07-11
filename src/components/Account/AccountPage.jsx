// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import MyAccount from './My-Account';
import EditAccount from './EditAccount';

const AccountPage = () => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '', password: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Simulación de llamada a la API
    setTimeout(() => {
      setUserInfo({
        name: 'Camila Yokoo',
        email: 'camilayokoo@gmail.com',
        password: '*********'
      });
    }, 1000);
  }, []);

  const handleSave = (updatedInfo) => {
    setUserInfo(updatedInfo);
    setIsEditing(false);
    // Aquí puedes hacer una llamada a la API para guardar los cambios
  };

  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">My account</h1>
        {isEditing ? (
          <>
            <EditAccount 
              initialName={userInfo.name}
              initialEmail={userInfo.email}
              initialPassword={userInfo.password}
              onSave={handleSave}
            />
            <button className="secondary-button" onClick={() => setIsEditing(false)}>
              Cancelar
            </button>
          </>
        ) : (
          <>
            <MyAccount
              name={userInfo.name}
              email={userInfo.email}
              password={userInfo.password}
            />
            <button className="secondary-button" onClick={() => setIsEditing(true)}>
              Editar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AccountPage;

