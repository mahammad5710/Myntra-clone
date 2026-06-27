import FetchingItems from "../components/FetchingItems";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import {useSelector} from "react-redux";
import Loader from "../components/Loader";
function App() {
  const fetchStatus=useSelector((store)=>store.fetchStatus);
  return (
    <>
      <Header />
      <FetchingItems />
      {fetchStatus.currentlyFetching ? <Loader />:  <Outlet />}
      <Footer />
    </>
  );
}

export default App;
