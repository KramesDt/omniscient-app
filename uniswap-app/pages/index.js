import Header from '../components/Header'
import SwapComponent from '../components/SwapComponent'
import TradingViewWidget from "../components/TradingView";
import {NavItems, currentSelection } from "../components/NavItems";


export default function Home() {
  console.log("selectedNavItem is:",currentSelection);
  const Swapper = ()=>{
       if (selectedNavItem == "Trading View") {
         return <TradingViewWidget />;
       } else return <SwapComponent />;
       

  }
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#2D242F]">
      <Header />
      <Swapper />
      {/* <SwapComponent /> */}
    </div>
  );
}
