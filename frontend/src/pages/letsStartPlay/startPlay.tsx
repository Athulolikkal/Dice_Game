import { Container, Typography } from "@mui/material";
import { CustomButton, DiceBox, StartBox } from "./style";
import diceLogo from "../../assets/images/diceIcon.png";
import { useNavigate } from "react-router-dom";
import { getStart } from "../../redux/pointReducer";
import {  useDispatch } from "react-redux";

const StartPlay = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <Container sx={{ height: "100vh", alignContent: "center" }}>
      <StartBox>
        <DiceBox>
          <img src={diceLogo} alt="Dice Logo" width="100%" />
        </DiceBox>
        <DiceBox>
          <Typography
            variant="h3"
            fontWeight="bold"
            marginBottom="20px"
            sx={{ textAlign: "center" }}
          >
            Hey! let's play 7Up 7Down
          </Typography>
          <CustomButton onClickCapture={ () => {
            dispatch(getStart())
            navigate("/challenges")
          }}>
            Get Started!
          </CustomButton>
        </DiceBox>
      </StartBox>
    </Container>
  );
};

export default StartPlay;
