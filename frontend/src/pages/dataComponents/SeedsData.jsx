import React from 'react';
import Seed from "./Seed"
const SeedsData = ({seedData,setSeedData}) => {
    return (
        <div className="cards">
            {seedData.length&&seedData.map(seed=>
                (<Seed
                seedData={seedData}
                setSeedData={setSeedData}
                key={seedData.id}
                name={seed.name}
                count={seed.count}
                imgLnk={seed.imgLink}
                />)
            )}
        </div>
    )
}

export default SeedsData;
