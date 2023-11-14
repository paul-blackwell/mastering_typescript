import React from 'react';

export default function ShoppingListForm(): JSX.Element {

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Submitted')
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Product Name" />
      <button type='submit'>Add Item</button>
    </form>
  );
}
