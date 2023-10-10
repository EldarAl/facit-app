import { RouteProps } from 'react-router-dom';
import DefaultFooter from '../pages/_layout/_footers/DefaultFooter';

const footers: RouteProps[] = [
	// { path: pageLayoutTypesPagesMenu.blank.path, element: null },
	// { path: demoPagesMenu.login.path, element: null },
	// { path: demoPagesMenu.signUp.path, element: null },
	// { path: demoPagesMenu.page404.path, element: null },
	{ path: '*', element: <DefaultFooter /> },
];

export default footers;
