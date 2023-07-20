import ProductCard from '../ProductCard/ProductCard';
import Carousel from 'better-react-carousel';
import { Box } from '@mui/material';

const carouselItems = [
  {
    id: 1,
    name: 'Grande',
    title: 'Blossom Pouch ',
    content: 'Content of slide 1',
    price: '$39.49'
  },
  {
    id: 2,
    name: 'Grande',
    title: 'Blossom Pouch',
    content: 'Content of slide 1',
    price: '$39.49'
  },
  {
    id: 3,
    name: 'Grande',
    title: 'Blossom Pouch',
    content: 'Content of slide 1',
    price: '$39.49'
  },
  {
    id: 4,
    name: 'Grande',
    title: 'Blossom Pouch',
    content: 'Content of slide 1',
    price: '$39.49'
  },
  {
    id: 5,
    name: 'Grande',
    title: 'Blossom Pouch',
    content: 'Content of slide 2',
    price: '$39.49'
  },
  {
    id: 6,
    name: 'Grande',
    title: 'Blossom Pouch',
    content: 'Content of slide 2',
    price: '$39.49'
  },
  {
    id: 7,
    name: 'Grande',
    title: 'Blossom Pouch',
    content: 'Content of slide 2',
    price: '$39.49'
  },
  {
    id: 8,
    name: 'Grande',
    title: 'Blossom Pouch',
    content: 'Content of slide 2',
    price: '$39.49'
  },
  {
    id: 9,
    name: 'Grande',
    title: 'Blossom Pouch',
    content: 'Content of slide 2',
    price: '$39.49'
  }
];

function MyCarousel() {
  const responsiveLayout = [
    {
      breakpoint: 700,
      cols: 2,
      rows: 1,
      gap: 40,
      loop: true
    },
    {
      breakpoint: 1200,
      cols: 3,
      rows: 1,
      gap: 40,
      loop: true
    },
    {
      breakpoint: 1500,
      cols: 4,
      rows: 1,
      gap: 40,
      loop: true
    },
    {
      breakpoint: 1900,
      cols: 5,
      rows: 1,
      gap: 40,
      loop: true
    }
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Carousel
      // cols={4}
      // rows={1}
      // mobileBreakpoint={500}
      // // responsiveLayout={responsiveLayout}
      // hideArrow={true}
      // autoplay={3500}
      // loop={true}
      >
        {carouselItems.map((item) => {
          return (
            <Carousel.Item id={'carosel-item'}>
              <ProductCard
                productId={item.id}
                productName={item.name}
                productPrice={item.price}
                productSpecifications={item.title}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Box>
  );
}

export default MyCarousel;
