import React, {useEffect, useRef} from 'react'
import * as d3 from 'd3';

export default function ScatterPlot(props) {
    const data = props.data;



const svgRef = useRef();

  useEffect(() => {
    if (data && data.length) {
      const margin = { top: 50, right: 30, bottom: 20, left: 40 };
      const width = 500 - margin.left - margin.right;
      const height = 400 ;

      const svg = d3.select(svgRef.current)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      const x = d3.scaleLinear()
        .domain([d3.min(data, d => d.intensity), d3.max(data, d => d.intensity)])
        .range([0, width]);

      const y = d3.scaleLinear()
        .domain([d3.min(data, d => d.likelihood), d3.max(data, d => d.likelihood)])
        .range([height, 0]);

      svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => x(d.intensity))
        .attr("cy", d => y(d.likelihood))
        .attr("r", 5);

      svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

      svg.append('g')
        .call(d3.axisLeft(y));
    }
  }, [data]);

  return (
    <div className='graph' style={{backgroundColor:props.styl.bgclr, color: props.styl.txtclr, boxShadow: props.stbx.bxshd}}>
      <svg ref={svgRef} width={500} height={500}></svg>
      <div> Scatter Plot of <b>Intensity VS Likelihood</b></div>
    </div>
  )
}
