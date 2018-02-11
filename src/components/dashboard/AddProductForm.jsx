import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const categories = [
  { key: 'dress', text: 'Dress', value: 'dress' },
]

const dress = [
  { key: 'mini_dress', text: 'Mini Dress', value: 'mini_dress' },
  { key: 'midi_dress', text: 'Midi Dress', value: 'midi_dress' },
  { key: 'maxi_dress', text: 'Maxi Dress', value: 'maxi_dress' },
]

const AddProductForm = () =>
(
  <Form>
    <Form.Field>
      <label>Name</label>
      <input/>
    </Form.Field>
    <Form.Field>
      <label>Price</label>
      <input/>
    </Form.Field>
    <Form.Select label='Category' options={categories} placeholder='Dress'/>
    <Form.Select label='Sub Category' options={dress} placeholder='Mini Dress'/>
    <Button primary>SUBMIT</Button>
  </Form>
)

export default AddProductForm
