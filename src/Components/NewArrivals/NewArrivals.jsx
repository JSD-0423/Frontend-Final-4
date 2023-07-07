import React from "react";
import { NewArrivalBox, HeadingBox, CardsBox } from "./NewArrivalsStyle";
import { Typography } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import Button from "@mui/material/Button";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

function NewArrivals() {
  return (
    <NewArrivalBox>
      <HeadingBox>
        <Typography variant="h5" color="text.secondary">
          New Arrival
        </Typography>
        <Button variant="text" endIcon={<ArrowForwardIosRoundedIcon />}>
          View All
        </Button>
      </HeadingBox>
      <CardsBox>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CardsBox>
    </NewArrivalBox>
  );
}

export default NewArrivals;
