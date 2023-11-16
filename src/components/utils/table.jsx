import { useLocation, useNavigate } from "react-router-dom";

export default function Table({ tHead, tBody, confirm }) {
  const { pathname } = useLocation();
  const path = pathname.slice(1, pathname.length);
  const navigate = useNavigate();

  const navigateDetail = (id) => {
    navigate(`/keuangan/pesanan/${id}`);
  };

  const editTemplate = (id) => {
    navigate(`/template/edit/${id}`);
  };

  const editPromo = (id) => {
    navigate(`/keuangan/promo/edit/${id}`);
  };

  return (
    <table className="table-auto w-full mt-8 rounded-lg shadow-lg">
      <thead>
        <tr className="text-sm text-center border-btm">
          {tHead.map((item) => {
            if (item === "Customer") {
              return (
                <td className="flex items-center text-start px-2 py-6">
                  <input type="checkbox" name="customer" />
                  <p className="ms-2">{item}</p>
                </td>
              );
            }
            return <td>{item}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {tBody.map((item, index) => {
          switch (path) {
            case "":
              return (
                <tr className="text-sm text-center mb-2">
                  <td>
                    <div className="user-group flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>

                      <div className="body ms-1">
                        <p className="font-medium color-nws-black text-start">
                          {item.name}
                        </p>
                        <p className="text-xs font-light color-nws-gray">
                          {item.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="text-start">{item.plan}</td>
                  <td>
                    <div className="badge-status flex items-center px-5 py-1 mx-auto">
                      <div className="bullet bg-sws-green"></div>
                      <p className="color-sws-green ms-2">{item.status}</p>
                    </div>
                  </td>
                  <td>{item.billing_date}</td>
                  <td>{item.description}</td>
                  <td>
                    <img
                      src={item.img_src}
                      alt="document"
                      className="mx-auto"
                    />
                  </td>
                </tr>
              );

            case "domain":
              return (
                <tr className="text-sm text-center mb-2">
                  <td>
                    <div className="badge-domain">{item.domain}</div>
                  </td>
                  <td>{item.plan}</td>
                  <td>
                    <div className="badge-status flex items-center px-5 py-1 mx-auto">
                      <div className="bullet bg-sws-green"></div>
                      <p className="color-sws-green ms-2">{item.status}</p>
                    </div>
                  </td>
                  <td>{item.billing_date}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>
                    <div className="btn-action flex gap-2 text-white justify-center">
                      <button className="flex items-center px-3 py-1 bg-sws-yellow rounded-sm">
                        <svg
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-2"
                        >
                          <path
                            d="M12.3285 2.80139C12.58 2.54989 12.58 2.13071 12.3285 1.89211L10.8195 0.383093C10.5809 0.13159 10.1617 0.13159 9.91022 0.383093L8.72365 1.56322L11.1419 3.98152M0.907715 9.3856V11.8039H3.32601L10.4584 4.66509L8.04007 2.24679L0.907715 9.3856Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-sm">Edit</p>
                      </button>
                      <button className="flex items-center px-3 py-1 bg-sws-red rounded-sm">
                        <svg
                          width="11"
                          height="12"
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-2"
                        >
                          <path
                            d="M10.0237 0.823534H7.75896L7.1119 0.176476H3.87661L3.22955 0.823534H0.964844V2.11765H10.0237M1.6119 10.5294C1.6119 10.8726 1.74825 11.2018 1.99094 11.4445C2.23364 11.6872 2.5628 11.8235 2.90602 11.8235H8.08249C8.42571 11.8235 8.75488 11.6872 8.99757 11.4445C9.24026 11.2018 9.37661 10.8726 9.37661 10.5294V2.76471H1.6119V10.5294Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-sm">Delete</p>
                      </button>
                    </div>
                  </td>
                </tr>
              );

            case "template":
              return (
                <tr className="text-sm text-center mb-2">
                  <td>
                    <img
                      src={item.template}
                      alt="template"
                      className="mx-auto"
                    />
                    <p>{item.title}</p>
                  </td>
                  <td>{item.plan}</td>
                  <td>{item.billing_date}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>
                    <div className="btn-action flex gap-2 text-white justify-center">
                      <button
                        className="flex items-center px-3 py-1 bg-sws-yellow rounded-sm"
                        onClick={() => {
                          editTemplate(index);
                        }}
                      >
                        <svg
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-2"
                        >
                          <path
                            d="M12.3285 2.80139C12.58 2.54989 12.58 2.13071 12.3285 1.89211L10.8195 0.383093C10.5809 0.13159 10.1617 0.13159 9.91022 0.383093L8.72365 1.56322L11.1419 3.98152M0.907715 9.3856V11.8039H3.32601L10.4584 4.66509L8.04007 2.24679L0.907715 9.3856Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-sm">Edit</p>
                      </button>

                      <button
                        className="flex items-center px-3 py-1 bg-sws-red rounded-sm"
                        onClick={() => {
                          confirm(index);
                        }}
                      >
                        <svg
                          width="11"
                          height="12"
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-2"
                        >
                          <path
                            d="M10.0237 0.823534H7.75896L7.1119 0.176476H3.87661L3.22955 0.823534H0.964844V2.11765H10.0237M1.6119 10.5294C1.6119 10.8726 1.74825 11.2018 1.99094 11.4445C2.23364 11.6872 2.5628 11.8235 2.90602 11.8235H8.08249C8.42571 11.8235 8.75488 11.6872 8.99757 11.4445C9.24026 11.2018 9.37661 10.8726 9.37661 10.5294V2.76471H1.6119V10.5294Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-sm">Delete</p>
                      </button>
                    </div>
                  </td>
                </tr>
              );

            case "keuangan/pesanan":
              return (
                <tr
                  className="text-sm text-center mb-2 cursor-pointer"
                  onClick={() => {
                    navigateDetail(index);
                  }}
                >
                  <td>
                    <div className="user-group flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>

                      <div className="body ms-1">
                        <p className="font-medium color-nws-black text-start">
                          {item.name}
                        </p>
                        <p className="text-xs font-light color-nws-gray">
                          {item.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>{item.no_telp}</td>
                  <td className="text-start">{item.plan}</td>
                  <td>{item.billing_date}</td>
                  <td>{item.description}</td>
                  <td>
                    <img
                      src={item.img_src}
                      alt="document"
                      className="mx-auto"
                    />
                  </td>
                </tr>
              );

            case "keuangan/promo":
              return (
                <tr className="text-sm text-center mb-2">
                  <td>
                    <div className="badge-domain">{item.types}</div>
                  </td>
                  <td>
                    <div className="badge-status flex items-center px-5 py-1 mx-auto">
                      <div className="bullet bg-sws-green"></div>
                      <p className="color-sws-green ms-2">{item.status}</p>
                    </div>
                  </td>
                  <td>{item.billing_date}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>
                    <div className="discount flex items-center mx-auto">
                      <div className="discount-line mx-2"></div>
                      <p
                        className="text-xs font-semibold"
                        style={{ color: "#FAFAFA" }}
                      >
                        {item.discount}% disc
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="btn-action flex gap-2 text-white justify-center">
                      <button
                        className="flex items-center px-3 py-1 bg-sws-yellow rounded-sm"
                        onClick={() => {
                          editPromo(index);
                        }}
                      >
                        <svg
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-2"
                        >
                          <path
                            d="M12.3285 2.80139C12.58 2.54989 12.58 2.13071 12.3285 1.89211L10.8195 0.383093C10.5809 0.13159 10.1617 0.13159 9.91022 0.383093L8.72365 1.56322L11.1419 3.98152M0.907715 9.3856V11.8039H3.32601L10.4584 4.66509L8.04007 2.24679L0.907715 9.3856Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-sm">Edit</p>
                      </button>
                      <button className="flex items-center px-3 py-1 bg-sws-red rounded-sm">
                        <svg
                          width="11"
                          height="12"
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-2"
                        >
                          <path
                            d="M10.0237 0.823534H7.75896L7.1119 0.176476H3.87661L3.22955 0.823534H0.964844V2.11765H10.0237M1.6119 10.5294C1.6119 10.8726 1.74825 11.2018 1.99094 11.4445C2.23364 11.6872 2.5628 11.8235 2.90602 11.8235H8.08249C8.42571 11.8235 8.75488 11.6872 8.99757 11.4445C9.24026 11.2018 9.37661 10.8726 9.37661 10.5294V2.76471H1.6119V10.5294Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-sm">Delete</p>
                      </button>
                    </div>
                  </td>
                </tr>
              );

            case "produk/blog":
            case "produk/portofolio":
              return (
                <tr className="text-sm text-center mb-2">
                  <td>{item.project}</td>
                  <td>{item.category}</td>
                  <td>{item.releases_date}</td>
                  <td>{item.status}</td>
                  <td>
                    <div className="btn-action flex gap-2 text-white justify-center">
                      <button className="flex items-center px-3 py-1 bg-sws-yellow rounded-sm">
                        <svg
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-2"
                        >
                          <path
                            d="M12.3285 2.80139C12.58 2.54989 12.58 2.13071 12.3285 1.89211L10.8195 0.383093C10.5809 0.13159 10.1617 0.13159 9.91022 0.383093L8.72365 1.56322L11.1419 3.98152M0.907715 9.3856V11.8039H3.32601L10.4584 4.66509L8.04007 2.24679L0.907715 9.3856Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-sm">Edit</p>
                      </button>

                      <button className="flex items-center px-3 py-1 bg-sws-red rounded-sm">
                        <svg
                          width="11"
                          height="12"
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-2"
                        >
                          <path
                            d="M10.0237 0.823534H7.75896L7.1119 0.176476H3.87661L3.22955 0.823534H0.964844V2.11765H10.0237M1.6119 10.5294C1.6119 10.8726 1.74825 11.2018 1.99094 11.4445C2.23364 11.6872 2.5628 11.8235 2.90602 11.8235H8.08249C8.42571 11.8235 8.75488 11.6872 8.99757 11.4445C9.24026 11.2018 9.37661 10.8726 9.37661 10.5294V2.76471H1.6119V10.5294Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-sm">Delete</p>
                      </button>
                    </div>
                  </td>
                </tr>
              );

            case "produk/custom-project":
              return (
                <tr className="text-sm text-center mb-2">
                  <td>{item.date}</td>
                  <td>{item.name}</td>
                  <td>{item.project}</td>
                  <td>{item.category}</td>
                  <td>
                    <svg
                      width="22"
                      height="16"
                      viewBox="0 0 22 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z"
                        fill="#333333"
                      />
                      <path
                        d="M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z"
                        fill="black"
                        fill-opacity="0.2"
                      />
                      <path
                        d="M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z"
                        fill="black"
                        fill-opacity="0.2"
                      />
                      <path
                        d="M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z"
                        fill="black"
                        fill-opacity="0.2"
                      />
                      <path
                        d="M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z"
                        fill="black"
                        fill-opacity="0.2"
                      />
                      <path
                        d="M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z"
                        fill="black"
                        fill-opacity="0.2"
                      />
                      <path
                        d="M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z"
                        fill="black"
                        fill-opacity="0.2"
                      />
                    </svg>
                  </td>
                  <td>
                    <div className="btn-action flex gap-2 text-white justify-center">
                      <button className="flex items-center px-3 py-1 bg-pws-purple rounded-sm">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-2"
                        >
                          <path
                            d="M10.5876 10.4904H1.55758V1.46041H10.5876M10.5876 0.17041H1.55758C1.21545 0.17041 0.887332 0.30632 0.64541 0.548242C0.403488 0.790164 0.267578 1.11828 0.267578 1.46041V10.4904C0.267578 10.8325 0.403488 11.1607 0.64541 11.4026C0.887332 11.6445 1.21545 11.7804 1.55758 11.7804H10.5876C10.9297 11.7804 11.2578 11.6445 11.4997 11.4026C11.7417 11.1607 11.8776 10.8325 11.8776 10.4904V1.46041C11.8776 1.11828 11.7417 0.790164 11.4997 0.548242C11.2578 0.30632 10.9297 0.17041 10.5876 0.17041ZM5.42758 7.91041H6.71758V9.20041H5.42758V7.91041ZM5.42758 2.75041H6.71758V6.62041H5.42758V2.75041Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-sm">Konfirmasi</p>
                      </button>

                      <button className="flex items-center px-3 py-1 bg-sws-yellow rounded-sm">
                        <svg
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-2"
                        >
                          <path
                            d="M12.3285 2.80139C12.58 2.54989 12.58 2.13071 12.3285 1.89211L10.8195 0.383093C10.5809 0.13159 10.1617 0.13159 9.91022 0.383093L8.72365 1.56322L11.1419 3.98152M0.907715 9.3856V11.8039H3.32601L10.4584 4.66509L8.04007 2.24679L0.907715 9.3856Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-sm">Edit</p>
                      </button>

                      <button className="flex items-center px-3 py-1 bg-sws-red rounded-sm">
                        <svg
                          width="11"
                          height="12"
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-2"
                        >
                          <path
                            d="M10.0237 0.823534H7.75896L7.1119 0.176476H3.87661L3.22955 0.823534H0.964844V2.11765H10.0237M1.6119 10.5294C1.6119 10.8726 1.74825 11.2018 1.99094 11.4445C2.23364 11.6872 2.5628 11.8235 2.90602 11.8235H8.08249C8.42571 11.8235 8.75488 11.6872 8.99757 11.4445C9.24026 11.2018 9.37661 10.8726 9.37661 10.5294V2.76471H1.6119V10.5294Z"
                            fill="white"
                          />
                        </svg>
                        <p className="text-sm">Delete</p>
                      </button>
                    </div>
                  </td>
                </tr>
              );
          }
        })}
      </tbody>
    </table>
  );
}
