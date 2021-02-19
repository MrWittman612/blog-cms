import {
    Avatar,
    Button,
    Container,
    CssBaseline,
    Grid,
    IconButton,
    InputAdornment,
    makeStyles,
    TextField,
    Typography,
} from '@material-ui/core';
import {
    LockOutlined as LockOutlinedIcon,
    Visibility,
    VisibilityOff,
} from '@material-ui/icons';
import axios from 'axios';
import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
// import {Copyright} from '../../utils/Copyright';
import {saveAuthToken} from '../../utils/userTokenAuth';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    styledHelperText: {color: 'red'},
}));

export function Register() {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: '',
    });
    const [errors, setErrors] = useState([]);
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    let history = useHistory();

    const updateForm = (event) => {
        if (errors) setErrors({});
        if (error === true) setError(false);
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event) => event.preventDefault();

    const registerUser = async (event) => {
        event.preventDefault();
        const {password, password2, email} = formData;
        if (email === '' || password === '') {
            setError(true);
            setErrors({msg: 'Invalid Field'});
        } else if (password.length < 6) {
            setError(true);
            setErrors({password: '( Choose a longer password )'});
        } else if (password !== password2) {
            setError(true);
            setErrors({password: '( Passwords must match!! )'});
        } else {
            const newUser = {
                email: email,
                password: password,
            };

            try {
                const response = await axios.post(
                    'http://localhost:3001/api/user/register',
                    newUser
                );
                console.log(
                    '🚀 ~ file: Register.js ~ line 92 ~ registerUser ~ response',
                    response
                );

                saveAuthToken(response.data.token);
                history.push('/news');
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Sign up
                </Typography>
                <form className={classes.form} onSubmit={registerUser}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label='Email Address'
                                id='email'
                                name='email'
                                onChange={updateForm}
                                error={error}
                                variant='outlined'
                                autoComplete='email'
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label='Password'
                                id='password'
                                name='password'
                                type='password'
                                // type={showPassword ? 'text' : 'password'}
                                onChange={updateForm}
                                error={error}
                                inputProps={{htmlFor: 'password'}}
                                InputProps={{
                                    // classes: { underline: styleUnderline },
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton
                                                aria-label='toggle password visibility'
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                            >
                                                {showPassword ? (
                                                    <Visibility />
                                                ) : (
                                                    <VisibilityOff />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                autoComplete='current-password'
                                variant='outlined'
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label='Password2'
                                id='password2'
                                type={showPassword ? 'text' : 'password'}
                                name='password2'
                                onChange={updateForm}
                                helperText={errors && errors.password}
                                FormHelperTextProps={{
                                    classes: {root: classes.styledHelperText},
                                }}
                                error={error}
                                variant='outlined'
                                // autoComplete='current-password'
                                fullWidth
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value='allowExtraEmails' color='primary' />}
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                />
              </Grid> */}
                    </Grid>

                    <Button
                        className={classes.submit}
                        type='submit'
                        value='Register'
                        variant='contained'
                        color={error ? 'inherit' : 'primary'}
                        fullWidth
                    >
                        Sign Up Now
                    </Button>

                    <Grid container justify='center'>
                        <Grid item>
                            <Link to={'/login'} variant='body2'>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            {/* <Box mt={5}>
          <Copyright />
        </Box> */}
        </Container>
    );
}