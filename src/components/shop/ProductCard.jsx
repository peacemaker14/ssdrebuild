import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const ProductCard = ({name="", price=0, loves=0}) =>
(
  <Card>
    <Image src='#'/>
    <Card.Content>
      <Card.Description>
        {product.name}<hr/>{product.loves}
      </Card.Description>
      <Card.Header>
        {product.price}
      </Card.Header>
    </Card.Content>
    <Card.Content extra>
      <div>
        <Button basic color='pink'>Loves</Button>
        <Button basic color='green'>Buy</Button>
      </div>
    </Card.Content>
  </Card>
)

export default ProductCard
