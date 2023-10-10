import { RouteProps } from "react-router-dom";
import {
  authPages,
  dashboardPagesMenu
} from "../menu";
import DefaultHeader from "../pages/_layout/_headers/DefaultHeader";

const headers: RouteProps[] = [
  // { path: pageLayoutTypesPagesMenu.pageLayout.subMenu.onlySubheader.path, element: null },
  // { path: pageLayoutTypesPagesMenu.pageLayout.subMenu.onlyContent.path, element: null },
  // { path: pageLayoutTypesPagesMenu.blank.path, element: null },
  { path: authPages.login.path, element: null },
  { path: authPages.signUp.path, element: null },
  // { path: demoPagesMenu.page404.path, element: null },
  { path: dashboardPagesMenu.dashboard.path, element: <DefaultHeader /> },
  {
    path: `*`,
    element: <DefaultHeader />,
  },
];

export default headers;
