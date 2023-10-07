import React, { FC } from 'react';
import { ApexOptions } from 'apexcharts';
import Card, {
	CardActions,
	CardBody,
	CardFooter,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';
import Chart from '../../../../components/extras/Chart';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';
import Badge from '../../../../components/bootstrap/Badge';
import { priceFormat } from '../../../../helpers/helpers';
import showNotification from '../../../../components/extras/showNotification';
import Icon from '../../../../components/icon/Icon';
import { demoPagesMenu } from '../../../../menu';
import useDarkMode from '../../../../hooks/useDarkMode';
import useLang from '../../../../hooks/useLang';

interface ICommonDatabaseProductItemProps {
	id: string | number;
	name: string;
	img: string;
	onClick: any
	
}
const CommonDatabaseProductItem: FC<ICommonDatabaseProductItemProps> = ({
	id,
	name,
	img,
	onClick
}) => {
	const { themeStatus, darkModeStatus } = useDarkMode();


	return (
		<Card>
			<CardHeader>
				<CardLabel>
					<CardTitle tag='div' className='h5'>
						{name}{' '}
					</CardTitle>
				</CardLabel>
			</CardHeader>
			<CardBody>
				<img
					src={img}
					alt=''
					width={128}
					height={128}
					className='mx-auto d-block img-fluid mb-3'
				/>
			</CardBody>
			<CardFooter className='shadow-3d-container'>
				<Button
					color='dark'
					className={`w-100 mb-4 shadow-3d-up-hover shadow-3d-${
						darkModeStatus ? 'light' : 'dark'
					}`}
					size='lg'
					tag='button'
					onClick={onClick}
					// to={`../${demoPagesMenu.sales.subMenu.productID.path}/${id}`}
          >
					{useLang("Add")} 
				</Button>
			</CardFooter>
		</Card>
	);
};

export default CommonDatabaseProductItem;
