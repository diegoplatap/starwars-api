import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { changePage, loadData } from "./actionCreators";
import CardList from "./CardList";
import Pagination from "./Pagination"

function App() {
  const { page, data, loading } = useSelector(state => state)
  const dispatch = useDispatch()

  function next() {
    dispatch(changePage(page + 1))
  }

  function previous() {
    dispatch(changePage(page - 1));
  }

  useEffect(() => {
    dispatch(loadData(page))
  }, [dispatch, page]);

  return (
    <div>
      <h2 className="title">Star Wars API</h2>
      {loading
        ? <p>Loading...</p>
        : (
          <>
            <CardList data={data} />
            <Pagination page={page} handleNext={next} handlePrevious={previous} />
          </>
        )
      }
    </div>
  );
}

export default App;
