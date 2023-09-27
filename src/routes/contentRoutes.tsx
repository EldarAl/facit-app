import React, { lazy } from "react";
import {
  authPages,
  dashboardPagesMenu,
  demoPagesMenu,
  pageLayoutTypesPagesMenu,
} from "../menu";


const LANDING = {
  DASHBOARD: lazy(
    () => import("../pages/presentation/dashboard/DashboardPage")
  ),
};
const AUTH = {
  PAGE_404: lazy(() => import("../pages/presentation/auth/Page404")),
	LOGIN: lazy(()=> import("../pages/presentation/auth/Login"))
};

const APP = {
  KNOWLEDGE: {
    GRID: lazy(
      () => import("../pages/presentation/knowledge/KnowledgeGridPage")
    ),
    VIEW: lazy(
      () => import("../pages/presentation/knowledge/KnowledgeViewPage")
    ),
  },
  DATABASE: lazy(() => import("../pages/presentation/data-base/DataBasePage")),
  CONNECTIONS: lazy(
    () => import("../pages/presentation/connections/ConnectionsPage")
  ),
  STREAMS: lazy(() => import("../pages/presentation/streams/StreamsPage")),
};

const PAGE_LAYOUTS = {
  HEADER_SUBHEADER: lazy(
    () => import("../pages/presentation/page-layouts/HeaderAndSubheader")
  ),
  HEADER: lazy(() => import("../pages/presentation/page-layouts/OnlyHeader")),
  SUBHEADER: lazy(
    () => import("../pages/presentation/page-layouts/OnlySubheader")
  ),
  CONTENT: lazy(() => import("../pages/presentation/page-layouts/OnlyContent")),
  BLANK: lazy(() => import("../pages/presentation/page-layouts/Blank")),
  ASIDE: lazy(
    () => import("../pages/presentation/aside-types/DefaultAsidePage")
  ),
  MINIMIZE_ASIDE: lazy(
    () => import("../pages/presentation/aside-types/MinimizeAsidePage")
  ),
};

const presentation = [
  /**
   * Auth Page
   */
  {
    path: authPages.login.path,
    element: <AUTH.LOGIN />,
  },
	{
    path: authPages.signUp.path,
    element: <AUTH.LOGIN isSignUp/>,
  },
  /**
   * Landing
   */
  {
    path: dashboardPagesMenu.dashboard.path,
    element: <LANDING.DASHBOARD />,
  },
  // {
  //   path: demoPagesMenu.page404.path,
  //   element: <AUTH.PAGE_404 />,
  // },

  {
    path: demoPagesMenu.signUp.path,
    element: <AUTH.PAGE_404 />,
  },
  /**
   * App > Database
   */
  {
    path: demoPagesMenu.database.path,
    element: <APP.DATABASE />,
  },
  {
    path: demoPagesMenu.connections.path,
    element: <APP.CONNECTIONS />,
  },
  {
    path: demoPagesMenu.streams.path,
    element: <APP.STREAMS />,
  },
  /**
   * App > Knowledge
   */
  {
    path: pageLayoutTypesPagesMenu.help.path,
    element: <APP.KNOWLEDGE.GRID />,
  },
  {
    path: `${pageLayoutTypesPagesMenu.help.path}/:id`,
    element: <APP.KNOWLEDGE.VIEW />,
  },

  /** ************************************************** */

  /**
   * Page Layout Types
   */
  // {
  // 	path: pageLayoutTypesPagesMenu.blank.path,
  // 	element: <PAGE_LAYOUTS.BLANK />,
  // },
  // {
  // 	path: pageLayoutTypesPagesMenu.pageLayout.subMenu.headerAndSubheader.path,
  // 	element: <PAGE_LAYOUTS.HEADER_SUBHEADER />,
  // },
  // {
  // 	path: pageLayoutTypesPagesMenu.pageLayout.subMenu.onlyHeader.path,
  // 	element: <PAGE_LAYOUTS.HEADER />,
  // },
  // {
  // 	path: pageLayoutTypesPagesMenu.pageLayout.subMenu.onlySubheader.path,
  // 	element: <PAGE_LAYOUTS.SUBHEADER />,
  // },
  // {
  // 	path: pageLayoutTypesPagesMenu.pageLayout.subMenu.onlyContent.path,
  // 	element: <PAGE_LAYOUTS.CONTENT />,
  // },
  // {
  // 	path: pageLayoutTypesPagesMenu.asideTypes.subMenu.defaultAside.path,
  // 	element: <PAGE_LAYOUTS.ASIDE />,
  // },
  // {
  // 	path: pageLayoutTypesPagesMenu.asideTypes.subMenu.minimizeAside.path,
  // 	element: <PAGE_LAYOUTS.MINIMIZE_ASIDE />,
  // },
];
const contents = [...presentation];

export default contents;
