import React, { useEffect,useRef } from 'react'
import * as d3 from 'd3';

export default function TimeSeries(props) {
    const svgRef=useRef();
    

    // Convert data to the desired format
   // console.log(props.data);
const data = Object.entries(props.data).map(([timestamp, value]) => ({
    timestamp: new Date(timestamp),
    value: value,
  }));

  //console.log(data);

    

    useEffect(() => {
        // Set the dimensions of the SVG container
        const width = 450;
        const height = 400;
        const margin = { top: 20, right: 30, bottom: 30, left: 30 };
    
        // Create an SVG container
        const svg = d3.select(svgRef.current)
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);
    
        // Define the scales for x and y axes
        const xScale = d3.scaleTime()
          .domain(d3.extent(data, d => d.timestamp))
          .range([0, width]);
    
        const yScale = d3.scaleLinear()
          .domain([0, d3.max(data, d => d.value)])
          .range([height, 0]);
    
        // Define the line function
        const line = d3.line()
          .x(d => xScale(d.timestamp))
          .y(d => yScale(d.value));
    
        // Append the path to the SVG
        svg.append('path')
          .datum(data)
          .attr('fill', 'none')
          .attr('stroke', 'steelblue')
          .attr('stroke-width', 1.5)
          .attr('d', line);
    
        // Add x-axis
        svg.append('g')
          .attr('transform', `translate(0,${height})`)
          .call(d3.axisBottom(xScale));
    
        // Add y-axis
        svg.append('g')
          .call(d3.axisLeft(yScale));
      }, [data]);
  return (
    <div className='graph' style={{backgroundColor:props.styl.bgclr, color: props.styl.txtclr, boxShadow: props.stbx.bxshd}}>
      <div style={{marginBottom: -20}}><b>{props.country}'s</b> oil consumption Time Series Plot</div>
      <svg ref={svgRef}></svg>
    </div>
  )
}
