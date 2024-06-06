import { Box, Typography } from "@mui/material"
import coinImg from '../assets/images/coin_icon.png'

const TotalCoin = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
                variant='h4'
                sx={{
                    fontWeight: '700',
                    background: 'linear-gradient(264deg, rgba(222,222,56,1) 21%, rgba(239,239,100,1) 30%, rgba(204,197,69,1) 57%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '1px 1px  3px rgba(0, 0, 0, 0.3)'
                }}
            >5000
            </Typography>
            <img src={coinImg} alt='' width='50px' />
        </Box>
    )
}

export default TotalCoin