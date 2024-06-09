
import  { useEffect, useState } from "react";
import { Box, ImageList, ImageListItem, CircularProgress, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import Navbar from "../features/landing page/Navbar";
function FavouritePage() {
  
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const fetchFavoritePhotos = async () => {
        setLoading(true);
        const userRef = doc(db, "users", currentUser.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setFavoritePhotos(userDoc.data().favoritePhotos || []);
        }
        setLoading(false);
      };
      fetchFavoritePhotos();
    }
  }, [currentUser]);

  return (
    <>
     <Navbar/>
     <Box component="section" px={5} >
      <Box component="header" pt={12} pb={3}>
        <Typography color="primary.light" variant="h3">
          Favorite Photos
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "primary.light", height: "2px", margin: "auto" }}></Box>
      <Box sx={{ width: '100%', overflowY: 'hidden' }} py={5}>
        {loading ? (
          <Box display="flex" justifyContent="center" mt={3}>
            <CircularProgress />
          </Box>
        ) : (
          <ImageList variant="masonry" cols={3} gap={8}>
            { favoritePhotos.length !==0 && favoritePhotos.map((photoUrl, index) => (
              <ImageListItem key={index}>
                <img
                  src={photoUrl}
                  alt="Favorite"
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
              </ImageListItem>
            ))}
            {favoritePhotos.length === 0 && (
              <Typography variant="h6" color="primary.light" textAlign="center" width="100%">
                No favorite photos
              </Typography>
            )}
          
          </ImageList>
        )}
      </Box>
    </Box>
    </>
   
  );
}
export default FavouritePage



