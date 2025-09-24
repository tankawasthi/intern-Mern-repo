import { useState } from "react";

export default function VirtualizedList({ list, height, width, itemHeight }) {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    setIndices([newStartIndex, newEndIndex]);
  };

  const visibleList = Array.isArray(list)
    ? list.slice(indices[0], indices[1] + 1)
    : [];

  return (
    <div
      className="container"
      onScroll={handleScroll}
      style={{
        height,
        width,
        overflow: "auto",
        border: "1px solid gray",
        position: "relative"
      }}
    >
      {/* big spacer div to simulate full list height */}
      <div style={{ height: list.length * itemHeight }}>
        {visibleList.map((item, idx) => (
          <div
            key={item}
            className="item"
            style={{
              position: "absolute",
              top: (indices[0] + idx) * itemHeight, // correct placement
              height: itemHeight,
              width: "100%",
              background: "coral",
              borderTop: "1px solid grey",
              boxSizing: "border-box"
            }}
          >
            {"item " + item}
          </div>
        ))}
      </div>
    </div>
  );
}
