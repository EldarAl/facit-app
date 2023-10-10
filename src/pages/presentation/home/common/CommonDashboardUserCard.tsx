import PlanLogo from '../../../../assets/img/abstract/beveled-cube.png';
import USERS from '../../../../common/data/userDummyData';
import UserContact from '../../../../components/UserContact';
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
