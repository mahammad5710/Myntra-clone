import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import {useSelector} from "react-redux";
const Bag=()=>{
  const bagItems=useSelector(store=>store.bag);
  const items=useSelector(store=>store.items);
  const finalItems=items.filter(items=>{
    const itemIndex=bagItems.indexOf(items.id);
    return itemIndex >= 0;
  })
  return (
    <>
    <main>
      <div className="bag-page">
        {finalItems.map((item)=><BagItem item={item} key={item.id}/>)}
        <BagSummary />
      </div>
    </main>
    </>
  )
}
export default Bag;