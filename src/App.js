import { useSelector, useDispatch } from 'react-redux';
import {
  increaseCount,
  decreaseCount,
  getLatestNews,
} from './redux/actions/actionCreator';

const App = () => {
  const count = useSelector((store) => store?.counter?.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseCount());
  };

  const handleDecrease = () => {
    dispatch(decreaseCount());
  };

  const handleNews = () => {
    dispatch(getLatestNews());
  };

  return (
    <div className="">
      <h1>{count}</h1>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleNews}>Get news</button>
    </div>
  );
};

export default App;
