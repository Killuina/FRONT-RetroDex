import Link from "next/link";
import useToken from "../../hooks/useToken/useToken";
import { logoutUserActionCreator } from "../../store/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { removeToken } = useToken();
  const dispatch = useAppDispatch();

  const handleLogoutUser: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(logoutUserActionCreator());
    removeToken();
  };

  return (
    <NavBarStyled>
      <ul className="navbar">
        <li className="navbar__home">
          <Link href="/" aria-label="to Home page">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 0H12V3H9V6H6V9H3V12H0V15H3V30H13.5V21H16.5V30H27V15H30V12H27V9H24V6H21V3H18V0ZM18 3V6H21V9H24V12H27V15H24V27H19.5V18H10.5V27H6V15H3V12H6V9H9V6H12V3H18Z"
                fill="black"
              />
            </svg>
          </Link>
        </li>
        <li className="navbar__create-pokemon">
          <Link href="/" aria-label="to Create Pokémon page">
            <svg
              width="30"
              height="27"
              viewBox="0 0 30 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 0H3H27H30V27H27H3H0V0ZM27 24V3H3V24H27ZM9 6H6V9H9V6ZM12 6H24V9H12V6ZM9 12H6V15H9V12ZM12 12H24V15H12V12ZM9 18H6V21H9V18ZM12 18H24V21H12V18Z"
                fill="black"
              />
            </svg>
          </Link>
        </li>
        <li className="navbar__my-pokemon">
          <Link href="/" aria-label="to My Pokémon page">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.3334 0.666672H15.6667V4.00001V12.3333H27.3334V15.6667H15.6667V24V27.3333H12.3334V24V15.6667H0.666687V12.3333H12.3334V4.00001V0.666672Z"
                fill="black"
              />
            </svg>
          </Link>
        </li>
        {isLogged ? (
          <li className="navbar__logout">
            <button onClick={handleLogoutUser} aria-label="Logout">
              <svg
                width="34"
                height="33"
                viewBox="0 0 34 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.3788 0.0511149L25.1288 0.0799546L25.1191 3.32994L15.3692 3.3011L15.3788 0.0511149ZM12.0909 13.0416L15.3402 13.0512L15.3305 16.3011L25.0805 16.3299L25.0901 13.0799L15.3408 13.0511L15.3697 3.30121L12.1197 3.29159L12.0909 13.0416ZM28.3691 3.33969L25.1191 3.33008L25.0903 13.08L28.3402 13.0897L28.3691 3.33969ZM10.4361 22.7865L7.18607 22.7769L7.16684 29.2769L7.16675 29.2768L7.15714 32.5268L7.15723 32.5268L10.4072 32.5364L33.157 32.6037L33.157 32.6037L33.1574 32.6037L33.1863 22.8537L29.9366 22.8441L29.9462 19.5944L10.4463 19.5367L10.4367 22.7867L29.9363 22.8444L29.917 29.3441L10.4168 29.2865L10.4361 22.7865ZM8.98026 9.96189L6.03111 9.95322L6.02233 12.9024L3.07304 12.8937L3.08182 9.94452L6.03098 9.95319L6.03976 7.00404L8.98904 7.0127L8.98026 9.96189ZM3.0905 6.99541L0.141211 6.98675L0.132431 9.93593L3.08172 9.9446L3.0905 6.99541ZM0.123583 12.8851L3.07287 12.8937L3.06409 15.8429L0.114802 15.8343L0.123583 12.8851ZM8.97141 12.9111L6.02213 12.9024L6.01335 15.8516L8.96263 15.8603L8.97141 12.9111Z"
                  fill="black"
                />
              </svg>
            </button>
          </li>
        ) : (
          <li className="navbar__login">
            <Link href="/" aria-label="to Login page">
              <svg
                width="25"
                height="32"
                viewBox="0 0 25 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.1873 0H7.8124V3.12485H4.68781V12.4997H7.81277V3.12496H17.1873V0ZM17.1873 12.4998H7.8124V15.6248H17.1873V12.4998ZM17.1877 3.12485H20.3127V12.4997H17.1877V3.12485ZM0 21.8745H3.12496V28.1247H21.8751V21.8745H25.0001V31.2494H24.9997V31.2497H0V31.2494V28.1247V21.8745ZM3.125 18.7498H21.8748V21.8748H3.125V18.7498Z"
                  fill="black"
                />
              </svg>
            </Link>
          </li>
        )}
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
