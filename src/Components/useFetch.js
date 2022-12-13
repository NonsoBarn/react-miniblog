import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeTag, setActiveTag] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    const data = await fetch(url);
    const blogs = await data.json();
    setData(blogs);
    setFiltered(blogs);
    setLoading(true);
  };

  return { data, loading, filtered, setFiltered, activeTag, setActiveTag };
};

export default useFetch;
