import Hero from "./Hero";

import Buttons from "./Buttons";
import Menu from "./Menu";
import Loading from "./Loading";
import useFetch from "./useFetch";

const Home = () => {
  const { data, loading, filtered, setFiltered, activeTag, setActiveTag } =
    useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <Hero />
      <Buttons
        data={data}
        setFiltered={setFiltered}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
      />
      <div>{loading ? <Menu filtered={filtered} /> : <Loading />}</div>
    </div>
  );
};

export default Home;
