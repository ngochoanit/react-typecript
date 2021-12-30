import {
  AppBar,
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  styled,
  Toolbar,
} from '@material-ui/core';
import { Typography } from 'antd';
import React, { useEffect, useState, useContext } from 'react';
import WellcomeMessage from './WellcomeMessage';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ProgressContext } from 'src/contexts/ProgressContext';
import { ThemeContext } from 'src/contexts/ThemeContext';
const StyledBox = styled(Box)({
  textAlign: 'center',
});
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positonSelection: {
      color: 'white',
      borderBottom: '1px solid white',
    },
  }),
);

const Navbar = () => {
  // state
  const [position, setPosition] = useState<string>('full-stack-developer');
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  const { status, lastTime } = useContext(ProgressContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  //effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);
    return () => {
      clearTimeout(intervalId);
    };
  }, []);
  const classes = useStyles();
  const onPositionChange = (
    event: React.ChangeEvent<{
      value: unknown;
    }>,
  ) => setPosition(event.target.value as string);
  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">My Move</Typography>
          <StyledBox>
            <WellcomeMessage position={position}></WellcomeMessage>
            <Chip
              label={`Last time working on this project: ${lastTime} - Status: ${status}`}
            />
            <Box mt={1}>
              <FormControl>
                <Select
                  className={classes.positonSelection}
                  value={position}
                  onChange={onPositionChange}
                >
                  <MenuItem value={'full-stack-developer'}>
                    full-stack developer
                  </MenuItem>
                  <MenuItem value={'front-end-developer'}>
                    front end developer
                  </MenuItem>
                  <MenuItem value={'back-end-developer'}>
                    back end developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </StyledBox>
          <StyledBox>
            <Box>
              <Typography variant="h6">{time.toLocaleString()}</Typography>
            </Box>
            <Button variant="contained" color="primary" disableElevation>
              Login
            </Button>
          </StyledBox>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
