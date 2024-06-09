import styled from "styled-components";
import SignUpForm from "../features/authentication/SignUpForm";
import { Grid } from "@mui/material";
import FormsImage from "../ui/FormsImage";
const LoginLayout = styled.main`
  min-height: 100vh;
`;
function SignUpPage() {
  return (
    <LoginLayout>
      <Grid container>
        <Grid item  md={7} display={{ xs: 'none', md: 'block' }}>
          <FormsImage />
        </Grid>
        <Grid item xs={12} md={5}>
          <SignUpForm />
        </Grid>
      </Grid>
    </LoginLayout>
  );
}

export default SignUpPage
