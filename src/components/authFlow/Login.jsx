import React, { useState } from 'react';
import { Modal, Button } from '@mui/material';
import loginImage from '../assets/test2.png';

export default function Login() {


  return (
    <div>
        <img src={loginImage} alt="Login" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
  );
}
