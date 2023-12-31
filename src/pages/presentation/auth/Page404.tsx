import { useNavigate } from 'react-router-dom';
import Humans from '../../../assets/img/scene4.png';
import HumansWebp from '../../../assets/img/scene4.webp';
import Button from '../../../components/bootstrap/Button';
import useLang from '../../../hooks/useLang';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';

const Page404 = () => {
	const navigate = useNavigate()
	return (
		<PageWrapper title={useLang("Page not found")}>
			<Page>
				<div className='row d-flex align-items-center h-100'>
					<div className='col-12 d-flex flex-column justify-content-center align-items-center'>
						<div
							className='text-primary fw-bold'
							style={{ fontSize: 'calc(3rem + 3vw)' }}>
							404
						</div>
						<div
							className='text-primary fw-bold'
							style={{ fontSize: 'calc(1.5rem + 1.5vw)' }}>
							{useLang("Page not found")}
						</div>
					</div>
					<div className='col-12 d-flex align-items-baseline justify-content-center'>
						<img
							srcSet={HumansWebp}
							src={Humans}
							alt='Humans'
							style={{ height: '50vh' }}
						/>
					</div>
					<div className='col-12 d-flex flex-column justify-content-center align-items-center'>
						<Button
							className='px-5 py-3'
							color='primary'
							isLight
							icon='HolidayVillage'
							tag='a'
							onClick={()=> navigate('/')}
							>
							{useLang("Homepage")}
						</Button>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default Page404;
