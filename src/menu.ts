

export const dashboardPagesMenu = {
	dashboard: {
		id: 'dashboard',
		text: 'Home',
		path: '/',
		icon: 'Home',
		subMenu: null,
	},
};

export const pages = {
	plan: {
		id: 'plan',
		text: "Plan",
		path: 'plans',

	},
	user: {
		id: 'user',
		text: 'User Page',
		path: 'user-settings'
	},

}

export const authPages = {
	signUp: {
		id: 'signUp',
		text: 'Sign Up',
		path: 'auth-pages/sign-up',
		icon: 'PersonAdd',
	},
	login: {
		id: 'login',
		text: 'Login',
		path: 'auth-pages/login',
		icon: 'Login',
	},
	page404: {
		id: 'Page404',
		text: 'Help',
		path: 'auth-pages/404',
		icon: 'ReportGmailerrorred',
	},


};
export const demoPagesMenu = {
	commonPages: {
		id: 'commonPages',
		text: 'Common Pages',
		icon: 'Extension',
	},
	connections: {
		id: 'connections',
		text: 'Connections',
		path: 'connections',
		icon: 'Link',
	},
	database: {
		id: 'login',
		text: 'Database',
		path: 'database',
		icon: 'storage',
	},
	streams: {
		id: 'streams',
		text: 'Streams',
		path: 'streams',
		icon: 'Stream',
	},
	streamsHistory: {
		id: 'streamsHistory',
		text: 'Streams history',
		path: 'stream-history',
		icon: 'History',
	},

};

export const pageLayoutTypesPagesMenu = {
	layoutTypes: {
		id: 'layoutTypes',
		text: 'Support Pages',
	},
	help: {
		id: 'Help',
		text: 'Help',
		path: 'help',
		icon: 'ReportGmailerrorred',
	},

	// blank: {
	// 	id: 'blank',
	// 	text: 'Blank',
	// 	path: 'page-layouts/blank',
	// 	icon: 'check_box_outline_blank ',
	// },
	// pageLayout: {
	// 	id: 'pageLayout',
	// 	text: 'Page Layout',
	// 	path: 'page-layouts',
	// 	icon: 'BackupTable',
	// 	subMenu: {
	// 		headerAndSubheader: {
	// 			id: 'headerAndSubheader',
	// 			text: 'Header & Subheader',
	// 			path: 'page-layouts/header-and-subheader',
	// 			icon: 'ViewAgenda',
	// 		},
	// 		onlyHeader: {
	// 			id: 'onlyHeader',
	// 			text: 'Only Header',
	// 			path: 'page-layouts/only-header',
	// 			icon: 'ViewStream',
	// 		},
	// 		onlySubheader: {
	// 			id: 'onlySubheader',
	// 			text: 'Only Subheader',
	// 			path: 'page-layouts/only-subheader',
	// 			icon: 'ViewStream',
	// 		},
	// 		onlyContent: {
	// 			id: 'onlyContent',
	// 			text: 'Only Content',
	// 			path: 'page-layouts/only-content',
	// 			icon: 'WebAsset',
	// 		},
	// 	},
	// },
	// asideTypes: {
	// 	id: 'asideTypes',
	// 	text: 'Aside Types',
	// 	path: 'aside-types',
	// 	icon: 'Vertical Split',
	// 	subMenu: {
	// 		defaultAside: {
	// 			id: 'defaultAside',
	// 			text: 'Default Aside',
	// 			path: 'aside-types/default-aside',
	// 			icon: 'ViewQuilt',
	// 		},
	// 		minimizeAside: {
	// 			id: 'minimizeAside',
	// 			text: 'Minimize Aside',
	// 			path: 'aside-types/minimize-aside',
	// 			icon: 'View Compact',
	// 		},
	// 	},
	// },
};

export const productsExampleMenu = {
	companyA: { id: 'companyA', text: 'Company A', path: 'grid-pages/products', subMenu: null },
	companyB: { id: 'companyB', text: 'Company B', path: '/', subMenu: null },
	companyC: { id: 'companyC', text: 'Company C', path: '/', subMenu: null },
	companyD: { id: 'companyD', text: 'Company D', path: '/', subMenu: null },
};
