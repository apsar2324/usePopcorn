import { useState } from "react";

export default function StarRating({ maxRating = 10, size = 24, onsetRating }) {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [count, setCount] = useState(null);

  function handleHover(count) {
    setCount(count);
    onsetRating?.(count + 1);
  }
  function handleReset() {
    setCount(null);
    onsetRating?.(null);
  }

  return (
    <div style={{ display: "flex" }}>
      {Array.from({ length: maxRating }).map((_, i) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={
            hoverIndex !== null
              ? i <= hoverIndex
                ? "#ffd437"
                : "none"
              : count !== null && i <= count
              ? "#ffd437"
              : "none"
          }
          viewBox="0 0 24 24"
          stroke="#ffd437"
          style={{ height: `${size}px`, width: `${size}px` }}
          key={i}
          onMouseEnter={() => setHoverIndex(i)}
          onMouseLeave={() => setHoverIndex(null)}
          onClick={() => handleHover(i)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ))}

      {(hoverIndex !== null || count !== null) && (
        <p
          style={{
            marginTop: "",
            marginLeft: "4px",
            fontSize: "16px",
            color: "#ffd437",
          }}
        >
          {(hoverIndex !== null ? hoverIndex : count) + 1}
        </p>
      )}
      <button className="btn-delete" onClick={() => handleReset()}>
        -
      </button>
    </div>
  );
}
