import { Fab } from '@material-ui/core';
import { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ThemeContext } from '../contexts/ThemeContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    floatBtn: {
      position: 'fixed',
      right: '3rem',
      bottom: '3rem',
    },
  })
);

export const ToggleTheme = () => {
  const classes = useStyles();

  const { theme, toggleTheme } = useContext(ThemeContext);

  const onThemeClick = () => {
    const themeActive = theme === 'primary' ? 'secondary' : 'primary';
    toggleTheme(themeActive);
  };

  return (
    <Fab color={theme} variant="extended" className={classes.floatBtn} onClick={() => onThemeClick()}>
      Toggle theme
    </Fab>
  );
};

export default ToggleTheme;
