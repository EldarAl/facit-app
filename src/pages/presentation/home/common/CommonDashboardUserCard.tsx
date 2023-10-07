import React from 'react';
import { useNavigate } from 'react-router-dom';
import USERS from '../../../../common/data/userDummyData';
import { demoPagesMenu } from '../../../../menu';
import UserContact from '../../../../components/UserContact';
import PlanLogo from '../../../../assets/img/abstract/beveled-cube.png'
import useLang from '../../../../hooks/useLang';
const CommonDashboardUserCard = () => {

	return (
		<UserContact
			name={ `${useLang("Plan")}: ${useLang("Pro")}`}
			position='01.11.2023'
			src={PlanLogo}
			srcSet={PlanLogo}
			color={USERS.SAM.color}
		/>
	);
};

export default CommonDashboardUserCard;
