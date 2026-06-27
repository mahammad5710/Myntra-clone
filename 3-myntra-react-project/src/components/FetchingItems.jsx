import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchActions } from "../store/fetchStatusSlice";
const FetchingItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchActions.markFetchDone());
        dispatch(itemsActions.addInitialItems(data.items));
        dispatch(fetchActions.markFetchingFinished());
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <></>;
};
export default FetchingItems;
