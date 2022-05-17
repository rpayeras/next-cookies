import NextLink from "next/link";
import { AppBar, IconButton, Toolbar, Typography, Link } from "@mui/material";

import { MenuOutlined } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlined />
        </IconButton>
        <NextLink href="/" passHref>
          <Link>
            <Typography variant="h6">CookieMaster</Typography>
          </Link>
        </NextLink>
        <div className="" style={{ flex: 1 }}></div>
        <NextLink href="/theme-changer" passHref>
          <Link>
            <Typography variant="h6">Change Theme</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
