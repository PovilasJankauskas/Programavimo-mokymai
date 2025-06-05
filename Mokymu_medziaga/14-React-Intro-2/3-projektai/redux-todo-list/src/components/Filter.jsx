import { setFilter } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filterValue);

  return (
    <div className="filters">
      <span
        className={currentFilter === "all" ? "active" : ""}
        onClick={() => dispatch(setFilter("all"))}
      >
        {" "}
        All{" "}
      </span>
      <span
        className={currentFilter === "completed" ? "active" : ""}
        onClick={() => dispatch(setFilter("completed"))}
      >
        Completed
      </span>
      <span
        className={currentFilter === "incompleted" ? "active" : ""}
        onClick={() => dispatch(setFilter("incompleted"))}
      >
        Incomplete
      </span>
    </div>
  );
};

export default Filter;
