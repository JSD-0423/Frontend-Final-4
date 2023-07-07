import { styled } from "@mui/material/styles";
export const NewArrivalBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // width: "1256px",
  height: "475.00018310546875px",
  top: "622px",
  left: " 20px",
  borderRadius: "8px",
  background: "green",
}));

export const HeadingBox = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
}));

export const CardsBox = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "40px",
}));
