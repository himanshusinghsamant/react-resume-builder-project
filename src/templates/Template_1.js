import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import Stack from "@mui/system/Stack";
import { useSelector } from "react-redux";

const Templates = () => {
	const PersonalInfoData = useSelector(
		(state) => state.personalInfo.personalInfoValues
	);
	const profileData = useSelector((state) => {
		return state.profile.profileInfovalue;
	});
	const workExpData = useSelector((state) => state.workExp.workData);
	const educationData = useSelector((state) => state.eduDetail.eduDetails);
	const skillsData = useSelector((state) => state.skills.skillDetails);

	return (
		<div>
			<Container
				sx={{
					marginTop: "80px",
					display: "flex",
					justifyContent: "center",
					height: "600px",
				}}>
				<Box
					sx={{ minHeight: "100vh", backgroundColor: "#fbf4f5", width: "40%" }}>
					<Box
						sx={{
							height: "80px",
							backgroundColor: "#f4c9c9",
							position: "relative",
						}}>
						<div style={{ padding: "10px 10px" }}>
							<div style={{ display: "flex" }}>
								<Typography sx={{ fontSize: "25px", letterSpacing: 3 }}>
									{PersonalInfoData.FirstName}
								</Typography>
								<Typography
									sx={{
										fontSize: "25px",
										color: "grey",
										letterSpacing: 3,
										marginLeft: "10px",
									}}>
									{PersonalInfoData.LastName}
								</Typography>
							</div>
							<Typography sx={{ letterSpacing: 10, fontSize: "12px" }}>
								WEB DEVELOPER
							</Typography>
						</div>
						<Box sx={{ position: "absolute", top: "40px", right: "20px" }}>
							<img
								style={{ width: "60px", height: "60px", borderRadius: "50%" }}
								src={profileData}
								alt="profile-img"
							/>
						</Box>
					</Box>

					<Box sx={{ padding: "10px", display: "flex" }}>
						<div style={{ width: "45%" }}>
							<Typography sx={{ fontSize: "10px" }}>
								Email : {PersonalInfoData.Email}
							</Typography>
							<Typography sx={{ fontSize: "10px" }}>
								Mobile : {PersonalInfoData.MobileNo}
							</Typography>
							<Typography sx={{ fontSize: "10px" }}>
								Address : {PersonalInfoData.Address}
							</Typography>
							<Typography sx={{ fontSize: "10px" }}>
								City : {PersonalInfoData.City}
							</Typography>
							<Typography sx={{ fontSize: "10px" }}>
								State : {PersonalInfoData.State}
							</Typography>
							<Typography sx={{ fontSize: "10px" }}>
								PinCode : {PersonalInfoData.PinCode}
							</Typography>
						</div>
						<hr style={{ color: "#f4f4f7" }} />
						<div style={{ width: "45%" }}>
							<Typography>PROFILE</Typography>
							<p style={{ fontSize: "10px" }}>{PersonalInfoData.Objective}</p>
						</div>
					</Box>
					<hr style={{ color: "#f4f4f7" }} />
					<Box sx={{ padding: "10px", display: "flex" }}>
						<div style={{ width: "45%" }}>
							<Typography sx={{ marginBottom: "20px" }}>EXPERIENCE</Typography>
							{workExpData &&
								workExpData.map((info) => {
									return (
										<div style={{ marginTop: "10px" }}>
											<Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
												{info.JobTitle}
											</Typography>
											<Typography sx={{ fontSize: "10px" }}>
												{info.OrganizationName}
											</Typography>
											<span style={{ fontSize: "10px", fontWeight: "bold" }}>
												{info.StartYear} -
											</span>
											<span style={{ fontSize: "10px", fontWeight: "bold" }}>
												{info.EndYear}
											</span>
										</div>
									);
								})}
						</div>
						<hr style={{ color: "#f4f4f7" }} />

						<Box sx={{ width: "45%" }}>
							<Typography sx={{ marginBottom: "20px" }}>EDUCATION</Typography>
							{educationData &&
								educationData.map((info) => {
									return (
										<div>
											<Typography sx={{ marginBottom: "20px" }}>
												{info.Type}
											</Typography>
											<Typography sx={{ fontSize: "12px" }}>
												{info.University}
											</Typography>
											<Typography sx={{ fontSize: "10px" }}>
												{info.Degree}
											</Typography>
											<span style={{ fontSize: "10px", fontWeight: "bold" }}>
												{info.StartYear} -
											</span>
											<span style={{ fontSize: "10px", fontWeight: "bold" }}>
												{info.EndYear}
											</span>
										</div>
									);
								})}

							<hr style={{ color: "#f4f4f7" }} />
							<div style={{ marginTop: "20px" }}>
								<Typography sx={{ marginBottom: "20px" }}>SKILLS</Typography>
								<Stack sx={{ marginLeft: "10px" }} spacing={1}>
									{skillsData &&
										skillsData.map((info) => {
											return (
												<li
													style={{
														fontSize: "11px",
														fontWeight: "bold",
														paddingLeft: "10px",
													}}>
													{info.skills}
												</li>
											);
										})}
								</Stack>
							</div>
						</Box>
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default Templates;
