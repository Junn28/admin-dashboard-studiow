import "../../pages/Dashboard/dashboard.css";

export default function HeaderPage({ title }) {
  return (
    <div className="flex justify-between">
      <h1 className="text-xl font-medium">{title}</h1>
      <button className="btn-primary bg-pws-purple flex items-center">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.7501 5.59H8.66506L10.7201 3.475C8.67256 1.45 5.35756 1.375 3.31006 3.4C1.26256 5.4325 1.26256 8.71 3.31006 10.75C5.35756 12.775 8.67256 12.775 10.7201 10.75C11.7401 9.7375 12.2501 8.56 12.2501 7.075H13.7501C13.7501 8.56 13.0901 10.4875 11.7701 11.7925C9.13756 14.4025 4.86256 14.4025 2.23006 11.7925C-0.394936 9.19 -0.417436 4.96 2.21506 2.3575C4.84756 -0.245 9.07006 -0.245 11.7026 2.3575L13.7501 0.25V5.59ZM7.37506 4V7.1875L10.0001 8.7475L9.46006 9.655L6.25006 7.75V4H7.37506Z"
            fill="white"
          />
        </svg>
        <span className="ms-3 font-light text-xs">update</span>
      </button>
    </div>
  );
}
