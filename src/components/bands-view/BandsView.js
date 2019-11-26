import React, { useState, useEffect } from "react";
import axios from "axios";

export const BandsView = () => {
    const [bandData, setBandData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("http://localhost:3000/bands.json");
            setBandData(result.data.bands);
        };
        fetchData();
    }, []);
    console.log("bandData", bandData);
    return <div>Bands</div>;
};
