import React from "react";
import { Button, Divider, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useFieldArray, useForm } from "react-hook-form";
import DeleteIcon from '@mui/icons-material/Delete';
import { keySkillsAction } from "../../Redux/Index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


// const FormValues = {
//   keySkills:{
//     skills: String
//   }
// }

const KeySkills = () => {

  const dispatch = useDispatch()
  const skillsDetails = useSelector((state)=> state.skills.skillDetails)

  console.log(skillsDetails)

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      keySkills: [{ skills: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "keySkills",
    control,
  });

  const onSubmit = (data) => {
    // console.log(data);
    dispatch(keySkillsAction(data.keySkills))
  };

  return (
    <div>
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
              boxShadow: "0 0 20px 1px",
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h5" sx={{ mb: "40px", mt: "20px" }}>
              Key Skills
            </Typography>

            <Divider sx={{ ml: "40px", mb: "30px", width: "88%" }} />

            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <TextField
                    label="Addskills"
                    type="text"
                    varient="outlined"
                    sx={{
                      width: { md: "400px" },
                      m: 1,
                    }}
                    {...register(`keySkills.${index}.skills`)}
                  />
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
                onClick={() => append({ skills: "" })}
                variant="text"
                sx={{ fontWeight: "bold" }}
              >
                Add new
              </Button>
            </Box>
            <Divider sx={{ ml: "40px", mb: "30px", width: "88%" }} />
            <Button
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
              onClick={handleSubmit(onSubmit)}
              variant="contained"
              sx={{ backgroundColor: "black", mt: "10px", fontWeight: "bold" }}
            >
              Preview
            </Button>
          </Box>
        </>
      </div>
    </div>
  );
};

export default KeySkills;
