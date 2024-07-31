// components/ImageCard.js
import Image from 'next/image';

const ImageCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white mt-7 mb-7 rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between">
        <div className="w-1/2">
          <img
            src="https://m.media-amazon.com/images/G/31/img24/Wireless/Samsung/Tiles/21stJuly/_Latest-launches_557x742_1._SS600_QL85_.jpg"
            alt="Image 1"
            className="object-cover w-full h-48 rounded-l-lg"
            width={300}
            height={200}
          />
        </div>
        <div className="w-1/2">
          <img
            src="https://m.media-amazon.com/images/G/31/img22/Wireless/devjyoti/Jio/J1/J1_LL_Slider._SS600_QL85_.jpg"
            alt="Image 2"
            className="object-cover w-full h-48 rounded-r-lg"
            width={300}
            height={200}
          />
        </div>
        
      </div>
    </div>
  );
};

export default ImageCard;
