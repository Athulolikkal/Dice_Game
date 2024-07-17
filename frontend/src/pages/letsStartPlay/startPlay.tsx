import { Container, Typography } from "@mui/material";
import { CustomButton, DiceBox, StartBox } from "./style";
import diceLogo from "../../assets/images/diceIcon.png";
import { useNavigate } from "react-router-dom";
import { getStart } from "../../redux/pointReducer";
import { useDispatch } from "react-redux";
import { motion } from 'framer-motion';

const MotionDiceBox = motion(DiceBox)
const MotionTitleText = motion(Typography)
const MotionCustomButton = motion(CustomButton)
const StartPlay = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  return (
    <Container sx={{ height: "100vh", alignContent: "center" }}>
      <StartBox>
        <MotionDiceBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <img src={diceLogo} alt="Dice Logo" width="100%" />
        </MotionDiceBox>
        <DiceBox>
          <MotionTitleText
            variant="h3"
            fontWeight="bold"
            marginBottom="20px"
            sx={{ textAlign: "center" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Hey! let's play 7Up 7Down
          </MotionTitleText>
          <MotionCustomButton onClickCapture={() => {
            dispatch(getStart())
            navigate("/challenges")
          }}>
            Get Started!
          </MotionCustomButton>
        </DiceBox>
      </StartBox>
    </Container>
  );
};

export default StartPlay;
