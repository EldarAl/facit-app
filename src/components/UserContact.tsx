import React, { FC } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card, { CardBody } from './bootstrap/Card';
import Button from './bootstrap/Button';
import Avatar from './Avatar';
import { TColor } from '../type/color-type';

interface IUserContactProps {
	className?: string;
	name: string;
	position?: string;
	src: string;
	srcSet?: string;
	color?: TColor | 'link' | 'brand' | 'brand-two' | 'storybook';
}
const UserContact: FC<IUserContactProps> = ({
	name,
	position,
	src,
	srcSet,
	color,
	...props
}) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Card {...props} className={classNames(props.className)} >
			<CardBody className='d-flex align-items-center'>
				<div className='flex-grow-1'>
					<div className='fs-5 fw-bold'>{name}</div>
					{position && <div className='text-muted'>{position}</div>}
				</div>
				{(src || srcSet) && (
					<div className='flex-shrink-0'>
						<Avatar
							src={src}
							srcSet={srcSet}
							color={color}
							className='rounded-circle'
							shadow='sm'
							size={110}
						/>
					</div>
				)}
			</CardBody>
		</Card>
	);
};
UserContact.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	position: PropTypes.string,
	src: PropTypes.string.isRequired,
	srcSet: PropTypes.string,
	color: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
		'link',
		'brand',
		'brand-two',
		'storybook',
	]),

};
UserContact.defaultProps = {
	className: undefined,
	position: undefined,
	srcSet: undefined,
	color: undefined
};

export default UserContact;
