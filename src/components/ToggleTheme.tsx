import { Fab, makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { ThemeContext } from 'src/contexts/ThemeContext';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
const useStyle = makeStyles({
  floatBtn: {
    position: 'fixed',
    right: '3rem',
    bottom: '3rem',
  },
});

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const classes = useStyle();
  const onToggleTheme = () => {
    toggleTheme(theme === 'primary' ? 'secondary' : 'primary');
  };
  return (
    <Fab
      color={theme === 'primary' ? 'secondary' : 'primary'}
      variant="circular"
      className={classes.floatBtn}
      onClick={onToggleTheme}
    >
      <FingerprintIcon></FingerprintIcon>
    </Fab>
  );
};

export default ToggleTheme;
