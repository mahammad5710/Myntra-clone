import { useDispatch,useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import BagItem from "./BagItem";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
const HomeItem = ({ item }) => {
  const bag=useSelector(store=>store.bag);
  const handleAddBag = () => {
    dispatch(bagActions.addTobag(item.id));
  };
  const handleremove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  const dispatch = useDispatch();
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {bag.includes(item.id) ?<button type="button" className="btn  btn-add-bag btn-danger" onClick={handleremove}>
          <MdDelete />remove
        </button> : <button type="button" className="btn btn-add-bag btn-success" onClick={handleAddBag}>
          <IoIosAddCircleOutline />Add to Bag
        </button>}
      </div>
    </>
  );
};
export default HomeItem;
