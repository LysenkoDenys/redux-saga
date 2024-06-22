// import { useSelector, useDispatch } from 'react-redux';
// import { getNews } from './redux/actions/actionCreator';
// import News from './components/News';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const App = ({ children }) => {
  // const latestNews = useSelector((store) => store?.news?.latestNews || []);
  // const popularNews = useSelector((store) => store?.news?.popularNews || []);
  // const { latestNewsError, popularNewsError } = useSelector(
  //   (store) => store?.errors || {}
  // );
  // const dispatch = useDispatch();

  // const handleNews = () => {
  //   dispatch(getNews());
  // };

  return (
    // <div className="container">
    //   <button onClick={handleNews}>Get news</button>
    //   <News news={latestNews} error={latestNewsError} title="Latest News" />
    //   <News news={popularNews} error={popularNewsError} title="Popular News" />
    // </div>
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default App;
