import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import "../Sidebar/sidebar.css";
import { NavLink } from "react-router-dom";

export default function MenuDropdown({ items }) {
  return items.map((item, index) => {
    if (item.name === "Domain") {
      return (
        <Disclosure>
          {({ open }) => (
            <>
              <NavLink to={item.path}>
                <Disclosure.Button
                  className="btn-dropdown rounded-lg flex justify-between
                  mb-5"
                  key={index}
                >
                  <div className="menu flex items-center">
                    <div className="rectangle me-4"></div>

                    {item.icon}

                    <p className="ms-4 font-medium">{item.name}</p>
                  </div>

                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-black mt-4`}
                  />
                </Disclosure.Button>
              </NavLink>
              <Disclosure.Panel className="flex flex-col mb-4 mt-3">
                {item.dropdown?.map((value, i) => {
                  return (
                    <div className="flex items-center ms-14 mb-4" key={i}>
                      {value.icon}
                      <p className="ms-3 text-xs">{value.name}</p>
                    </div>
                  );
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      );
    }
    if (item.name === "Template") {
      return (
        <Disclosure>
          {({ open }) => (
            <>
              <NavLink to={item.path}>
                <Disclosure.Button
                  className="btn-dropdown rounded-lg flex justify-between mb-5"
                  key={index}
                >
                  <div className="menu flex items-center">
                    <div className="rectangle me-4"></div>

                    {item.icon}

                    <p className="ms-4 font-medium">{item.name}</p>
                  </div>

                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-black mt-4`}
                  />
                </Disclosure.Button>
              </NavLink>
              <Disclosure.Panel className="flex flex-col mb-4 mt-3">
                {item.dropdown?.map((value, i) => {
                  return (
                    <div className="flex items-center ms-14 mb-3" key={i}>
                      {value.icon}
                      <p className="ms-3 text-xs">{value.name}</p>
                    </div>
                  );
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      );
    }
    if (item.name === "Keuangan") {
      return (
        <Disclosure>
          {({ open }) => (
            <>
              <NavLink to={item.path}>
                <Disclosure.Button
                  className="btn-dropdown rounded-lg flex justify-between mb-5"
                  key={index}
                >
                  <div className="menu flex items-center">
                    <div className="rectangle me-4"></div>

                    {item.icon}

                    <p className="ms-4 font-medium">{item.name}</p>
                  </div>

                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-black mt-4`}
                  />
                </Disclosure.Button>
              </NavLink>
              <Disclosure.Panel className="flex flex-col mb-4 mt-3">
                {item.dropdown?.map((value, i) => {
                  return (
                    <div className="flex items-center ms-14 mb-3" key={i}>
                      {value.icon}
                      <p className="ms-3 text-xs">{value.name}</p>
                    </div>
                  );
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      );
    }
    if (item.name === "Produk") {
      return (
        <Disclosure>
          {({ open }) => (
            <>
              <NavLink to={item.path}>
                <Disclosure.Button
                  className="btn-dropdown rounded-lg flex justify-between mb-5"
                  key={index}
                >
                  <div className="menu flex items-center">
                    <div className="rectangle me-4"></div>

                    {item.icon}

                    <p className="ms-4 font-medium">{item.name}</p>
                  </div>

                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-black mt-4`}
                  />
                </Disclosure.Button>
              </NavLink>
              <Disclosure.Panel className="flex flex-col mb-4 mt-3">
                {item.dropdown?.map((value, i) => {
                  return (
                    <div className="flex items-center ms-14 mb-3" key={i}>
                      {value.icon}
                      <p className="ms-3 text-xs">{value.name}</p>
                    </div>
                  );
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      );
    }
    return (
      <Disclosure>
        <NavLink to={item.path}>
          <Disclosure.Button
            className="menu w-full flex items-center mb-5 rounded-lg"
            key={index}
          >
            <div className="rectangle me-4"></div>

            {item.icon}

            <p className="ms-4 font-medium">{item.name}</p>
          </Disclosure.Button>
        </NavLink>
      </Disclosure>
    );
  });
}
