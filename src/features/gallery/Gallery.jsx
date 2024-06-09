import  { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Pagination,
  ImageList,
  ImageListItem,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styled from "styled-components";
import { fetchPhotos } from "../../services/PexelsService";
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const RoundedTextField = styled(TextField)`
  && {
    width: 400px;
    .MuiOutlinedInput-root {
      border-radius: 50px; 
    }
    .MuiOutlinedInput-input {
      padding: 10px 20px; 
    }
  }
`;

const Overlay = styled(Box)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const IconWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("nature"); 
  const [inputValue, setInputValue] = useState(""); 
  const { currentUser, addFavoritePhoto, removeFavoritePhoto, favoritePhotos } = useAuth();
  const navigate = useNavigate();

  const fetchPhotosFromAPI = async (query, page) => {
    setLoading(true);
    try {
      const data = await fetchPhotos(query, page, 20);
      setPhotos(data.photos);
      const totalImages = data.total_results;
      const imagesPerPage = 20;
      setTotalPages(Math.ceil(totalImages / imagesPerPage));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching photos:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPhotosFromAPI(searchQuery, page);
  }, [searchQuery, page]);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const toggleLike = async (photoUrl) => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    if (favoritePhotos.includes(photoUrl)) {
      await removeFavoritePhoto(photoUrl);
    } else {
      await addFavoritePhoto(photoUrl);
    }
  };
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearchQuery(inputValue);
      setPage(1); // Reset to first page on new search
    }
  };

  return (
    <Box component="section" px={5} >
      <Box
        component="header"
        pt={5}
        pb={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography color="primary.light" variant="h3">
          Collection
        </Typography>
        <RoundedTextField
          variant="outlined"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{ backgroundColor: "primary.light", height: "2px", margin: "auto" }}
      ></Box>
      <Box sx={{ width: '100%', overflowY: 'hidden' }} py={5}>
        <ImageList variant="masonry" cols={3} gap={8} >
          {photos.map((photo) => (
            <ImageListItem key={photo.id} sx={{ position: 'relative' }}>
              <img
                src={`${photo.src.large}?w=248&fit=crop&auto=format`}
                srcSet={`${photo.src.large}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={photo.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
              <Overlay className="overlay" sx={{ position: 'absolute' }}>
                <IconWrapper onClick={() => toggleLike(photo.src.large)}>
                  {favoritePhotos.includes(photo.src.large) ? (
                    <FavoriteIcon fontSize="large" style={{ color: 'red' }} />
                  ) : (
                    <FavoriteBorderIcon fontSize="large" />
                  )}
                </IconWrapper>
              </Overlay>
            </ImageListItem>
          ))}
          {photos.length === 0 && (
            <Typography variant="h6" color="primary.light" textAlign="center" width="100%">
              No photos found
            </Typography>
          
          )}
        </ImageList>
      </Box>
      {loading && (
        <Box display="flex" justifyContent="center" mt={3}>
          <CircularProgress />
        </Box>
      )}
      {!loading && totalPages > 1 && (
        <Box display="flex" justifyContent="center" py={5}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
}

export default Gallery;
