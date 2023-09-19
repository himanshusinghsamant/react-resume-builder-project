import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import Avatar from "react-avatar-edit";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { profileAction } from "../../Redux/Index";
import profile from "../../Images/profile.png";
const ProfileSection = () => {
	const profileData = useSelector((state) => state.profile.profileInfoValue);
	console.log(profileData);

	const dispatch = useDispatch();
	const [dialogs, setdialogs] = useState(false);
	const [imgCrop, setimgCrop] = useState(false);
	const [storeImage, setstoreImage] = useState(null);

	const onCrop = (view) => {
		setimgCrop(view);
	};
	const onClose = () => {
		setimgCrop(null);
	};
	const saveImage = () => {
		setstoreImage(imgCrop);
		setdialogs(false);
		dispatch(profileAction(imgCrop));
	};
	// console.log(storeImage)
	// const profileimgShow = storeImage(imgCrop)

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				mb: "25px",
			}}>
			<img
				style={{
					width: "100px",
					height: "100px",
					borderRadius: "50%",
					objectFit: "cover",
				}}
				src={imgCrop ? storeImage : profile}
				alt="Profile-img"
			/>
			<Button
				onClick={() => setdialogs(true)}
				variant="outlined"
				sx={{ height: "25px", mt: "10px" }}>
				Upload profile
			</Button>
			<Dialog sm={2}
				visible={dialogs}
				style={{
					top: "22%",
					left:"45%",
					border:"2px solid black",
					background: "white",
					position: "absolute",
					borderRadius: "20px",
					Width: "50%",
					height: "400px",
					zIndex: "100",
					boxShadow:"0 0 20px 0.1px green"
					
				}}
				
				header={() => <p >UPDATE PROFILE</p>}
				onHide={() => setdialogs(false)}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						width: "100%",
						height: "120px",
					}}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						marginLeft:"15px"
						}}>
						<Box 
							sx={{
								display: "flex",
								justifyContent: "space-around",
								flexDirection: "column",
								width: "105%",
								height: "350px",
								marginTop: "-30px",
							
							}}>
							<Avatar
								width={380}
								height={300}
								onClose={onClose}
								onCrop={onCrop}
							/>
							<Button
								sx={{ width: "130px", marginLeft: "135px" }}
								variant="contained"
								onClick={() => {
									// console.log(imgCrop)
									saveImage();
								}}>
								Save
							</Button>
						</Box>
					</Box>
				</Box>
			</Dialog>
		</Box>
	);
};

export default ProfileSection;
