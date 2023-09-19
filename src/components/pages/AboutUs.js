import React from "react";
import { Grid, Typography, Container, capitalize } from "@mui/material";
import { Box } from "@mui/system";
import { SocialMediaImg } from "../../data/Data";
import { Link } from "react-router-dom";

const MediaIcons = (props) => {
	console.log(props.img);
	return (
		<div>
			<Box sx={{ margin: "5px 10px" }}>
				<Link to={props.img.Link}>
					<img
						style={{ width: "50px" }}
						src={props.img.image}
						alt="IconImage"
					/>
				</Link>
			</Box>
		</div>
	);
};

const AboutUs = () => {
	return (
		<>
			<Container>
				<Grid container direction="row" alignItems="center" sx={{ mt: 8 }}>
					<Grid item xs={12} lg={6} order={{ xs: 2, sm: 1 }}>
						<Typography
							variant="h2"
							color="inherit"
							sx={{ mb: 4, mt: 4, fontFamily: "Segoe UI",fontWeight:'500' }}>
							Resume Builder
						</Typography>
						<Typography
							marginBottom={5}
							variant="h6"
							color="inherit"
							textTransform={"capitalize"}>
							Welcome to our team! We are a group of five passionate individuals
							<Typography
								sx={{
									fontWeight: "bold",
									color: "red",
									letterSpacing: 2,
								
								}}>
								{" "}
								KUNDAN, HIMANSHU, PRAGATI AND PRASAD.
							</Typography>{" "}
							who came together to turn our shared vision into reality. Our
							journey began with a simple idea - to empower job seekers like you
							with a user-friendly and fully responsive resume builder app.
							Using the power of React, we've crafted an application that
							simplifies the process of creating a standout resume.
							<br />
							Our aim : Empower job seekers with responsive, user-centric
							resumes. Your success starts here. Happy resume crafting! <Typography sx={{fontSize:"40px"}}>🌟🚀📄</Typography>
						</Typography>
					</Grid>
					<Grid
						container
						item
						xs={12}
						sm={12}
						lg={6}
						justifyContent="center"
						order={{ xs: 1, sm: 2 }}>
						<Box
							sx={{ width: "100%", marginLeft: "30%", display: "flex" }}
							component="img"
							src="./images/About.png"
						/>
					</Grid>
				</Grid>

				<Box
					sx={{
						display: "flex",

						flexDirection: "flex-end",
						width: "10%",
					}}>
					{SocialMediaImg &&
						SocialMediaImg.map((img) => {
							return <MediaIcons Link={img.Link} img={img} key={img.id} />;
						})}
				</Box>
			</Container>
		</>
	);
};

export default AboutUs;
