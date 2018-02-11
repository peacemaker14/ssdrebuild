import React from 'react'
import { Grid }
import ProductCard from './ProductCard'

const ProductList = (products=[]) =>
(
  <div>
    <Grid>
      <Grid.Column style={{ maxwidth: 450 }}>
        {
          products.map(product => (
            <ProductCard
              name={product.name}
              price={product.price}
              loves={product.loves}
            />
          ))
        }
      </Grid.Column>
    </Grid>
  </div>
)
