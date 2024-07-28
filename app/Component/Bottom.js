import Link from "next/link";

const BottomTabs = () => {
    return (
      <div className="fixed bottom-0 z-50 w-full h-20 bg-white border-t border-gray-200">
        <div className="flex justify-around p-4">
          <Link href="/" className="flex flex-col items-center">
           <img  className=" h-10 w-10" src="https://cdn-icons-png.freepik.com/256/14034/14034325.png?semt=ais_hybrid"></img>
            <span className="text-xs text-gray-600">Home</span>
          </Link>
          <Link href="/Search" className="flex flex-col items-center">
          <img  className=" h-10 w-10" src="https://cdn-icons-png.freepik.com/256/4398/4398568.png?semt=ais_hybrid"></img>
            <span className="text-xs text-gray-600">Search</span>
          </Link>
          <Link href="/Cart" className="flex flex-col items-center">
          <img  className=" h-10 w-10" src="https://cdn-icons-png.freepik.com/256/4290/4290854.png?semt=ais_hybrid"></img>
            <span className="text-xs text-gray-600">Cart</span>
          </Link>
        </div>
      </div>
    );
  };
  
  export default BottomTabs;
  