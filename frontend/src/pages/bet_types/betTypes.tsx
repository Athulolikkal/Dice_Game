import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import TotalCoin from '../../components/totalCoin'
import { useDispatch } from 'react-redux'
import { changeBetType } from '../../redux/gameReducer'



const BetTypes = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const allChallenges = [
        {
            image: "https://play-lh.googleusercontent.com/ycb45SOcSD3xxLGqpJUXzssyhAoRcy9HPUOWGp-5j5Yj484YPutyTl9sa0WhB9lLyiE",
            title: '7 DOWN',
            des: 'In order to complete the 7 Down challenge, the sum of two dice must be lower than seven.'
        },
        {
            image: 'https://play-lh.googleusercontent.com/T0vNMZsI74crAegfWvvQH0SyTcAUULdmz1S--dUa6KX97ODOEviy_AeidW5rlQDFZKA',
            title: '7 UP',
            des: 'In order to complete the 7 Up challenge, the sum of two dice must be greater than seven.'
        },
        {
            image: 'https://play-lh.googleusercontent.com/LkeyNC3H3XlPWz4RGS3bXGgnq0El89NiXRphgxjEMrkJceNl1CROIiVNUN2XlxqtFFM',
            title: 'LUCKEY 7',
            des: 'In order to complete the Lucky Seven challenge, the sum of two dice needs to be seven.'
        },

    ]
    return (

        <Container sx={{ height: { lg: '100vh', xl: '100vh' }, }}>
            <Box sx={{ marginTop: '30px', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between' }}>
                <Typography variant='h4'>Pick your challenge!</Typography>
                <TotalCoin />

            </Box>
            <Box sx={{ height: { lg: '80vh', xl: '80vh' }, display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' }, justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px' }}>

                {allChallenges.map((item) => (<Card sx={{ maxWidth: 350, margin: '20px' }} key={item.des} onClick={() => {
                    dispatch(changeBetType(item.title))
                    navigate('/bet_items')
                }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={item.image}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: '500' }}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.des}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>))}
            </Box>
        </Container>
    )
}

export default BetTypes