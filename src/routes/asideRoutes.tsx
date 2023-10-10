import { RouteProps } from 'react-router-dom';
import { authPages } from '../menu';
import DefaultAside from '../pages/_layout/_asides/DefaultAside';

const asides: RouteProps[] = [
	{ path: authPages.login.path, element: null },
	{ path: authPages.signUp.path, element: null },
	// { path: pageLayoutTypesPagesMenu.blank.path, element: null },
	{ path: '*', element: <DefaultAside /> },
];

export default asides;
