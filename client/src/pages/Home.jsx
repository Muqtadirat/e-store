import Category from "../components/category";
import Deals from "../components/deals";
import Sales from "../components/sales";

const Home = () => {
  return (
    <div className="container">
      <Category />
      <Deals />
      <Sales />
    </div>
  );
};

export default Home;
