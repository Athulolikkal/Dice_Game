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
import { useSelector, useDispatch } from "react-redux";
import { changePoints } from "../../redux/pointReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PlayGround = () => {
  const [diceOne, setDiceOne] = useState<number>(0);
  const [diceTwo, setDiceTwo] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const diceImages = [
    valueOneDice,
    valueTwoDice,
    valueThreeDice,
    valueFourDice,
    valueFiveDice,
    valueSixDice,
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let totalPoints = useSelector((state: any) => state.totalPoints.points);
  const selectedBetPoint = useSelector(
    (state: any) => state.gameInfo.betAmount
  );
  const selectedBetType = useSelector((state: any) => state.gameInfo.betType);

  //for checking bet
  const findIndex = async () => {
    try {
      const response: any = await checkResult(
        totalPoints,
        selectedBetPoint,
        selectedBetType,
        setDiceOne,
        setDiceTwo,
        setLoading
      );
      console.log(response);
      //if no errors
      if (response.status) {
        totalPoints = response.totalPoint;
        dispatch(changePoints(totalPoints));
        if (response.isBet) {
          await Swal.fire({
            title: "Congratulations",
            text: `You Won the ${selectedBetType} challenge, ${response.addedPoint} Points Added to your points `,
            imageUrl:
              "https://www.freeiconspng.com/uploads/congratulations-icon-33.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
            showCancelButton: true,
            confirmButtonText: "Play Again",
            cancelButtonText: "Quit",
          }).then((result) => {
            if (result.dismiss) {
              navigate("/challenges");
            }
          });
        } else {
          await Swal.fire({
            title: "Bad Luck",
            text: `You loss the ${selectedBetType} challenge, ${response.minPoint} Points dedected `,
            imageUrl:
              "https://static.vecteezy.com/system/resources/previews/018/885/244/non_2x/black-star-badge-you-lose-game-award-icon-for-2d-png.png",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
            showCancelButton: true,
            confirmButtonText: "Play Again",
            cancelButtonText: "Quit The Challenge",
          }).then((result) => {
            if (result.dismiss) {
              navigate("/challenges");
            }
          });
        }
      } else {
        console.log("something went wrong");
        await Swal.fire("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Box
        sx={{
          marginTop: "30px",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">7Up 7Down</Typography>
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
        <CustomDiceButton onClick={!loading ? findIndex : () => ""}>
          {loading ? "Game On Progress..." : " Let's Start"}
        </CustomDiceButton>
      </Box>
    </Container>
  );
};

export default PlayGround;
