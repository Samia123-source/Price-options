// import Daisynav from './Components/Daisynav/Daisynav'


import { LineChart } from "recharts"
import Navbar from "./Components/Navbar/Navbar"
// import PriceOption from "./Components/PriceOption/PriceOption"
import PriceOptions from "./Components/PriceOptions/PriceOptions"
import LineCharts from "./Components/LIneChart/LineChart"
import Phones from "./Components/Phones/Phones"



function App() {

  return (
    <>
          <Navbar></Navbar>
          {/* <Daisynav></Daisynav> */}
          <h2 className='text-3xl bg-rose-600'>Connect with us</h2>
          <PriceOptions></PriceOptions>
          <LineCharts></LineCharts>
          <Phones></Phones>

    </>
  )
}

export default App
