import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from '@material-ui/core';

import React, { useContext, useState } from 'react';
import { AuthContext } from 'src/contexts/AuthContex';
interface ILoginProp {
  isOpen: boolean;
  handleColse: () => void;
}
const Login = ({ isOpen, handleColse }: ILoginProp) => {
  //   const { userInfo } = useContext(AuthContext);
  const { toggleAuth } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleConfirm = () => {
    toggleAuth(username);
    setUsername('');
    handleColse();
  };
  return (
    <Dialog
      open={isOpen}
      aria-labelledby="form-dialog-title"
      onClose={handleColse}
    >
      <DialogContent>
        <TextField
          autoFocus
          type="text"
          label="User Name"
          value={username}
          onChange={handleUserNameChange}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleConfirm}
          color="primary"
          disabled={username === ''}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
