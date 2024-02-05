import { About, Hero, Specials} from './components';
import { Main } from '../../components';
import specials from '../../settings/cms/specials.json';

export const Home = () => {
  return (
    <Main>
      <Hero />
      <Specials data={specials} itemWidth="300px" />
      <About />
    </Main>
  );
};
