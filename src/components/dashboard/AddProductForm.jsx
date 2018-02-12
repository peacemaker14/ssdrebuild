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

const AddProductForm = ({ addNewProduct=f=>f, onChange=f=>f, onFormSelect=f=>f, formState={} }) =>
(
  <Form>
    <Form.Field>
      <label>Name</label>
      <input name='name' value={formState.name} onChange={onChange} />
    </Form.Field>

    <Form.Field>
      <label>Price</label>
      <input name='price' value={formState.price} onChange={onChange} />
    </Form.Field>

    <Form.Select
      label='Category'
      options={categories}
      placeholder='Dress'
      onChange={(e, {value}) => onFormSelect('category', value)} />

    <Form.Select
      label='Sub Category'
      options={dress}
      placeholder='Mini Dress'
      onChange={(e, {value}) => onFormSelect('subCategory', value)} />

    <Button
      type='submit'
      onClick={addNewProduct}>
      SUBMIT
    </Button>
  </Form>
)

export default AddProductForm
