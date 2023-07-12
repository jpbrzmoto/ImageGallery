import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { FC } from 'react';
import { UserService } from "../../services/api/auth.service";
import SignUp from '../../pages/signup/signup';
import Gallery from '../gallery/gallery';
import SignIn from '../../pages/login/signin';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useUser } from '../../context/user.context';
import "./styles.scss";

const userService = new UserService();
const AppPrincipalBar: FC = () => {

    const user = useUser();
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleMenu = (setting: string) => {
        switch (setting.toLowerCase()) {
            case "logout":
                logout();
                break;
            case "2":
                console.log("El valor es 2");
                break;
            case "3":
                console.log("El valor es 3");
                break;
            default:
                console.log("El valor no coincide con ninguno de los casos");
        }
    };
    const logout = (): void => {
        userService.closeSession();
        window.location.href = '/signin';
    }

    const loginOk = (username: string) => {
        //seteo el contexto
        user.setUserContext(username);
        alert("Bienvenido " + username);
        window.location.href = '/gallery';
    }

    return (
        <>
            <BrowserRouter>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Instant
                            </Typography>
                            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href=""
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                LOGO
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                                {!userService.isLogin() && <>
                                    <Link to="/signin">
                                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                            Sign In
                                        </Button>
                                    </Link>
                                    <Link to="/signup">
                                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                            Sign Up
                                        </Button>
                                    </Link>
                                </>
                                }

                                {userService.isLogin() &&
                                    <Link to="/gallery">
                                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                            Gallery
                                        </Button>
                                    </Link>
                                }
                            </Box>

                            {userService.isLogin() &&
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Remy Sharp" src="src\\assets\\image\\avatar.jpg" />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >

                                        <MenuItem>
                                            <Typography textAlign="center"> Bienvenido {user.user}</Typography>
                                        </MenuItem>
                                        <MenuItem onClick={() => handleMenu("logout")}>
                                            <Typography textAlign="center"> Logout</Typography>
                                        </MenuItem>

                                    </Menu>
                                </Box>
                            }
                        </Toolbar>
                    </Container>
                </AppBar>

                <Routes>
                    <Route path="/signin" element={<SignIn onLoginOk={loginOk} />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/" element={<SignIn onLoginOk={loginOk} />} />
                </Routes>

            </BrowserRouter>
        </>
    );
}
export default AppPrincipalBar;