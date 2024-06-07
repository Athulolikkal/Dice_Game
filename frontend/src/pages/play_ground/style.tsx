import { Box, Button, styled,keyframes} from "@mui/material";


const roll = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(90deg); }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
`;

export const RollingDice = styled("img", {
  shouldForwardProp: (prop) => prop !== "loading",
})<{ loading: boolean }>(({ loading }) => ({
  width: "70%",
  animation: loading ? `${roll} 1s infinite` : "none",
}));

export const DiceContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  cursor: "pointer",
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export const SingleDiceBox = styled(Box)(({ theme }) => ({
  width: "40%",
  alignContent: "center",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    alignContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}));

export const CustomDiceButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  fontWeight: "700",
  fontSize: "20px",
  cursor: "pointer",
  padding: "0.5rem 1.25rem",
  borderRadius: "15px",
  textTransform: "none",
  display: "block",
  border: "2px solid transparent",
  width: "50%",
  borderColor: "black",
  margin: "3rem",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
    borderColor: "black",
  },
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(0, "auto", 3, "auto,"),
    width: "80%",
  },
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(0, "auto", 3, "auto,"),
    width: "90%",
  },
}));
