'use client';
import React from 'react';
import { UserContext } from "./UserContext";
import { useContext } from 'react';

const InfoLogin = () => {

  const { userInfo, setUserInfo } = useContext(UserContext);

  if (!userInfo) return (
    <div className="flex bg-gray-300 justify-end font-saira gap-4">
      <p>Pierwsze uruchomienie trwa 2 min bo działam na darmowym planie</p>
      <p>Test login data:</p>
      <p>Username: testuser</p>
      <p>Password: testpassword</p>
    </div>
  );
};

export default InfoLogin;
