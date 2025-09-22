import { useEffect, useRef } from "react";
import * as d3 from 'd3';

const BarChart = ({ data, width, height }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current);
        svg.selectAll("*").remove();

        const margin = { top: 20, right: 20, bottom: 40, left: 40 };
        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;

        const x = d3
            .scaleBand()
            .domain(data.map((d) => d.name))
            .range([0, chartWidth])
            .padding(0.2);

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.value)])
            .nice()
            .range([chartHeight, 0]);

        const g = svg
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        g.selectAll("rect")
            .data(data)
            .join("rect")
            .attr("x", (d) => x(d.name))
            .attr("y", (d) => y(d.value))
            .attr("width", x.bandwidth())
            .attr("height", (d) => chartHeight - y(d.value))
            .attr("fill", "steelblue");

        g.append("g")
            .attr("transform", `translate(0,${chartHeight})`)
            .call(d3.axisBottom(x));

        g.append("g").call(d3.axisLeft(y));
    }, [data, width, height]);

    return <svg ref={ref} width={width} height={height}></svg>;

};
export default BarChart;
