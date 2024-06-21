import { useSelector, useDispatch } from 'react-redux';
import { getNews } from './redux/actions/actionCreator';
import News from './components/News';

const App = () => {
  const latestNews = useSelector((store) => store?.news?.latestNews || []);
  const popularNews = useSelector((store) => store?.news?.popularNews || []);
  const dispatch = useDispatch();

  const handleNews = () => {
    dispatch(getNews());
  };

  return (
    <div className="">
      <button onClick={handleNews}>Get news</button>
      <News news={latestNews} title="Latest News" />
      <News news={popularNews} title="Popular News" />
    </div>
  );
};

export default App;
