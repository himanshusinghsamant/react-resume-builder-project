import React, { useState } from "react";
import { Button, Divider, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useFieldArray, useForm } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import { educationDetailsAction } from "../../Redux/Index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../context/Context";
// import { useState } from "react";
// import { useEffect } from "react";

const Education = () => {
  const { mode } = useMyContext();
  const currentYear = new Date().getFullYear();
  const [startYear, setStartYear] = useState(currentYear);
  const [endYear, setEndYear] = useState(currentYear);

  const handleStartYearChange = (event) => {
    const newStartYear = parseInt(event.target.value);
    setStartYear(newStartYear);
    // Ensure end year is greater than or equal to the selected start year
    if (newStartYear > endYear) {
      setEndYear(newStartYear);
    }
  };

  const handleEndYearChange = (event) => {
    const newEndYear = parseInt(event.target.value);
    setEndYear(newEndYear);
  };

  const EducationDetails = useSelector((state) => state.eduDetail.eduDetails);
  console.log(EducationDetails);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      eduDetails: [
        {
          Type: "",
          University: "",
          Degree: "",
          StartYear: "",
          EndYear: "",
        },
      ],
    },
  });

  const { fields, remove, append } = useFieldArray({
    name: "eduDetails",
    control,
  });

  const onSubmit = (data) => {
    const FormData = data.eduDetails;
    dispatch(educationDetailsAction(FormData));
    Navigate("/details-filling-page/work-experience");
  };

  const inputStyle = {
    width: "300px",
    m: 1,
    backgroundColor: mode === "light" ? "white" : "#072340",
    borderRadius: "10px",
    "& .MuiInputBase-input": {
      color: mode === "light" ? "black" : "white",
    },
    "& label": {
      color: mode === "light" ? "grey" : "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: mode === "light" ? "grey" : "white",
      },
    },
  };

  return (
    <div>
      <>
        <Box
          container
          component="form"
          sx={{
            width: "80%",
            height: "auto",
            m: 3,
            p: 3,
            boxShadow: "0 0 400px 1px",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h5" sx={{ mb: "40px", mt: "20px" }}>
            Education
          </Typography>
          <Divider
            sx={{
              backgroundColor: mode === "dark" && "rgb(151, 149, 149)",
              ml: "40px",
              mb: "30px",
              width: "88%",
            }}
          />

          {fields.map((fields, index) => {
            return (
              <div key={fields.id}>
                <Typography
                  sx={{
                    color: "grey",
                    fontWeight: "bold",
                    marginRight: "85%",
                    marginTop: "40px",
                  }}
                >
                  Details\ - {index + 1}
                </Typography>
                <TextField
                  sx={inputStyle}
                  label="Type "
                  type="text"
                  variant="outlined"
                  {...register(`eduDetails[${index}].Type`, {
                    required: "This Field is required!",
                  })}
                />
                {errors.Type && (
                  <p style={{ color: "red" }}>{errors.Type.message}</p>
                )}

                <TextField
                  sx={inputStyle}
                  label="University "
                  type="text"
                  variant="outlined"
                  {...register(`eduDetails[${index}].University`, {
                    required: "This Field is required!",
                  })}
                />
                {errors.University && (
                  <p style={{ color: "red" }}>{errors.University.message}</p>
                )}
                <TextField
                  sx={inputStyle}
                  label="Degree"
                  type="text"
                  variant="outlined"
                  {...register(`eduDetails[${index}].Degree`, {
                    required: "This Field is required!",
                  })}
                />
                {errors.Degree && (
                  <p style={{ color: "red" }}>{errors.Degree.message}</p>
                )}
                <TextField
                  sx={inputStyle}
                  label="StartYear"
                  type="number"
                  variant="outlined"
                  {...register(`eduDetails[${index}].StartYear`, {
                    required: "This Field is required!",
                  })}
                  onChange={handleStartYearChange}
                  select
                  SelectProps={{ native: true }}
                >
                  {Array.from(
                    { length: currentYear - 1900 + 1 },
                    (_, index) => (
                      <option
                      style={{ color: mode === "light" ? "black" : "black" }}
                       key={index} value={currentYear - index}>
                        {currentYear - index}
                      </option>
                    )
                  )}
                </TextField>

                {errors.StartYear && (
                  <p style={{ color: "red" }}>{errors.StartYear.message}</p>
                )}
                <TextField
                  sx={inputStyle}
                  label="EndYear"
                  type="number"
                  variant="outlined"
                  {...register(`eduDetails[${index}].EndYear`, {
                    required: "This Field is required",
                  })}
                  onChange={handleEndYearChange}
                  select
                  SelectProps={{ native: true }}
                >
                  {Array.from(
                    { length: currentYear - startYear + 1 },
                    (_, index) => (
                      <option
                      style={{ color: mode === "light" ? "black" : "black" }}
                       key={index} value={startYear + index}>
                        {startYear + index}
                      </option>
                    )
                  )}
                </TextField>

                {errors.EndYear && (
                  <p style={{ color: "red" }}>{errors.EndYear.message}</p>
                )}
                {index > 0 && (
                  <Button
                    sx={{ margin: "20px 0px 30px 0px" }}
                    color="error"
                    variant="outlined"
                    endIcon={<DeleteIcon />}
                    onClick={() => remove(index)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            );
          })}
          <Box sx={{ width: "100%", mt: "10px", mb: "30px" }}>
            <Button
              onClick={() =>
                append({
                  Type: "",
                  University: "",
                  Degree: "",
                  StartYear: "",
                  EndYear: "",
                })
              }
              variant="text"
              sx={{ fontWeight: "bold" }}
            >
              Add more
            </Button>
          </Box>
          <Divider
            sx={{
              backgroundColor: mode === "dark" && "rgb(151, 149, 149)",
              ml: "40px",
              mb: "30px",
              width: "88%",
            }}
          />
          <Button
            onClick={() => Navigate("/details-filling-page/personal-details")}
            variant="contained"
            sx={{
              backgroundColor: "black",
              mt: "10px",
              fontWeight: "bold",
              mr: "10px",
            }}
          >
            Back
          </Button>
          <Button
            disabled={!isDirty || !isValid}
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            sx={{ backgroundColor: "black", mt: "10px", fontWeight: "bold" }}
          >
            Next
          </Button>
        </Box>
      </>
    </div>
  );
};

export default Education;
