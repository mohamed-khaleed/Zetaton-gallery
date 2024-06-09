
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Typography } from '@mui/material';
import Form from '../../ui/Form';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function SignUpForm() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const { handleSubmit, control, formState: { errors, isValid } } = useForm({
    mode: 'onChange'
  });
  const [signupError, setSignupError] = useState('');

  const onSubmit = async (data) => {
    try {
      setSignupError('');
      await signup(data.email, data.password);
      navigate('/login');
    } catch (error) {
      setSignupError('Failed to create an account');
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='h2' color="primary" sx={{ fontSize: "3rem" }}>
        Create an account
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ fontSize: "1.1rem" }} gutterBottom>
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
      {signupError && <Typography color="error">{signupError}</Typography>}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 2 }}
        disabled={!isValid}
      >
        Create account
      </Button>
      <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
        Already have an account?  <NavLink to="/login">
        Login
      </NavLink>
      </Typography>
    </Form>
  );
}

export default SignUpForm;
