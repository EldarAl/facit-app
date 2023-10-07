import Card, { CardBody, CardFooter, CardFooterLeft, CardFooterRight, CardHeader, CardLabel, CardTitle } from '../../../../components/bootstrap/Card'
import useLang from '../../../../hooks/useLang'
import Button from '../../../../components/bootstrap/Button'
import FormGroup from '../../../../components/bootstrap/forms/FormGroup'
import Input from '../../../../components/bootstrap/forms/Input'
import { useFormik } from 'formik'
import showNotification from '../../../../components/extras/showNotification'
import Icon from '../../../../components/icon/Icon'
import validateAddress from '../helper/editPageAddressValidate'
const LegalEntitiesDetailsCard = () => {

  const formikLegalEntity = useFormik({
    initialValues: {
      companyName: "Yandex",
      addressLine: "259 Street",
      legalEntity: "123456789",
    },
    validate: validateAddress,
    onSubmit: () => {
      showNotification(
        <span className="d-flex align-items-center">
          <Icon icon="Info" size="lg" className="me-1" />
          <span>Updated Successfully</span>
        </span>,
        "The user's address have been successfully updated."
      );
    },
  });

  return (
    <Card
    stretch
    tag="form"
    noValidate
    onSubmit={formikLegalEntity.handleSubmit}
  >
    <CardHeader>
      <CardLabel icon="Policy" iconColor="info">
        <CardTitle>{useLang("Legal Entities")}</CardTitle>
      </CardLabel>
    </CardHeader>
    <CardBody className="pb-0" isScrollable>
      <div className="row g-4">
        <div className="col-lg-12">
          <FormGroup
            id="companyName"
            label={useLang("Company name")}
            isFloating
          >
            <Input
              onChange={formikLegalEntity.handleChange}
              value={formikLegalEntity.values.companyName}
            />
          </FormGroup>
        </div>
        <div className="col-lg-12">
          <FormGroup
            id="addressLine"
            label={useLang("Address Line")}
            isFloating
          >
            <Input
              onChange={formikLegalEntity.handleChange}
              onBlur={formikLegalEntity.handleBlur}
              value={formikLegalEntity.values.addressLine}
              isValid={formikLegalEntity.isValid}
              isTouched={formikLegalEntity.touched.addressLine}
              invalidFeedback={formikLegalEntity.errors.addressLine}
              validFeedback="Looks good!"
            />
          </FormGroup>
        </div>
        <div className="col-lg-12">
          <FormGroup
            id="legalEntity"
            label={useLang("Details Entity")}
            isFloating
          >
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
          color="info"
          isLink
          type="reset"
          onClick={formikLegalEntity.resetForm}
        >
          {useLang("Reset")}
        </Button>
      </CardFooterLeft>
      <CardFooterRight>
        <Button
          type="submit"
          icon="Save"
          color="info"
          isOutline
          isDisable={
            !formikLegalEntity.isValid &&
            !!formikLegalEntity.submitCount
          }
        >
          {useLang("Save")}
        </Button>
      </CardFooterRight>
    </CardFooter>
  </Card>
  )
}

export default LegalEntitiesDetailsCard