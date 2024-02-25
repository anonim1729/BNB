import Navbar from "../components/Navbar";
import AddSeed from "./dataComponents/AddSeed";
import Chart from "./dataComponents/Chart";
import SeedsData from "./dataComponents/SeedsData";
import {useState} from 'react';

const Inventory = () => {
    const [seedData,setSeedData]=useState([
        { id:1,name: "Tomato", count: 5, imgLink: "../../../public/images/i.jpg" },
        { id:2,name: "Potato", count: 1, imgLink: "../../../public/images/i.jpg" },
        { id:3,name: "Carrot", count: 6, imgLink: "../../../public/images/i.jpg" },
        { id:4,name: "Onion", count: 2, imgLink: "../../../public/images/i.jpg" },
        { id:5,name: "Broccoli", count: 1, imgLink: "../../../public/images/i.jpg" },
        { id:6,name: "cabbage", count: 10, imgLink: "../../../public/images/i.jpg" },
        { id:7,name: "raddish", count: 9, imgLink: "../../../public/images/i.jpg" }
      ])
    //   console.log(seedData);
    return (
        <div className="inventory">
            <Navbar/>
            <SeedsData seedData={seedData} setSeedData={setSeedData}/>
            <AddSeed seedData={seedData} setSeedData={setSeedData}/>
            <Chart seedData={seedData} setSeedData={setSeedData} />
        </div>
    )
}

export default Inventory
