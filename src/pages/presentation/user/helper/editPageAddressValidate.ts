interface IValues {
	addressLine: string;
	companyName: string,
	legalEntity: string;
}

const validateAddress = (values: IValues) => {
	const errors: IValues = {
		addressLine: '',
		companyName: '',
		legalEntity: '',
	};
	if (!values.addressLine) {
		errors.addressLine = 'Required';
	} else if (values.addressLine.length < 10) {
		errors.addressLine = 'Must be 10 characters or more';
	} else if (values.addressLine.length > 50) {
		errors.addressLine = 'Must be 50 characters or less';
	}

	if (!values.companyName) {
		errors.companyName = 'Required';
	} else if (values.companyName.length < 3) {
		errors.companyName = 'Must be 3 characters or more';
	} else if (values.companyName.length > 20) {
		errors.companyName = 'Must be 20 characters or less';
	}

	if (!values.legalEntity) {
		errors.legalEntity = 'Required';
	} else if (values.legalEntity.length < 3) {
		errors.legalEntity = 'Must be 3 characters or more';
	} else if (values.legalEntity.length > 20) {
		errors.legalEntity = 'Must be 20 characters or less';
	}

	return errors;
};

export default validateAddress;
