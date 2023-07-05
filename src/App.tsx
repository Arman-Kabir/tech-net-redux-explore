// import { useDispatch, useSelector } from "react-redux"
// import { RootState } from "./redux/store"
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {

  // const {count} = useSelector((state:RootState) => state.counter)
  const {count} = useAppSelector((state) => state.counter)
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="">
        <button className="" onClick={()=>dispatch(increment())}>
          Increment
        </button>
        <button className="" onClick={()=>dispatch(incrementByAmount(5))}>
          Increment Byu Value
        </button>
        <div>{count}</div>
        <button className="" onClick={()=>dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App
