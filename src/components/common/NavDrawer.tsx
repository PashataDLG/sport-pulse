import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useAppContext } from "../../context/appContext";

const NavDrawer = () => {
    const { isDrawerOpen, handleDrawerToggle } = useAppContext();
    return (
        <Drawer
            anchor="top"
            open={isDrawerOpen}
            onClose={(event, reason) => handleDrawerToggle(event as React.MouseEvent | React.KeyboardEvent, reason)}
        >
            <Box sx={{ textAlign: 'center' }}>
                <List>
                    {['Home', 'Events', 'Live Scores'].map((text, index) => (
                        <ListItem
                            key={text}
                            sx={{
                                '& .MuiListItemText-primary': {
                                    fontFamily: 'Montserrat',
                                    fontWeight: 'bolder',
                                    fontSize: '1.3rem',
                                    '&:hover': {
                                        backgroundColor: '#007BAC',
                                        color: '#fff',
                                    },
                                }
                            }}
                        >
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default NavDrawer;