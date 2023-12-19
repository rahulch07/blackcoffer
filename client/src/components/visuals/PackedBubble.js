import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

export default function PackedBubble(props) {


    const data=props.data;



const svgRef = useRef();

  useEffect(() => {
    d3.select(svgRef.current).selectAll('*').remove();

    if (data) {
      const width = 500;
      const height = 400;

      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const pack = data => d3.pack()
        .size([width +40, height +40])
        .padding(3)
        (d3.hierarchy(data)
          .sum(d => d.value)
          .sort((a, b) => b.value - a.value));

      const root = pack(data);

      const svg = d3.select(svgRef.current)
        .attr("viewBox", [0, 0, width, height])
        .attr("font-size", 10)
        .attr("text-anchor", "middle");

      const node = svg.selectAll("g")
        .data(d3.group(root, d => d.height))
        .join("g")
        .selectAll("g")
        .data(d => d[1])
        .join("g")
        .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

      node.append("circle")
        .attr("r", d => d.r)
        .attr("fill", d =>  (d.depth > 0) ? color(d.data.name): 'transparent');

      node.append("text")
        .selectAll("tspan")
        .data(d => [d.data.name, d.data.value])
        .join("tspan")
        .attr("x", 0)
        .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
        .text(d => d);

      svg.node();
    }
  }, [data]);

  return (
    <div className='graph' style={{backgroundColor: props.styl.bgclr, color: props.styl.txtclr, boxShadow: props.stbx.bxshd}}>
      <svg ref={svgRef} width={500} height={500}></svg>
      <div><b>Packed Bubble Chart</b> for Intensity By Each country</div>
    </div>
  )
}
