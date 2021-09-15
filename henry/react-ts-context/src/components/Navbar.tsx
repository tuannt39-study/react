import {
  AppBar,
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import WelcomeMessage from './WelcomeMessage';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ProgressContext } from '../contexts/ProgressContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: 'white',
      borderBottom: '1px solid white',
    },
  })
);

export const Navbar = () => {
  const classes = useStyles();

  const { lastTime, status } = useContext(ProgressContext);
  const { theme } = useContext(ThemeContext);

  const [position, setPosition] = useState<string>('Full-stack');
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  const {
    authInfo: { isAuthenticated },
    toggleAuth,
  } = useContext(AuthContext);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => clearInterval(timer);
  }, []);

  const onPositionChange = (
    event: React.ChangeEvent<{
      value: unknown;
    }>
  ) => setPosition(event.target.value as string);

  const onLoginClick = () => {
    const username: string = isAuthenticated ? '' : 'react';
    toggleAuth(username);
  };

  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box display="flex" justifyContent="space-between" alignItems="center" width={1} py={2}>
          <Typography variant="h6">React TypeScript</Typography>
          <Box textAlign="center">
            {isAuthenticated && (
              <>
                <WelcomeMessage position={position} country="Vietnam" />
                <Chip
                  label={`Last time working on this project: ${lastTime} - Status: ${status}`}
                />
                <Box mt={1}>
                  <FormControl>
                    <Select
                      value={position}
                      onChange={onPositionChange}
                      className={classes.positionSelect}
                    >
                      <MenuItem value="Full-stack">Full-stack</MenuItem>
                      <MenuItem value="Back-stack">Back-stack</MenuItem>
                      <MenuItem value="Front-stack">Front-stack</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </>
            )}
          </Box>
          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">{time.toUTCString()}</Typography>
            </Box>
            <Button variant="contained" onClick={() => onLoginClick()}>
              {isAuthenticated ? 'Logout' : 'Login'}
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
