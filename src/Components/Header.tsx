import { useState } from "react";
import {
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../../public/images/logo.svg";

const navItems = ["Home", "New", "Popular", "Trending", "Categories"];

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prev) => !prev);
    };

    return (
        <Box component="header" sx={{ p: 0 }}>
            <Toolbar
                disableGutters
                component="nav"
                aria-label="Main navigation"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    py: 2.5,
                }}
            >
                <Box component="figure" sx={{ m: 0 }}>
                    <Box
                        component="img"
                        src={Logo}
                        alt="News homepage logo"
                    />
                </Box>

                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        gap: { xl: 3, md: 2 },
                    }}
                >
                    {navItems.map((item) => (
                        <Button
                            key={item}
                            variant="text"
                            aria-label={item}
                            sx={{
                                textTransform: "none",
                                fontSize: 16.5,
                                color: "#a0a0a0",
                                ":hover": {
                                    color: "hsl(35, 77%, 62%)",
                                    backgroundColor: "transparent",
                                },
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>

                <IconButton
                    onClick={handleDrawerToggle}
                    aria-label="Open menu"
                    aria-expanded={mobileOpen}
                    sx={{
                        display: { xs: "flex", md: "none" },
                    }}
                >
                    <MenuIcon
                        fontSize={"large"}
                        sx={{ color: "hsl(240, 100%, 5%)" }}
                    />
                </IconButton>
            </Toolbar>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
            >
                <Box
                    sx={{
                        width: 260,
                        p: 2,
                    }}
                    role="presentation"
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            mb: 4,
                        }}
                    >
                        <IconButton
                            onClick={handleDrawerToggle}
                            aria-label="Close menu"
                        >
                            <CloseIcon
                                fontSize={"large"}
                                sx={{ color: "hsl(240, 100%, 5%)" }}
                            />
                        </IconButton>
                    </Box>

                    <List aria-label="Mobile navigation">
                        {navItems.map((item) => (
                            <ListItem key={item} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}

export default Header;