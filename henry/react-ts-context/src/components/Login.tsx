import { Button, Dialog, DialogActions, DialogContent, TextField } from '@material-ui/core';
import { ChangeEvent, Dispatch, SetStateAction, useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export interface ILoginProps {
  isOpen: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

export const Login = (props: ILoginProps) => {
  const { isOpen, handleClose } = props;

  const { toggleAuth } = useContext(AuthContext);

  const [username, setUsername] = useState('');

  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const username = event.target.value;
    setUsername(username);
  };

  const onLoginClick = () => {
    toggleAuth(username);
    setUsername('');
    handleClose(false);
  };

  const onHandleClose = () => {
    handleClose(false);
  };

  return (
    <Dialog open={isOpen} onClose={onHandleClose}>
      <DialogContent>
        <TextField label="Username" onChange={onUsernameChange} required />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          onClick={onLoginClick}
          disabled={username === ''}
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
