import classNames from "classnames";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import { FC, useCallback, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import USERS, {
  getUserDataWithUsername,
} from "../../../common/data/userDummyData";
import Logo from "../../../components/Logo";
import Button from "../../../components/bootstrap/Button";
import Card, { CardBody } from "../../../components/bootstrap/Card";
import FormGroup from "../../../components/bootstrap/forms/FormGroup";
import Input from "../../../components/bootstrap/forms/Input";
import AuthContext from "../../../contexts/authContext";
import useDarkMode from "../../../hooks/useDarkMode";
import useLang from "../../../hooks/useLang";
import Page from "../../../layout/Page/Page";
import PageWrapper from "../../../layout/PageWrapper/PageWrapper";

interface ILoginHeaderProps {
  isNewUser?: boolean;
}
const LoginHeader: FC<ILoginHeaderProps> = ({ isNewUser }) => {
  if (isNewUser) {
    return (
      <>
        <div className="text-center h1 fw-bold mt-5">{useLang("Create Account")},</div>
        <div className="text-center h4 text-muted mb-5">
          {useLang("Sign up title")}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="text-center h1 fw-bold mt-5">{useLang("Welcome")},</div>
      <div className="text-center h4 text-muted mb-5">{useLang("Sign in title")}!</div>
    </>
  );
};
LoginHeader.defaultProps = {
  isNewUser: false,
};

interface ILoginProps {
  isSignUp?: boolean;
}
const Login: FC<ILoginProps> = ({ isSignUp }) => {
  const { setUser } = useContext(AuthContext);

  const { darkModeStatus } = useDarkMode();

  const [signInPassword, setSignInPassword] = useState<boolean>(false);
  const [singUpStatus, setSingUpStatus] = useState<boolean>(!!isSignUp);

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/"), [navigate]);

  const usernameCheck = (username: string) => {
    return !!getUserDataWithUsername(username);
  };

  const passwordCheck = (username: string, password: string) => {
    return getUserDataWithUsername(username).password === password;
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      loginUsername: "",
      loginPassword: "",
    },
    // validate: (values) => {
    //   const errors: { loginUsername?: string; loginPassword?: string } = {};

    //   if (!values.loginUsername) {
    //     errors.loginUsername = "Required";
    //   }

    //   if (!values.loginPassword) {
    //     errors.loginPassword = "Required";
    //   }

    //   return errors;
    // },
    // validateOnChange: false,
    onSubmit: (values) => {

						handleOnClick();
      // if (usernameCheck(values.loginUsername)) {
      //   if (passwordCheck(values.loginUsername, values.loginPassword)) {
      //     if (setUser) {
      //       setUser(values.loginUsername);
      //     }

      //     handleOnClick();
      //   } else {
      //     formik.setFieldError(
      //       "loginPassword",
      //       "Username and password do not match."
      //     );
      //   }
      // }
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (
        !Object.keys(USERS).find(
          (f) => USERS[f].username.toString() === formik.values.loginUsername
        )
      ) {
        formik.setFieldError(
          "loginUsername",
          "No such user or password found in the system."
        );
      } else {
        setSignInPassword(true);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <PageWrapper
      isProtected={false}
      title={singUpStatus ? useLang("Sign Up") : useLang("Login")}
      className={classNames({
        "bg-dark": !singUpStatus,
        "bg-primary": singUpStatus,
      })}
    >
      <Page className="p-0">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-8 shadow-3d-container">
            <Card className="shadow-3d-dark" data-tour="login-page">
              <CardBody>
                <div className="text-center my-5">
                  <Link
                    to="/"
                    className={classNames(
                      "text-decoration-none  fw-bold display-2",
                      {
                        "text-dark": !darkModeStatus,
                        "text-light": darkModeStatus,
                      }
                    )}
                    aria-label="Facit"
                  >
                    <Logo width={200} />
                  </Link>
                </div>
                <div
                  className={classNames("rounded-3", {
                    "bg-l10-dark": !darkModeStatus,
                    "bg-dark": darkModeStatus,
                  })}
                >
                  <div className="row row-cols-2 g-3 pb-3 px-3 mt-0">
                    <div className="col">
                      <Button
                        color={darkModeStatus ? "light" : "dark"}
                        isLight={singUpStatus}
                        className="rounded-1 w-100"
                        size="lg"
                        onClick={() => {
                          setSignInPassword(false);
                          setSingUpStatus(!singUpStatus);
                        }}
                      >
                        {useLang("Login")}
                      </Button>
                    </div>
                    <div className="col">
                      <Button
                        color={darkModeStatus ? "light" : "dark"}
                        isLight={!singUpStatus}
                        className="rounded-1 w-100"
                        size="lg"
                        onClick={() => {
                          setSignInPassword(false);
                          setSingUpStatus(!singUpStatus);
                        }}
                      >
                        {useLang("Sign Up")}
                      </Button>
                    </div>
                  </div>
                </div>

                <LoginHeader isNewUser={singUpStatus} />

                <form className="row g-4">
                  {singUpStatus ? (
                    <>
                      <div className="col-12">
                        <FormGroup
                          id="signup-email"
                          isFloating
                          label={useLang("Your email")}
                        >
                          <Input type="email" autoComplete="email" />
                        </FormGroup>
                      </div>

                      <div className="col-12">
                        <FormGroup
                          id="signup-password"
                          isFloating
                          label={useLang("Password")}
                        >
                          <Input type="password" autoComplete="password" />
                        </FormGroup>
                      </div>
                      <div className="col-12">
                        <Button
                          color="info"
                          className="w-100 py-3"
                          onClick={handleOnClick}
                        >
                          {useLang("Sign Up")}
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-12">
                        <FormGroup
                          id="loginUsername"
                          isFloating
                          label={useLang("Your email")}
                        >
                          <Input
                            autoComplete="username"
                            value={formik.values.loginUsername}
                            isTouched={formik.touched.loginUsername}
                            invalidFeedback={formik.errors.loginUsername}
                            isValid={formik.isValid}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            onFocus={() => {
                              formik.setErrors({});
                            }}
                          />
                        </FormGroup>
                     
                      </div>
											<div className="col-12">
                          <FormGroup
                            id="loginPassword"
                            isFloating
                            label={useLang("Password")}
                          >
                            <Input
                              type="password"
                              autoComplete="current-password"
                              value={formik.values.loginPassword}
                              isTouched={formik.touched.loginPassword}
                              invalidFeedback={formik.errors.loginPassword}
                              validFeedback="Looks good!"
                              isValid={formik.isValid}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </FormGroup>
                        </div>
                      <div className="col-12">
                        <Button
                          color="warning"
                          className="w-100 py-3"
                          onClick={formik.handleSubmit}
                        >
                          {useLang("Login")}
                        </Button>
                      </div>
                    </>
                  )}

                  {/* BEGIN :: Social Login */}
                  {!signInPassword && (
                    <>
                      <div className="col-12 mt-3 text-center text-muted">
                        {useLang("OR")}
                      </div>
                      <div className="col-12 mt-3">
                        <Button
                          isOutline
                          color={darkModeStatus ? "light" : "dark"}
                          className={classNames("w-100 py-3", {
                            "border-light": !darkModeStatus,
                            "border-dark": darkModeStatus,
                          })}
                          icon="CustomApple"
                          onClick={handleOnClick}
                        >
                          {useLang("Sign in with Apple")}
                        </Button>
                      </div>
                      <div className="col-12">
                        <Button
                          isOutline
                          color={darkModeStatus ? "light" : "dark"}
                          className={classNames("w-100 py-3", {
                            "border-light": !darkModeStatus,
                            "border-dark": darkModeStatus,
                          })}
                          icon="CustomGoogle"
                          onClick={handleOnClick}
                        >
                          {useLang("Continue with Google")}
                        </Button>
                      </div>
                    </>
                  )}
                  {/* END :: Social Login */}
                </form>
              </CardBody>
            </Card>
            <div className="text-center">
              <a
                href="/"
                className={classNames("text-decoration-none me-3", {
                  "link-light": singUpStatus,
                })}
              >
                {useLang("Privacy policy")}
              </a>
              <a
                href="/"
                className={classNames(" text-decoration-none", {
                  "link-light": singUpStatus,
                })}
              >
                {useLang("Terms of use")}
              </a>
            </div>
          </div>
        </div>
      </Page>
    </PageWrapper>
  );
};
Login.propTypes = {
  isSignUp: PropTypes.bool,
};
Login.defaultProps = {
  isSignUp: false,
};

export default Login;
