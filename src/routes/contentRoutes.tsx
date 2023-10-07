import React, { lazy } from "react";
import {
  authPages,
  dashboardPagesMenu,
  demoPagesMenu,
  pageLayoutTypesPagesMenu,
	pages,
} from "../menu";


const LANDING = {
  DASHBOARD: lazy(
    () => import("../pages/presentation/home/HomePage")
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
	STREAMS_HISTORY: lazy(()=> import("../pages/presentation/stream-history/StreamsHistoryPage")),
	PLANS: lazy(()=> import("../pages/presentation/plans/PlansPage")),
	USER: lazy(()=> import('../pages/presentation/user/UserPage'))
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
   * Plans page
   */
	{
		path: pages.plan.path,
		element: <APP.PLANS />
	},
  /**
   * Dashboard page
   */
  {
    path: dashboardPagesMenu.dashboard.path,
    element: <LANDING.DASHBOARD />,
  },
  // {
  //   path: demoPagesMenu.signUp.path,
  //   element: <AUTH.PAGE_404 />,
  // },
	  /**
   * User Page
   */
	{
		path: pages.user.path,
		element: <APP.USER/>
	},
  /**
   * App > Database
   */
  {
    path: demoPagesMenu.database.path,
    element: <APP.DATABASE />,
  },
	  /**
   * App > Connections
   */
  {
    path: demoPagesMenu.connections.path,
    element: <APP.CONNECTIONS />,
  },
	  /**
   * App > Streams
   */
  {
    path: demoPagesMenu.streams.path,
    element: <APP.STREAMS />,
  },
	  /**
   * App > Stream History
   */
		{
			path: demoPagesMenu.streamsHistory.path,
			element: <APP.STREAMS_HISTORY />,
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
