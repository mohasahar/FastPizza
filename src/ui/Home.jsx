import { useSelector } from 'react-redux';
import CreateUser from './../features/user/CreateUser';
import Button from './Button';
/* We read data from redux store by using the useSelector function*/
function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-12 px-4 text-center text-xl sm:my-16">
      <h1 className="mb-8  text-center font-semibold md:text-3xl ">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
