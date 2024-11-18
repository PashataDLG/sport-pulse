import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Box, IconButton } from "@mui/material";

const Footer: React.FC = (): JSX.Element => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#242424',
            width: '100%',
            height: '30%',
        }}>
            <Box sx={{ display: 'flex', gap: '15px', margin: '10px 0px 15px 0px', justifyContent: 'center' }}>
                <IconButton href="https://www.facebook.com" target="_blank" sx={{ color: '#00A4CC' }}>
                    <FaFacebook size={24} />
                </IconButton>
                <IconButton href="https://www.twitter.com" target="_blank" sx={{ color: '#00A4CC' }}>
                    <RiTwitterXLine size={24} />
                </IconButton>
                <IconButton href="https://www.instagram.com" target="_blank" sx={{ color: '#00A4CC' }}>
                    <AiFillInstagram size={24} />
                </IconButton>
                <IconButton href="https://www.tiktok.com" target="_blank" sx={{ color: '#00A4CC' }}>
                    <FaTiktok size={24} />
                </IconButton>
                <IconButton href="https://www.youtube.com" target="_blank" sx={{ color: '#00A4CC' }}>
                    <FaYoutube size={24} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;