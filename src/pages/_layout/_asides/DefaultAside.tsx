import React, { ReactNode, useContext, useState } from 'react';
import classNames from 'classnames';
import Brand from '../../../layout/Brand/Brand';
import Navigation, { NavigationLine } from '../../../layout/Navigation/Navigation';
import { dashboardPagesMenu, demoPagesMenu, pageLayoutTypesPagesMenu } from '../../../menu';
import ThemeContext from '../../../contexts/themeContext';
import Icon from '../../../components/icon/Icon';
import Aside, { AsideBody, AsideFoot, AsideHead } from '../../../layout/Aside/Aside';
import Popovers from '../../../components/bootstrap/Popovers';
import { useNavigate } from "react-router-dom";
import useLang from '../../../hooks/useLang';

const DefaultAside = () => {
	const { asideStatus, setAsideStatus } = useContext(ThemeContext);
	let navigate = useNavigate();


	return (
		<Aside>
			<AsideHead>
				<Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
			</AsideHead>
			<AsideBody>
				<Navigation menu={dashboardPagesMenu} id='aside-dashboard' />
				<NavigationLine />
						<Navigation menu={demoPagesMenu} id='aside-demo-pages' />
						<NavigationLine />
						<Navigation menu={pageLayoutTypesPagesMenu} id='aside-menu' />
						<NavigationLine />
			</AsideBody>
			<AsideFoot>
				<nav aria-label='aside-bottom-menu'>
					<div className='navigation'>
						<div
							role='presentation'
							className='navigation-item cursor-pointer'
							onClick={() => {
								navigate("/auth-pages/login");
							}}
						>
							<span className='navigation-link navigation-link-pill'>
								<span className='navigation-link-info'>
									<Icon
										icon={'Login'}
										className='navigation-icon'
									/>
									<span className='navigation-text'>
										{useLang("Logout")}
									</span>
								</span>
							</span>
						</div>
					</div>
				</nav>
			</AsideFoot>
		</Aside>
	);
};

export default DefaultAside;
