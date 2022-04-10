import Navbar from "../components/Navbar";
import Content from "../components/Content";
import { init } from '@noriginmedia/norigin-spatial-navigation';

init({
  debug: false,
  visualDebug: false
});

const Home = () => {
  return (
    <>
      <div className="app-container">
        <Navbar focusKey="MENU" />
        <Content />
      </div>
    </>
  );
}

export default Home;