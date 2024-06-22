import { useSelector, useDispatch } from 'react-redux';
import { getNews } from './redux/actions/actionCreator';
import News from './components/News';

const App = () => {
  const latestNews = useSelector((store) => store?.news?.latestNews || []);
  const popularNews = useSelector((store) => store?.news?.popularNews || []);
  const { latestNewsError, popularNewsError } = useSelector(
    (store) => store?.errors || {}
  );
  const dispatch = useDispatch();

  const handleNews = () => {
    dispatch(getNews());
  };

  return (
    <div className="">
      <button onClick={handleNews}>Get news</button>
      <News news={latestNews} error={latestNewsError} title="Latest News" />
      <News news={popularNews} error={popularNewsError} title="Popular News" />
    </div>
  );
};

export default App;
