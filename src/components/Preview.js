import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";
import { SaveAltOutlined } from "@mui/icons-material";
import { useMyContext } from "../context/Context";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Preview = () => {
	const Navigate = useNavigate();
	const { addData } = useMyContext();

	const style = {
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: "0px 200px 500px 70px green",
		p: 4,
		zIndex: "200",
		borderRadius: "20px",
	};

	const PreviewResume = useSelector((state) => state.template.selectedTemplate);

	const [displayMsg, setDisplayMsg] = useState(true);

	function handleSaveClick() {
		addData(PreviewResume);
		Navigate("/my-resumes");
	}

	setTimeout(() => {
		setDisplayMsg(false);
	}, 2000);

	return (
		<div>
			{PreviewResume === null ? (
				<h2 style={{ color: "red", textAlign: "center", marginTop: "200px" }}>
					You are not selected any template, Nothing to Preview <br /> Please
					select a Template!
				</h2>
			) : (
				<>
					{displayMsg && (
						<div>
							<Box sx={style}>
								<Typography id="modal-modal-title" variant="h6" component="h2">
									Your Resume Successfully Created
								</Typography>
								<Typography id="modal-modal-description" sx={{ mt: 2, mb: 5 }}>
									This is an Preview Version of your Resume
								</Typography>
							</Box>
						</div>
					)}
					<Container key={PreviewResume.id} sx={{ position: "relative" }}>
						<Box id="resume-pre">{PreviewResume.rTemp}</Box>
						<Box
							sx={{
								height: "100px",
								p: 2,
								position: "absolute",
								display: "flex",
								flexDirection: "column-reverse",
								justifyContent: "space-between",
								top: "100px",
								left: "50px",
								zIndex: "100",
							}}>
							<Fab
								onClick={() => {
									Navigate("/details-filling-page/key-skills");
								}}
								sx={{
									fontWeight: "bold",
									letterSpacing: 3,
									marginLeft: "5px",
									size: "large",
								}}
								variant="extended"
								color="secondary"
								size="medium">
								<KeyboardBackspaceIcon sx={{ marginRight: "5px" }} />
								BACK
							</Fab>
							<Fab
								onClick={handleSaveClick}
								sx={{ fontWeight: "bold", letterSpacing: 3 }}
								variant="extended"
								color="success"
								size="medium">
								<SaveAltOutlined sx={{ marginRight: "7px" }} />
								SAVE
							</Fab>
						</Box>
					</Container>
				</>
			)}
		</div>
	);
};

export default Preview;
