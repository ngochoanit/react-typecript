import {
  AppBar,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  styled,
  Toolbar,
} from '@material-ui/core';
import { Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import WellcomeMessage from './WellcomeMessage';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
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
    <AppBar position="static" color="primary">
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