import { Box, FormControl, InputLabel, InputAdornment, IconButton, OutlinedInput, Grid, Container, Paper, Typography, Button } from "@mui/material";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AccountCircle } from "@mui/icons-material";
import { UserService } from "../../services/api/auth.service";

interface ComponentProps {
    onLoginOk: (user: string) => void;
}


const SignIn: FC<ComponentProps> = ({ onLoginOk }) => {

    const userService = new UserService();

    interface SignInFormData {
        user: string;
        password: string;
    }

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState<SignInFormData>({
        user: "",
        password: ""
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        userService.setUser(formData.user);
        onLoginOk(formData.user);
        console.log(formData);
        setFormData({
            user: "",
            password: ""
        });
    };


    return (
        <Container maxWidth="xs" className="box-shadow-s">

            <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "90vh" }}>
                <Grid item>
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em", textAlign: "center" }} >
                        <Typography variant="h5">Sign In</Typography>
                        <Box component="form">
                            <FormControl variant="outlined" fullWidth sx={{ mt: "1em" }}>
                                <InputLabel htmlFor="outlined-adornment-password">User Name</InputLabel>
                                <OutlinedInput
                                    onChange={handleChange}
                                    required
                                    name="user"
                                    value={formData.user}
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
                                    onChange={handleChange}
                                    name="password"
                                    value={formData.password}
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

                            <Button type="submit" variant="contained" fullWidth sx={{ mt: "1em", height: "3em" }} onClick={handleSubmit} >Submit</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid >

        </Container >

    );
};

export default SignIn;