import { Box, Typography, TextField, Button, Divider } from '@mui/material';
import { GoogleLoginButton, FacebookLoginButton } from 'react-social-login-buttons';
import { Link } from 'react-router-dom';

const SingIn = () => {
  const handleGoogleSignIn = () => {
    // Implement Google sign-in logic here
  };

  const handleFacebookSignIn = () => {
    // Implement Facebook sign-in logic here
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
      p={2}
    >
      <Box
        width="100%"
        maxWidth="400px"
        bgcolor="white"
        p={4}
        borderRadius={2}
        boxShadow={3}
      >
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Sign In
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Sign In
        </Button>
        <Divider sx={{ my: 2 }}>or</Divider>
        <GoogleLoginButton onClick={handleGoogleSignIn} />
        <FacebookLoginButton onClick={handleFacebookSignIn} />
        <Typography align="center" sx={{ mt: 2 }}>
          Don't have an account?{' '}
          <Link to="/signup">
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SingIn