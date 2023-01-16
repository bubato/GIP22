import { FaUserCog, FaUserTie } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";

export const menus = [
  { id: 1, title: "Dashpoard", link: "/", icon: <MdDashboard /> },
  { id: 2, title: "Users", link: "/users", icon: <FaUserCog /> },
  { id: 3, title: "Docs", link: "/docs", icon: <GrDocumentText /> },
  { id: 4, title: "Position", link: "/positions", icon: <FaUserTie /> },
];
