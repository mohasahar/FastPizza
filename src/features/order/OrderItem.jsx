import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li classame="py-3 space-y-1">
      <div classame="flex items-center justify-between gap-4 text-sm">
        <p>
          <span classame="font-bold">{quantity}&times;</span> {name}
        </p>
        <p classame="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {' '}
        {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
