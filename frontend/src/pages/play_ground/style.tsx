import { Box, Button, styled } from "@mui/material";

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
  borderRadius: "25px",
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
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(0, "auto", 3, "auto,"),
    width: "90%",
  },
}));
