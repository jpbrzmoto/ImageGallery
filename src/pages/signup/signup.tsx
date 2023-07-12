import { Box, FormControl, InputLabel, InputAdornment, IconButton, OutlinedInput, Grid, Container, Paper, Typography, Button, Divider } from "@mui/material";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AccountCircle, AlternateEmail, Margin } from "@mui/icons-material";
import { SubmitHandler, useForm } from "react-hook-form";

type SignUpFormData = {
    name: string;
    lastname: string;
    email: string;
    user: string;
    password: string;
}
const SignUp: FC = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { register, handleSubmit } = useForm<SignUpFormData>();

    const onSubmit: SubmitHandler<SignUpFormData> = (data: any) => {

        const hasUsersInLocalStorage = localStorage.getItem("Users") !== null;
        if (!hasUsersInLocalStorage) {
            //let users: SignUpFormData[] = [];
            //localStorage.setItem("Users", users);
        }

        console.log(data);
    };
    return (

        <Container maxWidth="xs" className="box-shadow-s">

            <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "90vh" }}>
                <Grid item>
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em", textAlign: "center" }} >
                        <Typography variant="h5">Sign Up</Typography>
                        <Box component="form" onSubmit={handleSubmit(onSubmit)}>

                            <FormControl variant="outlined" fullWidth sx={{ mt: "1em" }}>
                                <InputLabel htmlFor="outlined-adornment-password">Name</InputLabel>
                                <OutlinedInput
                                    required
                                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                                    {...register("name")}
                                    type={'text'}
                                    label="Name"
                                />
                            </FormControl>

                            <FormControl variant="outlined" fullWidth sx={{ mt: "1em" }}>
                                <InputLabel htmlFor="outlined-adornment-password">Last Name</InputLabel>
                                <OutlinedInput
                                    required
                                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                                    {...register("lastname")}
                                    type={'text'}

                                    label="Last Name"
                                />
                            </FormControl>

                            <FormControl variant="outlined" fullWidth sx={{ mt: "1em" }}>
                                <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                                <OutlinedInput
                                    required
                                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                                    {...register("email")}
                                    type={'email'}

                                    label="Email"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton edge="end" >
                                                <AlternateEmail sx={{ color: 'action.active', mr: 0, my: 0.5 }} />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                            <Divider sx={{ m: "1em" }}></Divider>
                            <FormControl variant="outlined" fullWidth >
                                <InputLabel htmlFor="outlined-adornment-password">User Name</InputLabel>
                                <OutlinedInput
                                    required
                                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                                    {...register("user")}
                                    type={'text'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton edge="end" >
                                                <AccountCircle sx={{ color: 'action.active', mr: 0, my: 0.5 }} />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="User Name"
                                />
                            </FormControl>

                            <FormControl variant="outlined" fullWidth sx={{ mt: "1em" }}>
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                                    {...register("password")}
                                    type={'password'}
                                    required
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>

                            <Button type="submit" variant="contained" fullWidth sx={{ mt: "1em", height: "3em" }} >Save</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid >

        </Container >

    );
};

export default SignUp;