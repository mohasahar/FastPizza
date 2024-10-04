import { useSelector } from 'react-redux';

function Username() {
  //getting state from redux inside react component using useSelectorhook
  const username = useSelector((state) => state.user.username); //pass in a selector function to get as a parameter the entire state to select what we want

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
