import {it,expect,describe,vi} from 'vitest';
import {render,screen} from '@testing-library/react';
//screen gives us access to the fake page
//the render above runs a component in a fake web page from testing
import { Product } from './Product';

describe('Product component',() => {
  it('displays  the product details correctly',()=>{
    const product= {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090,
    keywords: ["socks", "sports", "apparel"]
  };
  const loadCart=vi.fn();
  //vi.fn creates a fake function that is not working and this is called a mock
    render(<Product product={product} loadCart={loadCart}/>);

    expect(
    screen.getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
  ).toBeInTheDocument();

  expect(
    screen.getByText('$10.90')
  ).toBeInTheDocument();

  expect(
    screen.getByTestId('product-image')
  ).toHaveAttribute('src','images/products/athletic-cotton-socks-6-pairs.jpg');

  expect(
    screen.getByTestId('product-rating-stars-image')
  ).toHaveAttribute('src',`images/ratings/rating-${product.rating.stars * 10}.png`);

   expect(
    screen.getByText('87')
   ).toBeInTheDocument();
  });
});