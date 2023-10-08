import React from 'react'
import Card, { CardBody, CardFooter, CardFooterLeft, CardFooterRight, CardHeader, CardLabel, CardTitle } from '../../../../components/bootstrap/Card'
import useLang from '../../../../hooks/useLang'
import Button from '../../../../components/bootstrap/Button'
import FormGroup from '../../../../components/bootstrap/forms/FormGroup'
import Input from '../../../../components/bootstrap/forms/Input'
import Avatar from '../../../../components/Avatar'
import User1Webp from "../../../../assets/img/wanna/wanna2.webp";
import User1Img from "../../../../assets/img/wanna/wanna2.png";
import { useFormik } from 'formik'
import showNotification from '../../../../components/extras/showNotification'
import Icon from '../../../../components/icon/Icon'
import validate from '../helper/editPagesValidate'
import CommonDesc from '../../../../common/other/CommonDesc'
const AccountDetailCard = () => {

  const formik = useFormik({
    initialValues: {
      firstName: "John",
      lastName: "Doe",
      emailAddress: "johndoe@site.com",
      phoneNumber: "+123456789",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: () => {
      showNotification(
        <span className="d-flex align-items-center">
          <Icon icon="Info" size="lg" className="me-1" />
          <span>Updated Successfully</span>
        </span>,
        "The user's account details have been successfully updated."
      );
    },
  });


  return (
    <Card
    stretch
    tag="form"
    noValidate
    onSubmit={formik.handleSubmit}
  >
    <CardHeader>
      <CardLabel icon="Contacts" iconColor="info">
        <CardTitle tag="div" className="h5">
          {useLang("Account Details")}
        </CardTitle>
      </CardLabel>
    </CardHeader>
    <CardBody isScrollable>
      <Card>
        <CardBody>
          <div className="row g-4 align-items-center">
            <div className="col-xl-auto">
              <Avatar srcSet={User1Webp} src={User1Img} />
            </div>
            <div className="col-xl">
              <div className="row g-4">
                <div className="col-auto">
                  <Input
                    type="file"
                    autoComplete="photo"
                    ariaLabel="Upload image file"
                  />
                </div>
                <div className="col-auto">
                  <Button color="dark" isLight icon="Delete">
                    {useLang("Delete Avatar")}
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <CardLabel icon="Edit" iconColor="warning">
            <CardTitle tag="div" className="h5">
              {useLang('Personal Information')}
            </CardTitle>
          </CardLabel>
        </CardHeader>
        <CardBody>
          <div className="row g-4">
            <div className="col-lg-6">
              <FormGroup
                id="firstName"
                label={useLang("First Name")}
                isFloating
              >
                <Input
                  placeholder={useLang("First Name")}
                  autoComplete="additional-name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  isValid={formik.isValid}
                  isTouched={formik.touched.firstName}
                  invalidFeedback={formik.errors.firstName}
                  validFeedback="Looks good!"
                />
              </FormGroup>
            </div>
            <div className="col-lg-6">
              <FormGroup id="lastName" label={useLang("Last Name")} isFloating>
                <Input
                  placeholder={useLang("Last Name")}
                  autoComplete="family-name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  isValid={formik.isValid}
                  isTouched={formik.touched.lastName}
                  invalidFeedback={formik.errors.lastName}
                  validFeedback="Looks good!"
                />
              </FormGroup>
            </div>
            <div className="col-lg-6">
              <FormGroup
                id="phoneNumber"
                label={useLang("Phone number")}
                isFloating
              >
                <Input
                  placeholder={useLang("Phone number")}
                  autoComplete="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  isValid={formik.isValid}
                  isTouched={formik.touched.phoneNumber}
                  invalidFeedback={formik.errors.phoneNumber}
                  validFeedback="Looks good!"
                />
              </FormGroup>
            </div>
            <div className="col-lg-6">
              <FormGroup
                id="emailAddress"
                label={useLang("Email address")}
                isFloating
              >
                <Input
                  type="email"
                  placeholder={useLang("Email address")}
                  autoComplete="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.emailAddress}
                  isValid={formik.isValid}
                  isTouched={formik.touched.emailAddress}
                  invalidFeedback={formik.errors.emailAddress}
                  validFeedback="Looks good!"
                />
              </FormGroup>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <CardLabel icon="LocalPolice" iconColor="success">
            <CardTitle tag="div" className="h5">
              {useLang("Password Change")}
            </CardTitle>
          </CardLabel>
        </CardHeader>
        <CardBody>
          <div className="row g-4">
            <div className="col-xl-4">
              <FormGroup
                id="currentPassword"
                label={useLang("Current password")}
                isFloating
              >
                <Input
                  type="password"
                  placeholder={useLang("Current password")}
                  autoComplete="current-password"
                  onChange={formik.handleChange}
                  value={formik.values.currentPassword}
                />
              </FormGroup>
            </div>
            <div className="col-xl-4">
              <FormGroup
                id="newPassword"
                label={useLang("New password")}
                isFloating
              >
                <Input
                  type="password"
                  placeholder={useLang("New password")}
                  autoComplete="new-password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.newPassword}
                  isValid={formik.isValid}
                  isTouched={formik.touched.newPassword}
                  invalidFeedback={formik.errors.newPassword}
                  validFeedback="Looks good!"
                />
              </FormGroup>
            </div>
            <div className="col-xl-4">
              <FormGroup
                id="confirmPassword"
                label={useLang("Confirm new password")}
                isFloating
              >
                <Input
                  type="password"
                  placeholder={useLang("Confirm new password")}
                  autoComplete="new-password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  isValid={formik.isValid}
                  isTouched={formik.touched.confirmPassword}
                  invalidFeedback={formik.errors.confirmPassword}
                  validFeedback="Looks good!"
                />
              </FormGroup>
            </div>
          </div>
        </CardBody>
        <CardFooter>
          <CommonDesc>{useLang("Password Alert")}</CommonDesc>
        </CardFooter>
      </Card>
    </CardBody>
    <CardFooter>
      <CardFooterLeft>
        <Button
          color="info"
          isLink
          type="reset"
          onClick={formik.resetForm}
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
          isDisable={!formik.isValid && !!formik.submitCount}
        >
          {useLang("Save")}
        </Button>
      </CardFooterRight>
    </CardFooter>
  </Card>
  )
}

export default AccountDetailCard