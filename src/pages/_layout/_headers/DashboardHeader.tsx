import React, { useLayoutEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../../contexts/themeContext';
import Header, { HeaderLeft, HeaderRight } from '../../../layout/Header/Header';
import Popovers from '../../../components/bootstrap/Popovers';
import Button, { IButtonProps } from '../../../components/bootstrap/Button';
import useDarkMode from '../../../hooks/useDarkMode';
import LANG, { getLangWithKey, ILang } from '../../../lang';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import showNotification from '../../../components/extras/showNotification';
import Icon from '../../../components/icon/Icon';
import Spinner from '../../../components/bootstrap/Spinner';
import { ChatAvatar } from '../../../components/Chat';
import Avatar from '../../../components/Avatar';
import USERS from '../../../common/data/userDummyData';

const DashboardHeader = () => {
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();
	const { fullScreenStatus, setFullScreenStatus } = useContext(ThemeContext);
	const styledBtn: IButtonProps = {
		color: darkModeStatus ? 'dark' : 'light',
		hoverShadow: 'default',
		isLight: !darkModeStatus,
		size: 'lg',
	};

	const { i18n } = useTranslation();

	const changeLanguage = (lng: ILang['key']['lng']) => {
		i18n.changeLanguage(lng).then(() =>
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon={getLangWithKey(lng)?.icon} size='lg' className='me-1' />
					<span>{`Language changed to ${getLangWithKey(lng)?.text}`}</span>
				</span>,
				'You updated the language of the site. (Only "Aside" was prepared as an example.)',
			),
		);
	};

	/**
	 * Language attribute
	 */
	useLayoutEffect(() => {
		document.documentElement.setAttribute('lang', i18n.language);
	});

	return (
		<Header>
			<HeaderLeft>
				<code>Your Company</code>
			</HeaderLeft>

			<HeaderRight>
				<div className='row g-3 align-items-center'>
					{/* Dark Mode */}
					<div className='col-auto'>
						<Popovers trigger='hover' desc='Dark / Light mode'>
							<Button
								// eslint-disable-next-line react/jsx-props-no-spreading
								{...styledBtn}
								onClick={() => setDarkModeStatus(!darkModeStatus)}
								className='btn-only-icon'
								data-tour='dark-mode'
								aria-label='Toggle dark mode'>
								<Icon
									icon={darkModeStatus ? 'DarkMode' : 'LightMode'}
									color={darkModeStatus ? 'info' : 'warning'}
									className='btn-icon'
								/>
							</Button>
						</Popovers>
					</div>
					{/*	Full Screen */}
				<div className='col-auto'>
					<Popovers trigger='hover' desc='Fullscreen'>
						<Button
							// eslint-disable-next-line react/jsx-props-no-spreading
							{...styledBtn}
							icon={fullScreenStatus ? 'FullscreenExit' : 'Fullscreen'}
							onClick={() => setFullScreenStatus(!fullScreenStatus)}
							aria-label='Toggle fullscreen'
						/>
					</Popovers>
				</div>
					{/* Lang Selector */}
					<div className='col-auto'>
						<Dropdown>
							<DropdownToggle hasIcon={false}>
								{typeof getLangWithKey(i18n.language as ILang['key']['lng'])
									?.icon === 'undefined' ? (
									<Button
										// eslint-disable-next-line react/jsx-props-no-spreading
										{...styledBtn}
										className='btn-only-icon'
										aria-label='Change language'
										data-tour='lang-selector'>
										<Spinner isSmall inButton='onlyIcon' isGrow />
									</Button>
								) : (
									<Button
										// eslint-disable-next-line react/jsx-props-no-spreading
										{...styledBtn}
										icon={
											getLangWithKey(i18n.language as ILang['key']['lng'])
												?.icon
										}
										aria-label='Change language'
										data-tour='lang-selector'
									/>
								)}
							</DropdownToggle>
							<DropdownMenu isAlignmentEnd data-tour='lang-selector-menu'>
								{Object.keys(LANG).map((i) => (
									<DropdownItem key={LANG[i].lng}>
										<Button
											icon={LANG[i].icon}
											onClick={() => changeLanguage(LANG[i].lng)}>
											{LANG[i].text}
										</Button>
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
					</div>
					{/* User Name */}
					<div className='col-auto'>
					<div className='text-end'>
						<div className='fw-bold fs-6 mb-0'>
							{`${USERS.CHLOE.name} ${USERS.CHLOE.surname}`}
						</div>
						<div className='text-muted'>
							<small>{USERS.CHLOE.position}</small>
						</div>
					</div>
					</div>
					{/* User Avatar */}
					<div className='col-auto'>
					<Avatar srcSet={USERS.CHLOE.srcSet}
						src={USERS.CHLOE.src} 
						size={48}
						color={USERS.CHLOE.color}/>
				</div>
				</div>
		
			</HeaderRight>
		</Header>
	);
};

export default DashboardHeader;
