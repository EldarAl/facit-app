import { useFormik } from "formik";
import Button from "../../../../components/bootstrap/Button";
import Card, {
  CardBody,
  CardFooter,
  CardFooterLeft,
  CardFooterRight,
  CardHeader,
  CardLabel,
  CardTitle,
} from "../../../../components/bootstrap/Card";
import Checks, {
  ChecksGroup,
} from "../../../../components/bootstrap/forms/Checks";
import FormGroup from "../../../../components/bootstrap/forms/FormGroup";
import Label from "../../../../components/bootstrap/forms/Label";
import useLang from "../../../../hooks/useLang";

const NotificationsDetailsCard = () => {

  const notificationTypes = [
    { id: 1, name: useLang("Newsletter") },
    { id: 2, name: useLang("Error Notifications") },
    { id: 3, name: useLang("Balance Notifications") },
  ];

  const formikNotification = useFormik({
    initialValues: {
      notifications: ["1", "3"],
    },
    onSubmit: () => {},
  });

  return (
    <Card
      stretch
      tag="form"
      noValidate
      // onSubmit={formikLegalEntity.handleSubmit}
    >
      <CardHeader>
        <CardLabel icon="Notifications" iconColor="info">
          <CardTitle>{useLang("Notifications")}</CardTitle>
        </CardLabel>
      </CardHeader>
      <CardBody className="pb-0" isScrollable>
        <div className="row g-4">
          <div className="col-12">
            <FormGroup>
              <Label htmlFor="Notification">{useLang("Notification")}</Label>
              <ChecksGroup>
                {notificationTypes.map((cat) => (
                  <Checks
                    type="switch"
                    key={cat.id}
                    id={cat.id.toString()}
                    name="notifications"
                    label={cat.name}
                    value={cat.id}
                    onChange={formikNotification.handleChange}
                    checked={formikNotification.values.notifications.includes(
                      cat.id.toString()
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
          <Button color="info" isLink type="reset" onClick={() => {}}>
            {useLang("Reset")}
          </Button>
        </CardFooterLeft>
        <CardFooterRight>
          <Button
            type="submit"
            icon="Save"
            color="info"
            isOutline
          >
            {useLang("Save")}
          </Button>
        </CardFooterRight>
      </CardFooter>
    </Card>
  );
};

export default NotificationsDetailsCard;
