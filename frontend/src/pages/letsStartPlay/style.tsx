import { Box, styled, Button } from "@mui/material";

export const StartBox = styled(Box)(({ theme }) => ({
  display: "flex",
  cursor: "pointer",
  flexDirection: "row",
  justifyContent: "center",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const DiceBox = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "black",
  color: "white",
  fontWeight: "700",
  fontSize: "20px",
  cursor: "pointer",
  padding: "0.5rem 1.25rem",
  borderRadius: "7px",
  textTransform: "none",
  display: "block",
  border: "2px solid transparent",
  width: "100%",
  borderColor: "black",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
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
