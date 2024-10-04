import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make it Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
export async function action({ params }) {
  //the 'request' is intuitivly exists from the createorer component
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
