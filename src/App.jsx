import FavouritePage from "./pages/FavouritePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme.js";
import { AuthProvider } from './context/AuthContext.jsx';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider >
          
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/favorites" element={<FavouritePage />} />
            </Routes>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
