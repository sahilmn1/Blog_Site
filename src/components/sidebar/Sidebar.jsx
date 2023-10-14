import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://lh3.googleusercontent.com/pw/ADCreHfQBSybTBVyhB1lHxoRT4WWZigwJCV1WxLA_tNBQo65tInZavAIPPCw_D3ArPQBfe78-QJn4N6RrziO0aX-QAgtg48PfvmhgyHuVDPRYR8wG3-LJGmEmDOkH1LNXu7ExPH4hCzBp1vTG8uuYGiO45zT8qnweeZV0VnieIeqmo2XU8e7qiIQF2hPRr5kK-fVh9WhRXbsP4tihNuYcHq8m0uRm-gtWXuJn_hyGRM__w6Q8zisLCp_ETLjaXOWIg6mZcG8wK7xyT_ilv2JXrT9OCO8EmC-t1B2phphBM3Ndst01W7dHQx3S0D5XsQ9j4Yi_FGEzpg8gTw2MEdf4ItxuJbab-ESpMX00Sc6auyPjoQ6Nu4Fd-AOxK6oJZOe9O801_KvstUVIsLSPvIyq3O1E9HWCa3sZ1itju79_dXK_tjEs8fkwARyfByeS0xD3h2K6iEgLKJlHRMIIExUvHBdsx5kciuJgyz7HY3RKLVOOwqvG_3F6J4iWap-Ebc3ZKel2mjvBcHxOxvdnyQOfXwfPDYIJUgW1p-cP03SM445ImUqpqog4GY6-K2OXdmvmsSozJJhNnILPz0vvV_7BKAYX6FLiDrdl9MbTqWt1Ck4GlWzfMR6GV2ci8syfPiGGIa8fLmnSvamKUxC08kQEMO7Ea8tCaY60g0kP47_9vQhNw5Do9_Bl2I1z29ESF634sD1ZxChWNkhE3feMhXZF2RskHNtFyjyd-bzef8IuK6OVWzWeSDQg96gM2RfT7UIWKpy0nvabcGEbB-HlbAeKzmyU0qpz-1G0B0JUbJa13UDPdFTTAl2qu6bRoOjwXkHxokA1lNvfOvLc618ePoSmjrRyJmBBW0GRy3eu4-bMZj1t6QKA8CZ260FGIx6X3m3GC6tEVhSEtOewp6LfADTUQSNU3Y=w670-h894-s-no?authuser=0"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
