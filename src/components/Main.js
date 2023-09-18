import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { TempImg } from "../data/Data";
import TempGrid from "./TempGrid";


const Main = () => {
	return (
		<div sx={{ display: "flex", flexWrap: "wrap" }}>
			<Box
				sx={{
					marginTop: "100px",
					marginLeft: "70px",
					height: "100px",
					width: {
						xs: 230,
					},
				}}>
				<Typography
					sx={{
						fontSize: "30px",
						fontWeight: "bold",
						":hover": { color: "grey" },
					}}>
					TEMPLATES
				</Typography>
				<Typography sx={{ color: "grey", justifyContent: { xs: "center" } }}>
					Select Template To Get Started
				</Typography>
			</Box>
			<Container
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "space-around",
					alignItems: "center",
				
        
				}}>
				{TempImg &&
					TempImg.map((img) => {
						return <TempGrid img={img} key={img.id} />;
					})}
			</Container>
		</div>
	);
};

export default Main;
