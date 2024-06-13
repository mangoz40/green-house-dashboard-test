import React from 'react'
import NftCard from '../components/card/nftCard'
import NFt1 from "../assets/NFT1.jpeg";
import NFt4 from "../assets/NFT4.jpeg";
import NFt3 from "../assets/NFT3.jpeg";
import NFt5 from "../assets/NFT5.jpeg";
import NFt6 from "../assets/NFT3.jpeg";

function Controls() {
  return (
    <div>
    

        {/* Recenlty Added setion */}
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
            <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Adjust Controls
            </h4>
        </div>

        {/* Recently Add NFTs */}
        <div className="grid grid-cols-1 gap-1 md:grid-cols-4 mb-[500px]">
            <NftCard
            bidders={[]}
            title="Humidty"
            author=""
            price="0.91"
            image={NFt4}
            />
            <NftCard
            bidders={[]}
            title="Light"
            author=""
            price="0.7"
            image={NFt5}
            />
            <NftCard
            bidders={[]}
            title="Moisture"
            author=""
            price="2.91"
            image={NFt6}
            />
            <NftCard
            bidders={[]}
            title="Light"
            author=""
            price="2.91"
            image={NFt1}
            />
        </div>
    </div>
  )
}

export default Controls