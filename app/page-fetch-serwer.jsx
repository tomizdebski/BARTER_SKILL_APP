import axios from "axios";
import Dashboard from "@components/Home";

const Home = async () => {

  let categories = await axios.get("http://localhost:4000/api/categories",{ next: { revalidate: 3600 } });

  let lessons = await axios.get("http://localhost:4000/api/lessons", { next: { revalidate: 3600 } });

  return <Dashboard category={categories} lesson={lessons} />;
};

export default Home;
