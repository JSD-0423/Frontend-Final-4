import React from 'react';
import NewArrivals from '../../shared/components/NewArrivals/NewArrivals';
import { CustomCarousel } from '../../shared';

function HomePage() {
  return (
    <div>
      <CustomCarousel />
      <NewArrivals />
    </div>
  );
}

export default HomePage;
