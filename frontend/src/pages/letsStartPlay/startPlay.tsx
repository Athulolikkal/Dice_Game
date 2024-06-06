import { Container, Typography } from "@mui/material";
import { CustomButton, DiceBox, StartBox } from "./style";
import diceLogo from "../../assets/images/diceIcon.png";
import { useNavigate } from "react-router-dom";
const StartPlay = () => {
  const navigate = useNavigate();
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
          <CustomButton onClickCapture={() => navigate("/challenges")}>
            Get Started!
          </CustomButton>
        </DiceBox>
      </StartBox>
    </Container>
  );
};

export default StartPlay;
