
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Typography } from '@mui/material';
import Form from '../../ui/Form';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { handleSubmit, control, formState: { errors, isValid } } = useForm({
    mode: 'onChange'
  });
  const [loginError, setLoginError] = useState('');

  const onSubmit = async (data) => {
    try {
      setLoginError('');
      await login(data.email, data.password);
      navigate('/');
    } catch (error) {
      setLoginError('Failed to log in');
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h2' color="primary" sx={{ fontSize: "3rem" }} gutterBottom>
        Login To Account
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ fontSize: "1.2rem" }} gutterBottom>
        Let’s get started with your 30-day free trial.
      </Typography>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
          />
        )}
      />
      {loginError && <Typography color="error">{loginError}</Typography>}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 2 }}
        disabled={!isValid}
      >
        Login
      </Button>
      <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
        Don't have an account?  <NavLink to="/signup">
        Sign up
      </NavLink>
      </Typography>
    </Form>
  );
}

export default LoginForm;
