import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, setIncrement, setDecrement, increaseBy, decreaseBy, reset, loadingIncrement, loadingDecrement } from "../redux/counter/counterSlice.js";
import { GrPowerReset } from "react-icons/gr";

export default function Home() { 
  
   const dispatch = useDispatch();
   const { value, message, incrementValue, decrementValue, isIncreaseLoading, isDecreaseLoading } = useSelector((state) => state.counter); 

   const handleValueIncrease = (e) => { 
    const input = Number(e.target.value);
     
    dispatch(setIncrement(input));
   };

   const handleValueDecrease = (e) => {
    const input = Number(e.target.value);
     
    dispatch(setDecrement(input));
   }; 

   const handleIncreseBy = (e) => {
    e.preventDefault();  
    dispatch(increaseBy());
   }
   const handleDecreseBy = (e) => {
    e.preventDefault();  
    dispatch(decreaseBy());
   }  
   
   const handleAsyncIncrease = async (e) => {
    e.preventDefault;
    try {
      
      dispatch(loadingDecrement(false));
      dispatch(loadingIncrement(true));
      setTimeout(() => {
        dispatch(increaseBy());
        dispatch(loadingIncrement(false));
      }, 2000); 
    } catch (error) {
      console.log(error)
    }
   }
   const handleAsyncDecrease = async (e) => {
    e.preventDefault;
    try {
      dispatch(loadingIncrement(false));
      dispatch(loadingDecrement(true));
      setTimeout(() => {
        dispatch(decreaseBy());
        dispatch(loadingDecrement(false));
      }, 2000); 
    } catch (error) {
      console.log(error)
    }
   }
   

      

  return (
    <div className="  h-screen bg-slate-900  pt-48 ">  
      <div className="max-w-xs mx-auto bg-white">
        <div className="w-full text-red-700 px-2 text-sm">{message}</div>
        <div className="top h-20 flex items-center">
          <b className="mx-auto text-3xl">{value}</b><br/>
        </div> 
        <span className="mb-1 flex justify-center text-xs text-green-600">
          {isIncreaseLoading ? 'Increasing...' : ''}
          {isDecreaseLoading ? 'Decreasing...' : ''}
        </span>
        <div className="flex justify-between p-2 text-black ">
          <Button onClick={() => dispatch(decrease())}>-</Button>
          <Button className="bg-white p-0 border-none" outline pill onClick={() => dispatch(reset())}> <GrPowerReset className="h-6 self-center"/> </Button>
          <Button onClick={() => dispatch(increase())}>+</Button>
        </div>  
        <div className="flex justify-between p-2 ">
          <div className="pr-5">  
            <form onSubmit={handleDecreseBy}>
              <Label value="Decrease by" className="text-xs" />
              <TextInput type="number" id="minus" value={decrementValue} placeholder={decrementValue} onChange={handleValueDecrease} /> 
              <Button type="submit" className="mt-4 w-full"> - <span className="text-xs">Decrease</span> - </Button>
            </form>
            <Button type="submit" className="mt-4 w-full" onClick={handleAsyncDecrease} disabled={isDecreaseLoading}> 
            - <span className="text-xs">
              {isDecreaseLoading ? ( <Spinner size='md' className="mx-4 my-1" />) : 'Async Decrease' }
            </span> - </Button>
          </div>
          <div className="pl-5">  
            <form onSubmit={handleIncreseBy}> 
              <Label value="Increase by" className="text-xs"  />
              <TextInput type="number" id="plus" value={incrementValue} placeholder={incrementValue}  onChange={handleValueIncrease} />  
              <Button type="submit" className="mt-4 w-full"> + <span className="text-xs px-1"> Increase </span> + </Button>
            </form>
            
            <Button type="submit" className="mt-4 w-full" onClick={handleAsyncIncrease} disabled={isIncreaseLoading}> 
            - <span className="text-xs px-1"> 
            {isIncreaseLoading ? ( <Spinner size='md' className="mx-4 my-1" />) : 'Async Increase' }
            </span> - </Button>
          </div>  
        </div> 
      </div> 
    </div>
  )
}
