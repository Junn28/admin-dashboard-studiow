import "../../pages/Dashboard/dashboard.css";

export default function HeaderSection({
  title,
  btnName,
  btnIcon,
  btnAction,
  filter,
  search,
  handleSearch,
  handleFilter,
}) {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-medium">{title}</h1>

      <div className="btn-group flex">
        <button
          className={`${
            !filter && "hidden"
          } btn-primary bg-pws-purple flex items-center me-3`}
          onClick={handleFilter}
        >
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.83328 9V16.2233C9.86995 16.4983 9.77828 16.7917 9.56745 16.9842C9.20995 17.3417 8.63245 17.3417 8.27495 16.9842L6.43245 15.1417C6.22162 14.9308 6.12995 14.6467 6.16662 14.3808V9H6.13912L0.859118 2.235C0.547451 1.84083 0.620784 1.26333 1.01495 0.951667C1.18912 0.823333 1.38162 0.75 1.58328 0.75H14.4166C14.6183 0.75 14.8108 0.823333 14.985 0.951667C15.3791 1.26333 15.4525 1.84083 15.1408 2.235L9.86078 9H9.83328Z"
              fill="white"
            />
          </svg>

          <span className="ms-3 font-light text-sm">filter</span>
        </button>

        <div
          className={`${
            !search && "hidden"
          } search-section rounded-lg flex items-center py-1 px-2 me-3`}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.57633 7.54717H8.03431L7.8422 7.36192C8.51458 6.57976 8.91938 5.56432 8.91938 4.45969C8.91938 1.99657 6.92281 0 4.45969 0C1.99657 0 0 1.99657 0 4.45969C0 6.92281 1.99657 8.91938 4.45969 8.91938C5.56432 8.91938 6.57976 8.51458 7.36192 7.8422L7.54717 8.03431V8.57633L10.9777 12L12 10.9777L8.57633 7.54717ZM4.45969 7.54717C2.75129 7.54717 1.37221 6.1681 1.37221 4.45969C1.37221 2.75129 2.75129 1.37221 4.45969 1.37221C6.1681 1.37221 7.54717 2.75129 7.54717 4.45969C7.54717 6.1681 6.1681 7.54717 4.45969 7.54717Z"
              fill="#898989"
            />
          </svg>

          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            onChange={handleSearch}
          />
        </div>

        <button
          className="btn-primary bg-sws-green flex items-center"
          onClick={btnAction}
        >
          <img
            src={btnIcon}
            alt="icon"
            className={`${!btnIcon && "hidden"} me-3`}
          />

          <span className="font-light text-sm">{btnName}</span>
        </button>
      </div>
    </div>
  );
}
