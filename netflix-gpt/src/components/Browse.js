import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import Search from './Search';

const Browse = () => {

  const toggleSearch = useSelector(store => store.search.toggleSearch);
  console.log(toggleSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
      <div>
        <Header></Header>
        {
          toggleSearch &&
            <Search></Search>
        }{
          !toggleSearch && 
          <>
          <MainContainer></MainContainer>
        <SecondaryContainer></SecondaryContainer>
          </>

        }
      </div>
  )
}

export default Browse
