import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Calendar, dayjsLocalizer, View as TView, Views } from 'react-big-calendar';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { Calendar as DatePicker } from 'react-date-range';
import { useNavigate } from 'react-router-dom';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Button, { ButtonGroup } from '../../../components/bootstrap/Button';
import Page from '../../../layout/Page/Page';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardFooterLeft,
	CardFooterRight,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Avatar from '../../../components/Avatar';
import User1Webp from '../../../assets/img/wanna/wanna2.webp';
import User1Img from '../../../assets/img/wanna/wanna2.png';
import Input from '../../../components/bootstrap/forms/Input';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import CommonDesc from '../../../common/other/CommonDesc';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Icon from '../../../components/icon/Icon';
import { priceFormat } from '../../../helpers/helpers';
import validate from './helper/editPagesValidate';
import validateAddress from './helper/editPageAddressValidate';
import eventList, { IEvents } from '../../../common/data/events';
import {
	CalendarTodayButton,
	CalendarViewModeButtons,
	getLabel,
	getUnitType,
	getViews,
} from '../../../components/extras/calendarHelper';
import Select from '../../../components/bootstrap/forms/Select';
import CommonMyWallet from '../../_common/CommonMyWallet';
import Popovers from '../../../components/bootstrap/Popovers';
import USERS from '../../../common/data/userDummyData';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../components/bootstrap/OffCanvas';
import Checks, { ChecksGroup } from '../../../components/bootstrap/forms/Checks';
import showNotification from '../../../components/extras/showNotification';
import useDarkMode from '../../../hooks/useDarkMode';
import { TColor } from '../../../type/color-type';
import Label from '../../../components/bootstrap/forms/Label';

const localizer = dayjsLocalizer(dayjs);
const now = new Date();

const MyEvent = (data: { event: IEvents }) => {
	const { event } = data;
	return (
		<div className='row g-2'>
			<div className='col text-truncate'>
				{event.icon && <Icon icon={event.icon} size='lg' className='me-2' />}
				{event.name}
			</div>
		</div>
	);
};

const MyWeekEvent = (data: { event: IEvents }) => {
	const { event } = data;
	return (
		<div className='row g-2'>
			<div className='col-12 text-truncate'>
				{event.icon && <Icon icon={event.icon} size='lg' className='me-2' />}
				{event.name}
			</div>
		</div>
	);
};

type TTabs = 'Account Details' | 'LegaL Entities' | 'Notifications';
interface ITabs {
	[key: string]: TTabs;
}
const UserPage = () => {
	const { darkModeStatus } = useDarkMode();

	const navigate = useNavigate();

	const notificationTypes = [
		{ id: 1, name: 'Newsletter' },
		{ id: 2, name: 'Error Notifications' },
		{ id: 3, name: 'Balance Notifications' },
	];

	const TABS: ITabs = {
		ACCOUNT_DETAIL: 'Account Details',
		LEGAL_ENTITIES: 'LegaL Entities',
		NOTIFICATIONS: 'Notifications'
	};
	const [activeTab, setActiveTab] = useState<TTabs>(TABS.ACCOUNT_DETAIL);

	const formik = useFormik({
		initialValues: {
			firstName: 'John',
			lastName: 'Doe',
			emailAddress: 'johndoe@site.com',
			phoneNumber: '+123456789',
			currentPassword: '',
			newPassword: '',
			confirmPassword: '',
		},
		validate,
		onSubmit: () => {
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Successfully</span>
				</span>,
				"The user's account details have been successfully updated.",
			);
		},
	});
	const formikLegalEntity = useFormik({
		initialValues: {
			companyName: 'Yandex',
			addressLine: '259 Street',
			legalEntity: '123456789',
		},
		validate: validateAddress,
		onSubmit: () => {
			showNotification(
				<span className='d-flex align-items-center'>
					<Icon icon='Info' size='lg' className='me-1' />
					<span>Updated Successfully</span>
				</span>,
				"The user's address have been successfully updated.",
			);
		},
	});

	const formikNotification = useFormik({
		initialValues: {
			notifications: ['1', '3'],
		},
		onSubmit: () => {}
	})

	//
	// Events
	const [events, setEvents] = useState<IEvents[]>(eventList);
	// Selected Event
	const [eventItem, setEventItem] = useState<IEvents | null>(null);
	// Calendar View Mode
	const [viewMode, setViewMode] = useState<TView>(Views.MONTH);
	// Calendar Date
	const [date, setDate] = useState<Date>(new Date());
	// Item edit panel status
	const [toggleInfoEventCanvas, setToggleInfoEventCanvas] = useState<boolean>(false);
	const setInfoEvent = () => setToggleInfoEventCanvas(!toggleInfoEventCanvas);
	// Calendar Unit Type
	const unitType = getUnitType(viewMode);
	// Calendar Date Label
	const calendarDateLabel = getLabel(date, viewMode);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const eventStyleGetter = (
		event: { color?: TColor },
		start: Date,
		end: Date,
		isSelected: boolean,
	): { className: string } => {
		const isActiveEvent = start <= now && end >= now;
		const isPastEvent = end < now;
		const color = isActiveEvent ? 'success' : event.color;

		return {
			className: classNames({
				[`bg-l10-${color} text-${color}`]: color,
				'border border-success': isActiveEvent,
				'opacity-50': isPastEvent,
			}),
		};
	};

	const handleViewMode = (e: dayjs.ConfigType) => {
		setDate(dayjs(e).toDate());
		setViewMode(Views.DAY);
	};

	// View modes; Month, Week, Work Week, Day and Agenda
	const views = getViews();

	// New Event
	const handleSelect = ({ start, end }: { start: Date; end: Date }) => {
		// eslint-disable-next-line no-alert
		const title = window.prompt('New Event name');
		if (title)
			setEvents([
				...events,
				{
					start,
					end,
					title,
				},
			]);
	};

	useEffect(() => {
		if (eventItem)
			formik.setValues({
				...formik.values,
				// @ts-ignore
				eventId: eventItem.id || null,
				eventName: eventItem.name,
				eventStart: dayjs(eventItem.start).format(),
				eventEnd: dayjs(eventItem.end).format(),
				eventAllDay: eventItem.allDay,
				eventEmployee: `${eventItem?.user?.name} ${eventItem?.user?.surname}`,
			});
		return () => {};
		//	eslint-disable-next-line react-hooks/exhaustive-deps
	}, [eventItem]);

	const formikEvent = useFormik({
		initialValues: {
			eventName: '',
			eventStart: '',
			eventEnd: '',
			eventAllDay: false,
			eventRecurring: false,
			eventRepeat: '',
			eventUntilWhen: '',
			eventEmployee: '',
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onSubmit: (values) => {
			// console.log(JSON.stringify(values, null, 2));
			setToggleInfoEventCanvas(false);
			setEventItem(null);
		},
	});
	return (
		<PageWrapper title={"User"}>
			<SubHeader>
				<SubHeaderLeft>
					<Button color='info' isLink icon='ArrowBack' onClick={() => navigate(-1)}>
						Back to List
					</Button>
					<SubheaderSeparator />
					<Avatar srcSet={User1Webp} src={User1Img} size={32} />
					<span>
						<strong>Timothy J. Doe</strong>
					</span>
					<span className='text-muted'>Edit User</span>
				</SubHeaderLeft>
				<SubHeaderRight>
	
					{TABS.ACCOUNT_DETAIL === activeTab && (
						<Button color='info' isOutline icon='Save' onClick={formik.handleSubmit}>
							Save
						</Button>
					)}
					{TABS.LEGAL_ENTITIES === activeTab && (
						<Button
							color='info'
							isOutline
							icon='Save'
							onClick={formikLegalEntity.handleSubmit}>
							Save
						</Button>
					)}
				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>
				<div className='row h-100'>
					<div className='col-xxl-3 col-xl-4 col-lg-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Person' iconColor='info'>
									<CardTitle tag='div' className='h5'>
										Account Settings
									</CardTitle>
									<CardSubTitle tag='div' className='h6'>
										Personal Information
									</CardSubTitle>
								</CardLabel>
							</CardHeader>
							<CardBody isScrollable>
								<div className='row g-3'>
									<div className='col-12'>
										<Button
											icon='Contacts'
											color='info'
											className='w-100 p-3'
											isLight={TABS.ACCOUNT_DETAIL !== activeTab}
											onClick={() => setActiveTab(TABS.ACCOUNT_DETAIL)}>
											{TABS.ACCOUNT_DETAIL}
										</Button>
									</div>
									<div className='col-12'>
										<Button
											icon='Policy'
											color='info'
											className='w-100 p-3'
											isLight={TABS.ADDRESS !== activeTab}
											onClick={() => setActiveTab(TABS.LEGAL_ENTITIES)}>
											{TABS.LEGAL_ENTITIES}
										</Button>
									</div>
									<div className='col-12'>
										<Button
											icon='Notifications'
											color='info'
											className='w-100 p-3'
											isLight={TABS.NOTIFICATIONS !== activeTab}
											onClick={() => setActiveTab(TABS.NOTIFICATIONS)}>
											{TABS.NOTIFICATIONS}
										</Button>
									</div>

									<div className='col-12 shadow-3d-container'>
										<Card
											className={`bg-l${
												darkModeStatus ? 'o25' : '10'
											}-primary rounded-2 shadow-3d-primary shadow-3d-hover cursor-pointer`}>
											<CardHeader className='bg-transparent'>
												<CardLabel>
													<CardTitle tag='div' className='h5'>
														Coupon
													</CardTitle>
												</CardLabel>
											</CardHeader>
											<CardBody>
												<div className='d-flex align-items-center pb-3'>
													<div className='flex-shrink-0'>
														<Icon
															icon='ConfirmationNumber'
															size='4x'
															color='primary'
														/>
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-3 mb-0'>
															{priceFormat(250)}
														</div>
														<div className='text-muted'>
															You can use it within 15 days.
														</div>
													</div>
												</div>
											</CardBody>
										</Card>
				
									</div>
								</div>
							</CardBody>

						</Card>
					</div>
					<div className='col-xxl-9 col-xl-8 col-lg-6'>
						{TABS.ACCOUNT_DETAIL === activeTab && (
							<Card stretch tag='form' noValidate onSubmit={formik.handleSubmit}>
								<CardHeader>
									<CardLabel icon='Contacts' iconColor='info'>
										<CardTitle tag='div' className='h5'>
											Account Details
										</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody isScrollable>
									<Card>
										<CardBody>
											<div className='row g-4 align-items-center'>
												<div className='col-xl-auto'>
													<Avatar srcSet={User1Webp} src={User1Img} />
												</div>
												<div className='col-xl'>
													<div className='row g-4'>
														<div className='col-auto'>
															<Input
																type='file'
																autoComplete='photo'
																ariaLabel='Upload image file'
															/>
														</div>
														<div className='col-auto'>
															<Button
																color='dark'
																isLight
																icon='Delete'>
																Delete Avatar
															</Button>
														</div>
														<div className='col-12'>
															<p className='lead text-muted'>
																Avatar helps your teammates get to
																know you.
															</p>
														</div>
													</div>
												</div>
											</div>
										</CardBody>
									</Card>
									<Card>
										<CardHeader>
											<CardLabel icon='Edit' iconColor='warning'>
												<CardTitle tag='div' className='h5'>
													Personal Information
												</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody>
											<div className='row g-4'>
												<div className='col-lg-6'>
													<FormGroup
														id='firstName'
														label='First Name'
														isFloating>
														<Input
															placeholder='First Name'
															autoComplete='additional-name'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.firstName}
															isValid={formik.isValid}
															isTouched={formik.touched.firstName}
															invalidFeedback={
																formik.errors.firstName
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
												<div className='col-lg-6'>
													<FormGroup
														id='lastName'
														label='Last Name'
														isFloating>
														<Input
															placeholder='Last Name'
															autoComplete='family-name'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.lastName}
															isValid={formik.isValid}
															isTouched={formik.touched.lastName}
															invalidFeedback={formik.errors.lastName}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
												<div className='col-lg-6'>
													<FormGroup
														id='phoneNumber'
														label='Phone number'
														isFloating>
														<Input
															placeholder='Phone number'
															autoComplete='phone'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.phoneNumber}
															isValid={formik.isValid}
															isTouched={formik.touched.phoneNumber}
															invalidFeedback={
																formik.errors.phoneNumber
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>		
												<div className='col-lg-6'>
													<FormGroup
														id='emailAddress'
														label='Email address'
														isFloating>
														<Input
															type='email'
															placeholder='Email address'
															autoComplete='email'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.emailAddress}
															isValid={formik.isValid}
															isTouched={formik.touched.emailAddress}
															invalidFeedback={
																formik.errors.emailAddress
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
											</div>
										</CardBody>
									</Card>
									<Card>
										<CardHeader>
											<CardLabel icon='LocalPolice' iconColor='success'>
												<CardTitle tag='div' className='h5'>
													Password Change
												</CardTitle>
											</CardLabel>
										</CardHeader>
										<CardBody>
											<div className='row g-4'>
												<div className='col-xl-4'>
													<FormGroup
														id='currentPassword'
														label='Current password'
														isFloating>
														<Input
															type='password'
															placeholder='Current password'
															autoComplete='current-password'
															onChange={formik.handleChange}
															value={formik.values.currentPassword}
														/>
													</FormGroup>
												</div>
												<div className='col-xl-4'>
													<FormGroup
														id='newPassword'
														label='New password'
														isFloating>
														<Input
															type='password'
															placeholder='New password'
															autoComplete='new-password'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.newPassword}
															isValid={formik.isValid}
															isTouched={formik.touched.newPassword}
															invalidFeedback={
																formik.errors.newPassword
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
												<div className='col-xl-4'>
													<FormGroup
														id='confirmPassword'
														label='Confirm new password'
														isFloating>
														<Input
															type='password'
															placeholder='Confirm new password'
															autoComplete='new-password'
															onChange={formik.handleChange}
															onBlur={formik.handleBlur}
															value={formik.values.confirmPassword}
															isValid={formik.isValid}
															isTouched={
																formik.touched.confirmPassword
															}
															invalidFeedback={
																formik.errors.confirmPassword
															}
															validFeedback='Looks good!'
														/>
													</FormGroup>
												</div>
											</div>
										</CardBody>
										<CardFooter>
											<CommonDesc>Leave blank to leave unchanged.</CommonDesc>
										</CardFooter>
									</Card>
								</CardBody>
								<CardFooter>
									<CardFooterLeft>
										<Button
											color='info'
											isLink
											type='reset'
											onClick={formik.resetForm}>
											Reset
										</Button>
									</CardFooterLeft>
									<CardFooterRight>
										<Button
											type='submit'
											icon='Save'
											color='info'
											isOutline
											isDisable={!formik.isValid && !!formik.submitCount}>
											Save
										</Button>
									</CardFooterRight>
								</CardFooter>
							</Card>
						)}
						{TABS.LEGAL_ENTITIES === activeTab && (
							<Card
								stretch
								tag='form'
								noValidate
								onSubmit={formikLegalEntity.handleSubmit}>
								<CardHeader>
									<CardLabel icon='Policy' iconColor='info'>
										<CardTitle>{TABS.LEGAL_ENTITIES}</CardTitle>
									</CardLabel>
								</CardHeader>
								<CardBody className='pb-0' isScrollable>
									<div className='row g-4'>
									<div className='col-lg-12'>
											<FormGroup
												id='companyName'
												label='Company name'
												isFloating>
												<Input
													onChange={formikLegalEntity.handleChange}
													value={formikLegalEntity.values.companyName}
												/>
											</FormGroup>
										</div>
										<div className='col-lg-12'>
											<FormGroup
												id='addressLine'
												label='Address Line'
												isFloating>
												<Input
													onChange={formikLegalEntity.handleChange}
													onBlur={formikLegalEntity.handleBlur}
													value={formikLegalEntity.values.addressLine}
													isValid={formikLegalEntity.isValid}
													isTouched={formikLegalEntity.touched.addressLine}
													invalidFeedback={
														formikLegalEntity.errors.addressLine
													}
													validFeedback='Looks good!'
												/>
											</FormGroup>
										</div>
										<div className='col-lg-12'>
											<FormGroup
												id='legalEntity'
												label='Details of a legal entity'
												isFloating>
												<Input
													onChange={formikLegalEntity.handleChange}
													value={formikLegalEntity.values.legalEntity}
												/>
											</FormGroup>
										</div>			
									</div>
								</CardBody>
								<CardFooter>
									<CardFooterLeft>
										<Button
											color='info'
											isLink
											type='reset'
											onClick={formikLegalEntity.resetForm}>
											Reset
										</Button>
									</CardFooterLeft>
									<CardFooterRight>
										<Button
											type='submit'
											icon='Save'
											color='info'
											isOutline
											isDisable={
												!formikLegalEntity.isValid &&
												!!formikLegalEntity.submitCount
											}>
											Save
										</Button>
									</CardFooterRight>
								</CardFooter>
							</Card>
						)}
						{TABS.NOTIFICATIONS === activeTab && (
							<Card	stretch
							tag='form'
							noValidate
							// onSubmit={formikLegalEntity.handleSubmit}
							>
							<CardHeader>
								<CardLabel icon='Notifications' iconColor='info'>
									<CardTitle>{TABS.NOTIFICATIONS}</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody className='pb-0' isScrollable>

								<div className='row g-4'>
										<div className='col-12'>
											<FormGroup>
												<Label htmlFor='Notification'>
													 Notification
												</Label>
												<ChecksGroup>
													{notificationTypes.map((cat) => (
														<Checks
															type='switch'
															key={cat.id}
															id={cat.id.toString()}
															name='notifications'
															label={cat.name}
															value={cat.id}
															onChange={formikNotification.handleChange}
															checked={formikNotification.values.notifications.includes(
																cat.id.toString(),
															)}
														/>
													))}
												</ChecksGroup>
											</FormGroup>
										</div>
									</div>
							</CardBody>
							<CardFooter>
									<CardFooterLeft>
										<Button
											color='info'
											isLink
											type='reset'
											onClick={formikLegalEntity.resetForm}>
											Reset
										</Button>
									</CardFooterLeft>
									<CardFooterRight>
										<Button
											type='submit'
											icon='Save'
											color='info'
											isOutline
											isDisable={
												!formikLegalEntity.isValid &&
												!!formikLegalEntity.submitCount
											}>
											Save
										</Button>
									</CardFooterRight>
								</CardFooter>
							</Card>
						)}
			
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default UserPage;
