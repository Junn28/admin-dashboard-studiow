import { useState } from "react";

export default function Pagination() {
  let [num, setNum] = useState(1);
  let [current, setCurrent] = useState(1);
  let pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];

  const next = () => {
    setNum(++num);
  };

  const prev = () => {
    num > 1 && setNum(--num);
  };

  return (
    <div className="flex mb-5">
      <button
        onClick={prev}
        className={`flex items-center btn-next rounded-sm p-1 me-2 ${
          num <= 1 && "hidden"
        }`}
      >
        <svg
          width="13"
          height="11"
          viewBox="0 0 13 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180 transform"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.75 5.50002C0.75 5.02368 1.13615 4.63753 1.6125 4.63753H9.24611L6.76469 2.38424C6.42133 2.05408 6.41062 1.50808 6.74078 1.16472C7.07094 0.821354 7.61694 0.810648 7.96031 1.14081L11.9853 4.87831C12.1544 5.04092 12.25 5.26541 12.25 5.50003C12.25 5.73464 12.1544 5.95913 11.9853 6.12174L7.96031 9.85924C7.61694 10.1894 7.07094 10.1787 6.74078 9.83533C6.41062 9.49197 6.42133 8.94597 6.76469 8.61581L9.24611 6.36252H1.6125C1.13615 6.36252 0.75 5.97637 0.75 5.50002Z"
            fill="#5C5C5C"
          />
        </svg>
        <span className="text-sm ms-2">Prev</span>
      </button>

      {pages.map((item, i) => (
        <button
          key={i}
          className={`btn-page me-1 rounded-sm ${
            current === item.page && "active-page"
          }`}
          onClick={() => setCurrent(item.page)}
        >
          <span className="text-sm">{item.page}</span>
          <div className="line-page mx-auto -mt-1"></div>
        </button>
      ))}

      <button className="btn-page me-1 rounded-sm">...</button>

      <button
        onClick={next}
        className="flex items-center btn-next rounded-sm p-1"
      >
        <span className="text-sm me-2">Next</span>
        <svg
          width="13"
          height="11"
          viewBox="0 0 13 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.75 5.50002C0.75 5.02368 1.13615 4.63753 1.6125 4.63753H9.24611L6.76469 2.38424C6.42133 2.05408 6.41062 1.50808 6.74078 1.16472C7.07094 0.821354 7.61694 0.810648 7.96031 1.14081L11.9853 4.87831C12.1544 5.04092 12.25 5.26541 12.25 5.50003C12.25 5.73464 12.1544 5.95913 11.9853 6.12174L7.96031 9.85924C7.61694 10.1894 7.07094 10.1787 6.74078 9.83533C6.41062 9.49197 6.42133 8.94597 6.76469 8.61581L9.24611 6.36252H1.6125C1.13615 6.36252 0.75 5.97637 0.75 5.50002Z"
            fill="#5C5C5C"
          />
        </svg>
      </button>
    </div>
  );
}
