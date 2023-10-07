import React, { useState } from 'react';
import classNames from 'classnames';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubheaderSeparator } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import { demoPagesMenu } from '../../../menu';
import Card, { CardBody, CardHeader } from '../../../components/bootstrap/Card';
import Icon from '../../../components/icon/Icon';
import Button from '../../../components/bootstrap/Button';
import useDarkMode from '../../../hooks/useDarkMode';
import Breadcrumb from '../../../components/bootstrap/Breadcrumb';
import ScrollspyNav from '../../../components/bootstrap/ScrollspyNav';
import useLang from '../../../hooks/useLang';

const PlansPage = () => {
	const { darkModeStatus } = useDarkMode();
	const [activeElementId, setActiveElementId] = useState<string | null>(null);
	return (
		<PageWrapper title={useLang('Plans')}>

			<Page>
				<div id='first' className='row scroll-margin'>
					<div className='col-12 mb-3'>
						<div className='display-4 fw-bold py-3'></div>
					</div>
  
					<div className='col-md-3'>
						<Card>
							<CardBody>
								<div className='row pt-5 g-4 text-center'>
									<div className='col-12'>
										<Icon icon='CustomRocketLaunch' size='7x' color='info' />
									</div>
									<div className='col-12'>
										<h2>{useLang("Free")}</h2>
									</div>
									<div className='col-12'>
										<h3 className='display-1 fw-bold'>
											<span className='display-4 fw-bold'>$</span>0
											<span className='display-6'>/mo</span>
										</h3>
									</div>
									<div className='col-12'>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Exclusive
											Workspace
										</div>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Internet
											Connection
										</div>
										<div className='lead text-muted'>
											<Icon icon='Close' color='danger' /> Meeting Room
										</div>
										<div className='lead text-muted'>
											<Icon icon='Close' color='danger' /> Small Rest Room
										</div>
									</div>
									<div className='col-12'>
										<p>Lorem ipsum dolor sit amet.</p>
									</div>
									<div className='col-12'>
										<Button
											color='info'
											isLight
											className='w-100 py-3 text-uppercase'
											size='lg'>
											{useLang("Select Plan")}
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-md-3'>
						<Card>
							<CardBody>
								<div className='row pt-5 g-4 text-center'>
									<div className='col-12'>
										<Icon icon='Maps Home Work' size='7x' color='success' />
									</div>
									<div className='col-12'>
										<h2>{useLang("Starter")}</h2>
									</div>
									<div className='col-12'>
										<h3 className='display-1 fw-bold'>
											<span className='display-4 fw-bold'>$</span>239
											<span className='display-6'>/mo</span>
										</h3>
									</div>
									<div className='col-12'>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Exclusive
											Workspace
										</div>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Internet
											Connection
										</div>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Five
											Meeting Room
										</div>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Small Rest
											Room
										</div>
									</div>
									<div className='col-12'>
										<p>Lorem ipsum dolor sit amet.</p>
									</div>
									<div className='col-12'>
										<Button
											color='success'
											className='w-100 py-3 text-uppercase'
											size='lg'>
											{useLang("Select Plan")}
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-md-3'>
						<Card>
							<CardBody>
								<div className='row pt-5 g-4 text-center'>
									<div className='col-12'>
										<Icon icon='CustomFactory' size='7x' color='info' />
									</div>
									<div className='col-12'>
										<h2>{useLang("Standart")}</h2>
									</div>
									<div className='col-12'>
										<h3 className='display-1 fw-bold'>
											<span className='display-4 fw-bold'>$</span>339
											<span className='display-6'>/mo</span>
										</h3>
									</div>
									<div className='col-12'>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Exclusive
											Workspace
										</div>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Internet
											Connection
										</div>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Five
											Meeting Room
										</div>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Large Rest
											Room
										</div>
									</div>
									<div className='col-12'>
										<p>Lorem ipsum dolor sit amet.</p>
									</div>
									<div className='col-12'>
										<Button
											color='info'
											isLight
											className='w-100 py-3 text-uppercase'
											size='lg'>
											{useLang("Select Plan")}
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
          <div className='col-md-3'>
						<Card>
							<CardBody>
								<div className='row pt-5 g-4 text-center'>
									<div className='col-12'>
										<Icon icon='CustomRocketLaunch' size='7x' color='warning' />
									</div>
									<div className='col-12'>
										<h2>{useLang("Pro")}</h2>
									</div>
									<div className='col-12'>
										<h3 className='display-1 fw-bold'>
											<span className='display-4 fw-bold'>$</span>419
											<span className='display-6'>/mo</span>
										</h3>
									</div>
									<div className='col-12'>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Exclusive
											Workspace
										</div>
										<div className='lead'>
											<Icon icon='Done Outline' color='success' /> Internet
											Connection
										</div>
										<div className='lead text-muted'>
											<Icon icon='Close' color='danger' /> Meeting Room
										</div>
										<div className='lead text-muted'>
											<Icon icon='Close' color='danger' /> Small Rest Room
										</div>
									</div>
									<div className='col-12'>
										<p>Lorem ipsum dolor sit amet.</p>
									</div>
									<div className='col-12'>
										<Button
											color='info'
											isLight
											className='w-100 py-3 text-uppercase'
											size='lg'>
											{useLang("Select Plan")}
										</Button>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default PlansPage;
