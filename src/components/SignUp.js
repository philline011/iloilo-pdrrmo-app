import React, {Fragment, useState, useEffect} from 'react';
import { Typography, Grid, IconButton, Box, Card, CardContent, CardActions, Button, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSnackbar } from 'notistack';

function SignUp(props) {
    const {setOpenSignUp} = props
    const { enqueueSnackbar } = useSnackbar();

    const handleClose = () => {
        setOpenSignUp(false)
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [OTP, setOTP] = useState('')
    const [submitButtonState, setSubmitButtonState] = useState(true);
    const [usernameValidation, setUsernameValidation] = useState(null);
    const warningMessage = 'Passwords do not match';
    const warningMessageOTP = 'OTP key required';

    useEffect(() => {
        if (
          username === '' ||
          password === '' ||
          confirmPassword === '' ||
          OTP === '' ||
          password !== confirmPassword
        ) {
          setSubmitButtonState(true);
        } else {
          setSubmitButtonState(false);
        }
      }, [username, password, confirmPassword, submitButtonState, OTP]);

      const handleSubmit = () => {
        setOpenSignUp(false)
        enqueueSnackbar('Success creating an account!', { variant: 'success', autoHideDuration: 3000})
      }

    return (
        <Fragment>
            <Grid container sx={{padding: 8}}>
                <Grid
                    container
                    direction={'row'}
                    justifyContent={'flex-end'}
                    alignItems={'flex-start'}>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <Box elevato="true">
                        <Typography variant="h4" sx={{marginBottom: 4}}>
                            Register an account
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
            <Card sx={{minWidth: 275}}>
              <CardContent>
                <Grid container spacing={2} marginBottom={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Username"
                      variant="outlined"
                      style={{width: '100%'}}
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                    {usernameValidation && (
                      <Typography color={'red'}>
                        {usernameValidation}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type={'password'}
                      label="Password"
                      variant="outlined"
                      style={{width: '100%'}}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Please confirm password"
                      type={'password'}
                      variant="outlined"
                      style={{width: '100%'}}
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                    />
                    {password !== confirmPassword && (
                      <Typography color={'red'}>{warningMessage}</Typography>
                    )}
                  </Grid>
                  <Grid item xs={8}>
                  <TextField
                      label="OTP"
                      variant="outlined"
                      style={{width: '100%'}}
                      value={OTP}
                      onChange={e => setOTP(e.target.value)}
                    />
                    {OTP === '' && (
                        <Typography color='red'>{warningMessageOTP}</Typography>
                    )}
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant='contained' size='small'>
                        Request OTP
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption" display="block" gutterBottom>
                        The system will send the OTP key via email to Iloilo Provincial Office, please contact assigned personnel for the code
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions sx={{justifyContent: 'flex-end'}}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={e => handleSubmit()}
                  disabled={submitButtonState}>
                  Submit
                </Button>
              </CardActions>
            </Card>
          </Grid>
            </Grid>
        </Fragment>
    )
}
export default SignUp