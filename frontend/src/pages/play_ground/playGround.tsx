/* eslint-disable @typescript-eslint/no-explicit-any */
import valueOneDice from "../../assets/images/dice-six-faces-one.png";
import valueTwoDice from "../../assets/images/dice-six-faces-two (1).png";
import valueThreeDice from "../../assets/images/dice-six-faces-three.png";
import valueFourDice from "../../assets/images/dice-six-faces-four.png";
import valueFiveDice from "../../assets/images/dice-six-faces-five.png";
import valueSixDice from "../../assets/images/dice-six-faces-six.png";
import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { CustomDiceButton, DiceContainer, SingleDiceBox } from "./style";
import TotalCoin from "../../components/totalCoin";
import { checkResult } from "../../axios/Axios";
import { useSelector } from "react-redux";

const PlayGround = () => {
  const [diceOne, setDiceOne] = useState<number>(0);
  const [diceTwo, setDiceTwo] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false)
  const diceImages = [
    valueOneDice,
    valueTwoDice,
    valueThreeDice,
    valueFourDice,
    valueFiveDice,
    valueSixDice,
  ];
  const totalPoints = useSelector((state: any) => state.totalPoints.points)
  const selectedBetPoint = useSelector((state: any) => state.gameInfo.betAmount)
  const selectedBetType = useSelector((state: any) => state.gameInfo.betType)

  const findIndex = async () => {
    try {
      const response = await checkResult(totalPoints, selectedBetPoint, selectedBetType, setDiceOne, setDiceTwo, setLoading)
      console.log(response);
    
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <Container>
      <Box sx={{ marginTop: '30px', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between' }}>
        <Typography variant='h4'>7Up 7Down</Typography>
        <TotalCoin />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <DiceContainer>
          <SingleDiceBox>
            <img src={diceImages[diceOne]} alt="" width="70%" />
          </SingleDiceBox>
          <SingleDiceBox>
            <img src={diceImages[diceTwo]} alt="" width="70%" />
          </SingleDiceBox>
        </DiceContainer>
        <CustomDiceButton onClick={findIndex}>Let's Start</CustomDiceButton>
      </Box>
    </Container>
  );
};

export default PlayGround;
