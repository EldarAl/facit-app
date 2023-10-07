import PageWrapper from "../../../layout/PageWrapper/PageWrapper";
import Page from "../../../layout/Page/Page";
import CommonDatabaseProductItem from "./common/CommonDatabaseProductItem";
import BeveledCone from "../../../assets/img/abstract/beveled-cone.png";
import CloudBall from "../../../assets/img/abstract/cloud-ball.png";
import Quadrilateral from "../../../assets/img/abstract/quadrilateral.png";
import HardSharpDonut from "../../../assets/img/abstract/hald-sharp-donut.png";
import CommonDatabaseConnectionsTable from "./common/CommonDatabaseConnectionsTable";
import OffCanvas, {
  OffCanvasBody,
  OffCanvasHeader,
  OffCanvasTitle,
} from "../../../components/bootstrap/OffCanvas";
import classNames from "classnames";
import { FormikHelpers, useFormik } from "formik";
import useDarkMode from "../../../hooks/useDarkMode";

import { useState } from "react";
import Button from "../../../components/bootstrap/Button";
import FormGroup from "../../../components/bootstrap/forms/FormGroup";
import Select from "../../../components/bootstrap/forms/Select";
import Input from "../../../components/bootstrap/forms/Input";
import useLang from "../../../hooks/useLang";
const data: {
  id: number;
  image: string;
  name: string;
}[] = [
  {
    id: 1,
    image: Quadrilateral,
    name: "Yandex Direct",
  },
  {
    id: 2,
    image: HardSharpDonut,
    name: "Yandex Metrics",
  },
  {
    id: 3,
    image: BeveledCone,
    name: "AppMetrica",
  },
  {
    id: 4,
    image: CloudBall,
    name: "VK",
  },
];

const CoonectionsePage = () => {
  const { darkModeStatus } = useDarkMode();

  const [upcomingEventsEditOffcanvas, setUpcomingEventsEditOffcanvas] =
    useState(false);
  const [isEdit, setIsEdit] = useState(false);
  // const handleUpcomingEdit = () => {
  //   setUpcomingEventsEditOffcanvas(!upcomingEventsEditOffcanvas);
  // };

  const formik = useFormik({
    onSubmit<Values>(
      values: Values,
      formikHelpers: FormikHelpers<Values>
    ): void | Promise<any> {
      return undefined;
    },
    initialValues: {
      connectionName: "Yandex",
      service: "Exercise Bike",
    },
  });

  return (
    <PageWrapper title={useLang("Connections")}>
      <Page container="fluid">
        <div className="row">
          <div className="col-12">
            <div className="display-4 fw-bold py-3">
              {useLang("Connections")}
            </div>
          </div>
          <div className="col-12">
            <div className="display-6 fw-normal py-3">
              <p className="h2 ">{useLang("Connections Title")}</p>
            </div>
          </div>
          <div className="row">
            {data.map((item) => (
              <div key={item.id} className="col-xxl-3 col-xl-4 col-md-6">
                <CommonDatabaseProductItem
                  id={item.id}
                  name={item.name}
                  img={item.image}
                  onClick={() => {
                    setIsEdit(false);
                    setUpcomingEventsEditOffcanvas(true);
                  }}
                />
              </div>
            ))}
          </div>

          <CommonDatabaseConnectionsTable
            handleUpcomingEdit={() => {
              setIsEdit(true);
              setUpcomingEventsEditOffcanvas(true);
            }}
          />
          <OffCanvas
            setOpen={setUpcomingEventsEditOffcanvas}
            isOpen={upcomingEventsEditOffcanvas}
            titleId="upcomingEdit"
            isBodyScroll
            placement="end"
          >
            <OffCanvasHeader setOpen={setUpcomingEventsEditOffcanvas}>
              <OffCanvasTitle id="upcomingEdit" tag="h3">
                {isEdit ? useLang("Edit") : useLang("Add")}{" "}
                {useLang("Connection").toLowerCase()}
              </OffCanvasTitle>
            </OffCanvasHeader>
            <OffCanvasBody>
              <div className="row g-4">
                <div className="col-12">
                  <p className="h5">Yandex Metrics</p>
                  <img
                    src={HardSharpDonut}
                    alt=""
                    width={64}
                    height={64}
                    className="mx-auto d-block img-fluid mb-3"
                  />
                </div>
                <div className="col-8 mx-auto">
                  {" "}
                  <Button
                    color="info"
                    className="w-100"
                    // onClick={() => setUpcomingEventsEditOffcanvas(false)}
                  >
                    {useLang("Connect")}
                  </Button>
                </div>
                <div className="col-8">
                  <FormGroup id="account" label={useLang("Account")}>
                    <Select
                      id="account"
                      size="lg"
                      ariaLabel="Account"
                      placeholder={useLang("Select Account")}
                      list={data.map((c) => {
                        return { value: c.id, text: c.name };
                      })}
                      className={classNames("rounded-1", {
                        "bg-white": !darkModeStatus,
                      })}
                      // onChange={(e: { target: { value: any } }) => {
                      //   formik.handleChange(e);

                      //   if (e.target.value)
                      //     debounce(
                      //       () =>
                      //         onFormSubmit({
                      //           ...formik.values,
                      //           category: e.target.value,
                      //         }),
                      //       1000
                      //     )();
                      // }}
                      // value={formik.values.category}
                    />
                  </FormGroup>
                </div>
                <div className="col-12">
                  <FormGroup
                    id="connectionName"
                    label={useLang("Connection name")}
                  >
                    <Input
                      size={"lg"}
                      onChange={formik.handleChange}
                      value={formik.values.connectionName}
                    />
                  </FormGroup>
                </div>
              </div>
            </OffCanvasBody>
            <div className="row m-0">
              <div className="col-12 p-3">
                <Button
                  color="info"
                  className="w-100"
                  onClick={() => setUpcomingEventsEditOffcanvas(false)}
                >
                  {useLang("Save")}
                </Button>
              </div>
            </div>
          </OffCanvas>
        </div>
      </Page>
    </PageWrapper>
  );
};

export default CoonectionsePage;
