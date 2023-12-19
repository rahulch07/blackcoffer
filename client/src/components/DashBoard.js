// src/components/Dashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import MaxIntensityCountry from "./visuals/MaxIntensityCountry";
import TopicVSIntensity from "./visuals/TopicVSIntensity";
import TimeSeries from "./visuals/TimeSeries";
import ScatterPlot from "./visuals/ScatterPlot";
import PackedBubble from "./visuals/PackedBubble";

const Dashboard = (props) => {

  

  let styl;
  let stylL= {bxshd: '5px 5px 5px 5px #DEDEDE'};
  let stylD= {bxshd: '5px 5px 5px 5px black'};

  props.mode==='light'? styl=stylL: styl=stylD;

  const [data, setData] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://blackcoffer-rho.vercel.app/api/data"); // Update with your backend API URL
      setData(response.data);
      //console.log(response.data);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  





  // Create an object to store the sum of intensities for each country
  const intensitySumByCountry = {};

  // Iterate through the data
  data.forEach((entry) => {
    const country = entry.country;

    if (country !== "") {
      // Check if the country already exists in the object, if not, initialize it with the intensity
      if (!intensitySumByCountry[country]) {
        intensitySumByCountry[country] = entry.intensity;
      } else {
        // If the country exists, add the intensity to the existing sum
        intensitySumByCountry[country] += entry.intensity;
      }
    }
  });
  //console.log(intensitySumByCountry);

  // Create an object to store the sum of intensities for each Region
  const intensitySumByRegion = {};

  // Iterate through the data
  data.forEach((entry) => {
    const region = entry.region;

    if (region !== "World" && region!== "") {
      // Check if the country already exists in the object, if not, initialize it with the intensity
      if (!intensitySumByRegion[region]) {
        intensitySumByRegion[region] = entry.intensity;
      } else {
        // If the country exists, add the intensity to the existing sum
        intensitySumByRegion[region] += entry.intensity;
      }
    }
  });

  //console.log(intensitySumByRegion);

  // Create an object to store the sum of intensities for each sector
  const intensitySumBySector = {};

  // Iterate through the data
  data.forEach((entry) => {
    const sector = entry.sector;

    if (sector !== "World" && sector!== "") {
      // Check if the country already exists in the object, if not, initialize it with the intensity
      if (!intensitySumBySector[sector]) {
        intensitySumBySector[sector] = entry.intensity;
      } else {
        // If the country exists, add the intensity to the existing sum
        intensitySumBySector[sector] += entry.intensity;
      }
    }
  });

  // Create an object to store the sum of intensities for each pestle
  const intensitySumByPestle = {};

  // Iterate through the data
  data.forEach((entry) => {
    const pestle = entry.pestle;

    if (pestle !== "World" && pestle!== "") {
      // Check if the country already exists in the object, if not, initialize it with the intensity
      if (!intensitySumByPestle[pestle]) {
        intensitySumByPestle[pestle] = entry.intensity;
      } else {
        // If the country exists, add the intensity to the existing sum
        intensitySumByPestle[pestle] += entry.intensity;
      }
    }
  });


  // Create an object to store the sum and count of intensity for each topic
const intensitySumByTopic = {};
const countByTopic = {};

// Iterate through the data
data.forEach(entry => {
  const topic = entry.topic;
  const intensity = entry.intensity;

  // Exclude entries where "pestle" is 'Industries' and "sector" is 'Energy'
  if (entry.pestle === 'Industries' && entry.sector === 'Energy') {
    return;
  }

  // Check if the topic already exists in the objects, if not, initialize it
  if (!intensitySumByTopic[topic]) {
    intensitySumByTopic[topic] = intensity;
    countByTopic[topic] = 1;
  } else {
    // If the topic exists, add the intensity to the existing sum and increment the count
    intensitySumByTopic[topic] += intensity;
    countByTopic[topic]++;
  }
});

// Create an object to store the average intensity for each topic
const averageIntensityByTopic = {};

// Calculate the average intensity for each topic
for (const topic in intensitySumByTopic) {
  averageIntensityByTopic[topic] = Math.round(intensitySumByTopic[topic] / countByTopic[topic]);
}

// Output the result
//console.log(averageIntensityByTopic);


// Create an object to store the sum of intensity for each 'published' date
const intensitySumByPublished = {};

// Filter data based on conditions and calculate the sum of intensity
data
  .filter(entry => entry.sector === 'Energy' && entry.topic === 'oil' && entry.country === 'India')
  .forEach(entry => {
    const publishedDate = entry.added;

    if (!intensitySumByPublished[publishedDate]) {
      intensitySumByPublished[publishedDate] = entry.intensity;
    } else {
      intensitySumByPublished[publishedDate] += entry.intensity;
    }
  });

// Output the result
//console.log(intensitySumByPublished);

const scatterData = data
  .filter(entry => entry.intensity !== '' && entry.likelihood !== '')
  .map(({ intensity, likelihood }) => ({ intensity, likelihood }));

//console.log(scatterData);


// const dataScatter = {
//   name: 'root',
//   children: intensitySumByCountry,
// };

// console.log(dataScatter);


// const transformedData = {
//   name: 'root',
//   children: intensitySumByCountry.map(obj => {
//     const countryName = Object.keys(obj)[0];
//     const value = obj[countryName];
//     return { name: countryName, value };
//   }),
// };

// console.log(transformedData);

const formattedData = {
  name: "root",
  children: Object.keys(intensitySumByCountry).map(key => ({ name: key, value: intensitySumByCountry[key] }))
};

//console.log(formattedData);

  return (
    <div style={{backgroundColor: props.styl.bgclr2, color: props.styl.txtclr}}>
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ width: 200 }}></div>
        </div>
        <div>
          <div style={{ height: 50 }}></div>
          <div >
            <h1 className="h1" style={{marginTop:10}}>DashBoard</h1>
            <div style={{ display: "flex"}}>
            <MaxIntensityCountry mode={props.mode} styl={props.styl} color={'green'} parameter={'Country'} intensityObj={intensitySumByCountry}/>
 
            <MaxIntensityCountry mode={props.mode} styl={props.styl} color={'blue'} parameter={'Region'} intensityObj={intensitySumByRegion}/>
 
            <MaxIntensityCountry mode={props.mode} styl={props.styl} color={'red'} parameter={'Sector'} intensityObj={intensitySumBySector}/>
 
            <MaxIntensityCountry mode={props.mode} styl={props.styl} color={'orange'} parameter={'Pestle'} intensityObj={intensitySumByPestle}/>
            </div>

            <div style={{ display: "flex", marginTop: 20}}>
            <TopicVSIntensity stbx={styl} mode={props.mode} styl={props.styl} averageIntensityByTopic={averageIntensityByTopic}/>
            <TimeSeries stbx={styl} mode={props.mode} styl={props.styl} country={'India'} data={intensitySumByPublished}/>
            </div>
            <div style={{ display: "flex", marginTop: 20}}>
            <ScatterPlot stbx={styl} mode={props.mode} styl={props.styl} data={scatterData} />
            <PackedBubble stbx={styl} mode={props.mode} styl={props.styl} data = {formattedData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
