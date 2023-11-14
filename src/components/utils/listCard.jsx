import { useLocation } from "react-router-dom";

export default function ListCard({ data }) {
  const { pathname } = useLocation();
  const path = pathname.slice(1, pathname.length);

  return (
    <div className="grid gap-6 grid-cols-4">
      {data.map((item, index) => {
        return (
          <div className="py-5" key={index}>
            {path === "dashboard" ? (
              <div className="card p-5 shadow-xl rounded-lg">
                <div className={`icon p-3 mb-2 ${item.class}`}>{item.icon}</div>

                <p className="text-4xl font-semibold mb-3">{item.total}</p>
                <p className="text-sm font-medium">{item.name}</p>
              </div>
            ) : (
              <div className="card p-5 shadow-xl rounded-lg">
                <div className="icon flex my-4">
                  {item.icon}
                  <p className="text-sm font-medium ms-4">{item.name}</p>
                </div>

                <p className="text-4xl font-semibold">{item.total}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
