import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import { Grid } from "@mui/material";
import FormsImage from "../ui/FormsImage";

const LoginLayout = styled.main`
  min-height: 100vh;
`;
function LoginPage() {
  return (
    <LoginLayout>
      <Grid container>
        <Grid  md={7} display={{ xs: 'none', md: 'block' }}>
          <FormsImage />
        </Grid>
        <Grid item xs={12} md={5}>
          <LoginForm />
        </Grid>
      </Grid>
    </LoginLayout>
  );
}

export default LoginPage;
