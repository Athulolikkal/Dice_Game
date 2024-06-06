import { Box, Button, Card, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import levelOne from '../../assets/images/level_one.png'
import levelTwo from '../../assets/images/level_two.png'
import levelThree from '../../assets/images/level_three.png'
import { useNavigate } from 'react-router-dom'
import TotalCoin from '../../components/totalCoin'
import coinImg from '../../assets/images/coin_icon.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeBetPoint } from '../../redux/gameReducer'

const BetItemList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const [selectedPoint, setSelectedPoint] = useState<number | null>()
  const betDetails = [
    {
      amount: 100,
      image: levelOne,
      color: '#ab1fa9'
    },
    {
      amount: 200,
      image: levelTwo,
      color: '#186aad'
    },
    {
      amount: 500,
      image: levelThree,
      color: 'green'
    },
  ]
  const handleClose = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <Container sx={{ height: { lg: '100vh', xl: '100vh' }, }}>
        <Box sx={{ marginTop: '30px', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between' }}>
          <Typography variant='h4'>Set the points!</Typography>
          <TotalCoin />
        </Box>
        <Box sx={{ height: { lg: '80vh', xl: '80vh' }, display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' }, justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px' }}>
          {betDetails.map((bet) => (<Card sx={{ display: 'flex', maxWidth: '350px', margin: '10px', cursor: 'pointer', }} onClick={() => {
            setSelectedPoint(bet.amount);
            setDialogOpen(true)
          }} >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Ready To Challenge!
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ marginBottom: '10px' }}>
                  Challenge Ahead
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <img src={coinImg} alt='' width='50px' />
                  <Typography component="div" variant="h4" sx={{ fontWeight: 'bold', color: bet.color }}>
                    {bet.amount}
                  </Typography>
                </Box>

              </CardContent>

            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={bet.image}
              alt="level one"
            />
          </Card>))}
        </Box>
      </Container>

      {/* alert dialog  */}
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        style={{ minWidth: '350px' }}
      >
        <DialogTitle  >
          Are you sure?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to play for {selectedPoint} points
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={() => {
            if (selectedPoint !== null) {
              dispatch(changeBetPoint(selectedPoint));
            }

            navigate('/play_area')
          }
          }>Start</Button>
        </DialogActions>
      </Dialog>
    </>

  )
}

export default BetItemList