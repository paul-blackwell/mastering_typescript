import React, { useRef } from 'react';

interface ShoppingListFormProps {
  onAddItem: (item: string) => void;
}

export default function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newProduct = inputRef.current?.value;
    if (newProduct) onAddItem(newProduct);
     inputRef.current!.value = '';
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Product Name" ref={inputRef} />
      <button type="submit">Add Item</button>
    </form>
  );
}
