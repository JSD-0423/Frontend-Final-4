import { styled } from "@mui/material/styles";

export const CardsDetailsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const CardsTextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});
export const CardsActionsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});
