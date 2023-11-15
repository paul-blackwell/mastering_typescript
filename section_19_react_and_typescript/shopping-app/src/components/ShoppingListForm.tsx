import React, { useRef } from 'react';

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

export default function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newProduct = productInputRef.current?.value;
    const quantity = quantityInputRef.current?.value;
    if (newProduct && quantity) onAddItem(newProduct, parseInt(quantity));
    productInputRef.current!.value = '';
    quantityInputRef.current!.value = '';
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Product Name" ref={productInputRef} required />
      <input type="number" min={0} ref={quantityInputRef} required />
      <button type="submit">Add Item</button>
    </form>
  );
}
