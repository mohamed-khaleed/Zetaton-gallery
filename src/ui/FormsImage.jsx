import { Box, Typography } from "@mui/material";
import image1 from "../assets/images/1.jpg";
import { styled } from "@mui/system";

const ImageContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  alignItems: "center",
  backgroundImage: `url(${image1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "#fff",
  padding: "2rem",
  height: "100vh",
});
const TestimonialText = styled(Typography)({
  fontSize: "2.5rem",
  textAlign: "center",
  marginBottom: "1rem",
});

function FormsImage() {
  return (
    <ImageContainer>
      <TestimonialText>
        “We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.”
      </TestimonialText>
    </ImageContainer>
  );
}

export default FormsImage;
