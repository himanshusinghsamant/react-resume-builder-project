import React from "react";
import { Box } from "@mui/system";
import Fab from "@mui/material/Fab";
import { DownloadDoneOutlined } from "@mui/icons-material";
import { DeleteForeverOutlined } from "@mui/icons-material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { TextField, Container, Typography } from "@mui/material";
import { useMyContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const MyResumes = () => {
	const Navigate = useNavigate();

	const [downFileName, setDownFileName] = useState("");

	const { resumeTemplate } = useMyContext();

	function handleDelete() {
		localStorage.clear();
		window.location.reload();
	}

	function onChange(e) {
		setDownFileName(e.target.value);
	}

	async function handleDownloadFile() {
		const content = document.getElementById("resume-Temp");
		html2canvas(content)
			.then((canvas) => {
				const imgData = canvas.toDataURL("image/png");
				const pdf = new jsPDF("p", "px", "a4");
				var ratio = canvas.width / canvas.height;
				var width = pdf.internal.pageSize.getWidth();
				var height = width / ratio;
				pdf.addImage(imgData, "JPEG", 0, 0, width, height);
				// pdf.output('dataurlnewwindow');
				pdf.save(`${downFileName}.pdf`);

				setDownFileName("");
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<div>
			{!resumeTemplate ? (
				<Container
					sx={{
						display: "flex-column",
						alignItems: "center",
						textAlign: "center",
					}}>
					<Typography
						variant="h4"
						sx={{
							color: "red",
							marginTop: "100px",
							textAlign: "center",
							fontWeight: "bold",
						}}>
						No Resume Is Created Yet !
					</Typography>
					<Typography
						subtitle1="h6"
						sx={{ color: "skyblue", fontWeight: "bold	", marginTop: "20px" }}>
						Please Select Template And Built Resume.
					</Typography>
					<Typography
						variant="h6"
						onClick={() => {
							Navigate("/");
						}}
						sx={{ color: "skyblue", cursor: "pointer", fontWeight: "bold	" }}>
						Click Here ?
					</Typography>
					<Box>
						<img src="./images/image2.jpg" alt="#" height={350} />
					</Box>
				</Container>
			) : (
				<>
					<Box
						key={resumeTemplate.id}
						sx={{ position: "relative", marginTop: "100px" }}>
						<Box id="resume-Temp">{resumeTemplate.rTemp}</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								position: "absolute",
								top: "50px",
								right: "10%",
								height: "200px",
								justifyContent: "space-around",
							}}>
							<TextField
								onChange={onChange}
								variant="outlined"
								label="EnterFileName"
								type={"text"}
							/>

							<Fab
								onClick={handleDownloadFile}
								variant="extended"
								size="medium"
								color="primary">
								<DownloadDoneOutlined sx={{ mr: 1 }} />
								DOWNLOAD
							</Fab>
							<Fab
								onClick={handleDelete}
								variant="extended"
								size="medium"
								color="primary">
								<DeleteForeverOutlined sx={{ mr: 2 }} />
								DELETE
							</Fab>
						</Box>
					</Box>
					;
				</>
			)}
		</div>
	);
};

export default MyResumes;
