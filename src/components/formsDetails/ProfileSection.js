import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import Avatar from 'react-avatar-edit';
import { Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { profileAction } from '../../Redux/Index';
import profile from '../../Images/profile.png'
const ProfileSection = () => {
  const profileData = useSelector((state) => state.profile.profileInfoValue);
  console.log(profileData)



  const dispatch = useDispatch();
  const [dialogs, setdialogs] = useState(false);
  const [imgCrop, setimgCrop] = useState(false);
  const [storeImage, setstoreImage] = useState(null);

  const onCrop = (view) => {
    setimgCrop(view)
  }
  const onClose = () => {
    setimgCrop(null)
  }
  const saveImage = () => {
    setstoreImage(imgCrop)
    setdialogs(false)
    dispatch(profileAction(imgCrop))
  }
  // console.log(storeImage)
  // const profileimgShow = storeImage(imgCrop)

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: "25px",
      }}
    >
      <img
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
        src={imgCrop ? storeImage: profile }
        alt="Profile-img" />
      <Button onClick={() => setdialogs(true)} variant="outlined" sx={{ height: '25px', mt: "10px" }}>
        Upload profile
      </Button>
      <Dialog
        visible={dialogs}
        style={{ top: "100px", left: "400px", background: "#CCCCCC", position: "absolute", borderRadius: "10px", maxWidth: '400px', height: "400px", zIndex: "100" }}

        header={() => (
          <p>
            Update Profile
          </p>
        )}
        onHide={() => setdialogs(false)}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "400px", height: "120px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "0px", width: "4px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-around", flexDirection: "column", width: "400px", height: "350px", marginTop: "-30px" }}>
              <Avatar width={380} height={300} onClose={onClose} onCrop={onCrop} />
              <Button sx={{ width: "130px", marginLeft: "135px" }} variant="contained" onClick={() => {
                saveImage()
              }}>Save</Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Box>
  )
}

export default ProfileSection
