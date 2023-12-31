import classNames from 'classnames';
import { useFormik } from 'formik';
import { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '../../../components/bootstrap/Badge';
import Card, { CardBody, CardTitle } from '../../../components/bootstrap/Card';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';

import useDarkMode from '../../../hooks/useDarkMode';
import useLang from '../../../hooks/useLang';
import useTourStep from '../../../hooks/useTourStep';
import { pageLayoutTypesPagesMenu } from '../../../menu';
import { TColor } from '../../../type/color-type';
import data, { TTags } from './helper/dummyKnowledgeData';

interface IItemProps {
	id: string | number;
	image: string;
	title: string;
	description: string;
	tags: TTags[];
	color: TColor;
}
const Item: FC<IItemProps> = ({ id, image, title, description, tags, color }) => {
	useTourStep(15);
	const { darkModeStatus } = useDarkMode();

	const navigate = useNavigate();
	const handleOnClick = useCallback(
		() => navigate(`../${pageLayoutTypesPagesMenu.help.path}/${id}`),
		[navigate, id],
	);
	return (
		<Card
			className='cursor-pointer shadow-3d-primary shadow-3d-hover'
			onClick={handleOnClick}
			data-tour={title}>
			<CardBody>
				<div
					className={classNames(
						'ratio ratio-1x1',
						'rounded-2',
						`bg-l${darkModeStatus ? 'o25' : '10'}-${color}`,
						'mb-3',
					)}>
					<img
						src={image}
						alt=''
						width='100%'
						height='auto'
						className='object-fit-contain p-3'
					/>
				</div>
				<CardTitle tag='div' className='h5'>
					{title}
				</CardTitle>
				<p className='text-muted truncate-line-2'>{description}</p>
				<div className='row g-2'>
					{!!tags &&
						// eslint-disable-next-line react/prop-types
						tags.map((tag) => (
							<div key={tag.text} className='col-auto'>
								<Badge isLight color={tag.color} className='px-3 py-2'>
									{tag.text}
								</Badge>
							</div>
						))}
				</div>
			</CardBody>
		</Card>
	);
};

const KnowledgeGridPage = () => {
	const { darkModeStatus } = useDarkMode();

	const [filterableData, setFilterableData] = useState(data);

	const searchAndFilterData = (searchValue: string, category: string) => {
		let tempData = data;

		if (category)
			tempData = data.filter((item) =>
				item.categories.find((categ) => categ.value === category),
			);

		return tempData.filter((item) => {
			return (
				item.title.toLowerCase().includes(searchValue) ||
				item.description.toLowerCase().includes(searchValue) ||
				item.content.toLowerCase().includes(searchValue) ||
				item.categories.find((categ) => categ.text.toLowerCase().includes(searchValue)) ||
				item.tags.find((tag) => tag.text.toLowerCase().includes(searchValue))
			);
		});
	};

	const debounce = (func: any, wait: number | undefined) => {
		let timeout: string | number | NodeJS.Timeout | undefined;

		return function executedFunction(...args: any[]) {
			const later = () => {
				clearTimeout(timeout);
				func(...args);
			};

			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	};

	const onFormSubmit = (values: { category: any; search: any }) => {
		const searchValue = values.search.toString().toLowerCase();
		const newData = searchAndFilterData(searchValue, values.category);

		if (!values.search && !values.category) {
			setFilterableData(data);
		} else {
			setFilterableData(newData);
		}
	};

	const formik = useFormik({
		initialValues: {
			search: '',
			category: '',
		},
		onSubmit: onFormSubmit,
		onReset: () => setFilterableData(data),
	});

	return (
		<PageWrapper title={pageLayoutTypesPagesMenu.help.text}>
			<Page>
				<div className='row'>
					<div className='col-12 text-center my-5'>
						<span className='display-5 fw-bold'>{useLang("Help subtitle")}</span>
					</div>
				</div>
				<div className='row mb-5'>
					{filterableData.map((item) => (
						<div key={item.id} className='col-xl-3 col-lg-4 col-md-6'>
							{/* eslint-disable-next-line react/jsx-props-no-spreading */}
							<Item {...item} />
						</div>
					))}
				</div>
			</Page>
		</PageWrapper>
	);
};

export default KnowledgeGridPage;
