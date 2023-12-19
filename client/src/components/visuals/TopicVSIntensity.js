import React, {useEffect, useRef} from 'react'
import * as d3 from 'd3'

export default function TopicVSIntensity(props) {

    // Convert the object to an array of key-value pairs
const entries = Object.entries(props.averageIntensityByTopic);

// Sort the array in descending order based on values
const sortedEntries = entries.sort((a, b) => b[1] - a[1]);

// Take the top 10 entries
const top10 = sortedEntries.slice(0, 10);

// Convert the top 10 entries back to an object
const top10Object = Object.fromEntries(top10);

// Output the result
//console.log(top10Object);

//const extraInfo ={ Pestels:'Pestels', Industries:'Industries'}

const ref = useRef();

useEffect(() => {
    // Clear existing SVG content
    d3.select(ref.current).selectAll('*').remove();
  
    // Convert data into an array of objects
    const dataArray = Object.keys(top10Object).map(key => ({
      name: key,
      intensity: top10Object[key]
    }));
  
    // Set up dimensions
    const margin = { top: 30, right: 10, bottom: 30, left: 20 };
    const width = 500 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
  
    // Append the svg object to the div
    const svg = d3.select(ref.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
  

    // Create Y axis
const y = d3.scaleLinear()
.range([height, 0])  // Adjust the range to invert the axis
.domain([0, d3.max(dataArray, d => d.intensity)]);
svg.append('g')
.call(d3.axisLeft(y))
.append("text")
.attr("transform", "rotate(-90)")
.attr("y", 6)
.attr("dy", "0.71em")
.attr("text-anchor", "end")
.text("Intensity");

// Create X axis
const x = d3.scaleBand()
.range([0, width-10])  // Adjust the range to fit the chart
.domain(dataArray.map(d => d.name))
.padding(0.1);
svg.append('g')
.attr('transform', `translate(0,${height})`)
.call(d3.axisBottom(x));

// Create Bars
svg.selectAll('myRect')
.data(dataArray)
.enter()
.append('rect')
.attr('x', d => x(d.name))
.attr('y', d => y(d.intensity))  // Adjust the positioning
.attr('width', x.bandwidth())
.attr('height', d => height - y(d.intensity))  // Adjust the height
.attr('fill', '#a16efd');

// Text labels for the bars
svg.selectAll('text.bar')
.data(dataArray)
.enter().append('text')
.attr('class', 'bar')
.attr('text-anchor', 'middle')
.attr('x', d => x(d.name) + x.bandwidth() / 2)
.attr('y', d => y(d.intensity) - 5)  // Adjust the positioning
.text(d => d.intensity);
  }, [top10Object]); // Redraw chart if data changes

  //console.log(props.stbx);

  return (
    <div className='graph' style={{backgroundColor:props.styl.bgclr, color: props.styl.txtclr, boxShadow: props.stbx.bxshd}}>
      
      <div style={{marginBottom: -10}}>top 10 <b>Topic VS Intensity</b></div>
      <div ref={ref}  ></div>
    </div>
  )
}
