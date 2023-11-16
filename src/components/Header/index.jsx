import "./header.css";

export default function Header() {
  return (
    <header className="bg-bws-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#">
            <svg
              width="100"
              height="50"
              viewBox="0 0 98 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_5_143)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.04165 8.6424C0.00591838 11.2006 -0.265077 14.0155 0.262973 16.7313C0.790959 19.447 2.09428 21.9416 4.00802 23.8995C5.92176 25.8574 8.36009 27.1908 11.0145 27.731C13.6691 28.2712 16.4205 27.9939 18.921 26.9343C21.4214 25.8747 23.5586 24.0802 25.0622 21.778C25.1023 21.7166 25.1419 21.6549 25.181 21.5929C25.2086 21.5492 25.236 21.5052 25.2632 21.4611V28H26.3158C29.0223 28 31.668 27.1789 33.9183 25.6405C36.1687 24.1023 37.9226 21.9157 38.9583 19.3575C39.9941 16.7994 40.2651 13.9845 39.737 11.2687C39.209 8.55301 37.9058 6.05842 35.992 4.10052C34.0782 2.14255 31.6399 0.809212 28.9855 0.269041C26.3309 -0.271195 23.5795 0.00605547 21.079 1.06569C18.5786 2.12533 16.4414 3.91976 14.9378 6.22202C14.8694 6.3268 14.8024 6.43249 14.7368 6.53891V8.34754e-06H13.6842C10.9777 8.34754e-06 8.33201 0.821109 6.08168 2.35946C3.83134 3.89774 2.07739 6.08425 1.04165 8.6424ZM12.6316 14V2.20289C10.713 2.38207 8.86244 3.04897 7.2513 4.15027C5.34714 5.45193 3.86308 7.3021 2.98668 9.46666C2.11028 11.6313 1.88098 14.0131 2.32776 16.3111C2.77454 18.609 3.87735 20.7198 5.49664 22.3765C7.116 24.0332 9.17918 25.1614 11.4253 25.6185C13.6714 26.0756 15.9995 25.841 18.1153 24.9444C20.1461 24.0838 21.8937 22.6504 23.1559 20.814C22.1993 21.2786 21.1293 21.5385 20 21.5385C15.9306 21.5385 12.6316 18.1633 12.6316 14ZM27.3684 25.7971V14C27.3684 9.83665 24.0694 6.46154 20 6.46154C18.8707 6.46154 17.8007 6.72144 16.8441 7.18602C18.1063 5.34959 19.8539 3.91614 21.8847 3.0556C24.0005 2.15898 26.3286 1.92439 28.5747 2.38148C30.8208 2.83856 32.884 3.96682 34.5034 5.62348C36.1227 7.28021 37.2255 9.391 37.6722 11.6889C38.119 13.9869 37.8897 16.3687 37.0133 18.5333C36.137 20.6979 34.6529 22.5481 32.7487 23.8497C31.1376 24.951 29.287 25.6179 27.3684 25.7971ZM19.8947 19.3836C17.0715 19.3269 14.7933 16.996 14.7379 14.1077H16.7291C18.2999 14.474 19.5365 15.739 19.8947 17.3461V19.3836ZM20.1052 19.3836C22.9284 19.3269 25.2067 16.996 25.2621 14.1077H23.2709C21.6999 14.474 20.4633 15.7392 20.1052 17.3465V19.3836ZM25.2621 13.8923C25.2067 11.004 22.9284 8.6731 20.1052 8.61644V10.6535C20.4633 12.2607 21.6998 13.5259 23.2706 13.8923H25.2621ZM19.8947 8.61644C17.0716 8.6731 14.7933 11.004 14.7379 13.8923H16.7294C18.3001 13.5259 19.5366 12.2609 19.8947 10.6539V8.61644Z"
                  fill="url(#paint0_linear_5_143)"
                />
              </g>
              <path
                d="M51.72 18.084C51.136 18.084 50.608 17.984 50.136 17.784C49.672 17.584 49.304 17.296 49.032 16.92C48.76 16.544 48.62 16.1 48.612 15.588H50.412C50.436 15.932 50.556 16.204 50.772 16.404C50.996 16.604 51.3 16.704 51.684 16.704C52.076 16.704 52.384 16.612 52.608 16.428C52.832 16.236 52.944 15.988 52.944 15.684C52.944 15.436 52.868 15.232 52.716 15.072C52.564 14.912 52.372 14.788 52.14 14.7C51.916 14.604 51.604 14.5 51.204 14.388C50.66 14.228 50.216 14.072 49.872 13.92C49.536 13.76 49.244 13.524 48.996 13.212C48.756 12.892 48.636 12.468 48.636 11.94C48.636 11.444 48.76 11.012 49.008 10.644C49.256 10.276 49.604 9.996 50.052 9.804C50.5 9.604 51.012 9.504 51.588 9.504C52.452 9.504 53.152 9.716 53.688 10.14C54.232 10.556 54.532 11.14 54.588 11.892H52.74C52.724 11.604 52.6 11.368 52.368 11.184C52.144 10.992 51.844 10.896 51.468 10.896C51.14 10.896 50.876 10.98 50.676 11.148C50.484 11.316 50.388 11.56 50.388 11.88C50.388 12.104 50.46 12.292 50.604 12.444C50.756 12.588 50.94 12.708 51.156 12.804C51.38 12.892 51.692 12.996 52.092 13.116C52.636 13.276 53.08 13.436 53.424 13.596C53.768 13.756 54.064 13.996 54.312 14.316C54.56 14.636 54.684 15.056 54.684 15.576C54.684 16.024 54.568 16.44 54.336 16.824C54.104 17.208 53.764 17.516 53.316 17.748C52.868 17.972 52.336 18.084 51.72 18.084ZM58.0965 12.732V15.948C58.0965 16.172 58.1485 16.336 58.2525 16.44C58.3645 16.536 58.5485 16.584 58.8045 16.584H59.5845V18H58.5285C57.1125 18 56.4045 17.312 56.4045 15.936V12.732H55.6125V11.352H56.4045V9.708H58.0965V11.352H59.5845V12.732H58.0965ZM67.0688 11.352V18H65.3768V17.16C65.1608 17.448 64.8768 17.676 64.5248 17.844C64.1808 18.004 63.8048 18.084 63.3968 18.084C62.8768 18.084 62.4168 17.976 62.0168 17.76C61.6168 17.536 61.3008 17.212 61.0688 16.788C60.8448 16.356 60.7328 15.844 60.7328 15.252V11.352H62.4128V15.012C62.4128 15.54 62.5448 15.948 62.8088 16.236C63.0728 16.516 63.4328 16.656 63.8888 16.656C64.3528 16.656 64.7168 16.516 64.9808 16.236C65.2448 15.948 65.3768 15.54 65.3768 15.012V11.352H67.0688ZM68.2944 14.652C68.2944 13.98 68.4264 13.384 68.6904 12.864C68.9624 12.344 69.3304 11.944 69.7944 11.664C70.2584 11.384 70.7744 11.244 71.3424 11.244C71.7744 11.244 72.1864 11.34 72.5784 11.532C72.9704 11.716 73.2824 11.964 73.5144 12.276V9.12H75.2184V18H73.5144V17.016C73.3064 17.344 73.0144 17.608 72.6384 17.808C72.2624 18.008 71.8264 18.108 71.3304 18.108C70.7704 18.108 70.2584 17.964 69.7944 17.676C69.3304 17.388 68.9624 16.984 68.6904 16.464C68.4264 15.936 68.2944 15.332 68.2944 14.652ZM73.5264 14.676C73.5264 14.268 73.4464 13.92 73.2864 13.632C73.1264 13.336 72.9104 13.112 72.6384 12.96C72.3664 12.8 72.0744 12.72 71.7624 12.72C71.4504 12.72 71.1624 12.796 70.8984 12.948C70.6344 13.1 70.4184 13.324 70.2504 13.62C70.0904 13.908 70.0104 14.252 70.0104 14.652C70.0104 15.052 70.0904 15.404 70.2504 15.708C70.4184 16.004 70.6344 16.232 70.8984 16.392C71.1704 16.552 71.4584 16.632 71.7624 16.632C72.0744 16.632 72.3664 16.556 72.6384 16.404C72.9104 16.244 73.1264 16.02 73.2864 15.732C73.4464 15.436 73.5264 15.084 73.5264 14.676ZM77.7113 10.56C77.4153 10.56 77.1673 10.468 76.9673 10.284C76.7753 10.092 76.6793 9.856 76.6793 9.576C76.6793 9.296 76.7753 9.064 76.9673 8.88C77.1673 8.688 77.4153 8.592 77.7113 8.592C78.0073 8.592 78.2513 8.688 78.4433 8.88C78.6433 9.064 78.7433 9.296 78.7433 9.576C78.7433 9.856 78.6433 10.092 78.4433 10.284C78.2513 10.468 78.0073 10.56 77.7113 10.56ZM78.5393 11.352V18H76.8593V11.352H78.5393ZM83.1511 18.108C82.5111 18.108 81.9351 17.968 81.4231 17.688C80.9111 17.4 80.5071 16.996 80.2111 16.476C79.9231 15.956 79.7791 15.356 79.7791 14.676C79.7791 13.996 79.9271 13.396 80.2231 12.876C80.5271 12.356 80.9391 11.956 81.4591 11.676C81.9791 11.388 82.5591 11.244 83.1991 11.244C83.8391 11.244 84.4191 11.388 84.9391 11.676C85.4591 11.956 85.8671 12.356 86.1631 12.876C86.4671 13.396 86.6191 13.996 86.6191 14.676C86.6191 15.356 86.4631 15.956 86.1511 16.476C85.8471 16.996 85.4311 17.4 84.9031 17.688C84.3831 17.968 83.7991 18.108 83.1511 18.108ZM83.1511 16.644C83.4551 16.644 83.7391 16.572 84.0031 16.428C84.2751 16.276 84.4911 16.052 84.6511 15.756C84.8111 15.46 84.8911 15.1 84.8911 14.676C84.8911 14.044 84.7231 13.56 84.3871 13.224C84.0591 12.88 83.6551 12.708 83.1751 12.708C82.6951 12.708 82.2911 12.88 81.9631 13.224C81.6431 13.56 81.4831 14.044 81.4831 14.676C81.4831 15.308 81.6391 15.796 81.9511 16.14C82.2711 16.476 82.6711 16.644 83.1511 16.644ZM97.0674 11.352L95.1234 18H93.3114L92.0994 13.356L90.8874 18H89.0634L87.1074 11.352H88.8114L89.9874 16.416L91.2594 11.352H93.0354L94.2834 16.404L95.4594 11.352H97.0674Z"
                fill="url(#paint1_linear_5_143)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_5_143"
                  x1="20"
                  y1="0"
                  x2="20"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#363DF3" />
                  <stop offset="1" stopColor="#5F63C6" stopOpacity="0.7" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_5_143"
                  x1="73"
                  y1="5"
                  x2="73"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#363DF3" />
                  <stop offset="1" stopColor="#5F63C6" stopOpacity="0.7" />
                </linearGradient>
                <clipPath id="clip0_5_143">
                  <rect width="40" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>

        <div className="flex flex-row items-center">
          <div className="search-group bg-bws-gray flex items-center py-1 px-2 me-5">
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
              placeholder="Search..."
            />
          </div>

          <div className="notification relative me-5">
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 20C9.6 20 10.5 19.1 10.5 18H6.5C6.5 19.1 7.4 20 8.5 20ZM15 14V8.5C15 5.43 12.87 2.86 10 2.18V1.5C10 0.67 9.33 0 8.5 0C7.67 0 7 0.67 7 1.5V2.18C4.13 2.86 2 5.43 2 8.5V14L0 16V17H17V16L15 14Z"
                fill="#898989"
              />
            </svg>

            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-1 -right-1"
            >
              <circle
                cx="5"
                cy="5"
                r="4"
                fill="#F9837C"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </div>

          <div className="user-group flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <div className="body ms-1">
              <p className="text-sm font-medium">Katie Pena</p>
              <p className="text-xs color-nws-grey">Admin</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}