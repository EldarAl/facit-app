import { FormikHelpers, useFormik } from "formik";
import { useState } from "react";
import BeveledCone from "../../../assets/img/abstract/beveled-cone.png";
import CloudBall from "../../../assets/img/abstract/cloud-ball.png";
import HardSharpDonut from "../../../assets/img/abstract/hald-sharp-donut.png";
import Quadrilateral from "../../../assets/img/abstract/quadrilateral.png";
import Button from "../../../components/bootstrap/Button";
import Card, { CardBody, CardFooter } from "../../../components/bootstrap/Card";
import OffCanvas, {
  OffCanvasBody,
  OffCanvasHeader,
  OffCanvasTitle,
} from "../../../components/bootstrap/OffCanvas";
import Checks from "../../../components/bootstrap/forms/Checks";
import FormGroup from "../../../components/bootstrap/forms/FormGroup";
import Input from "../../../components/bootstrap/forms/Input";
import useDarkMode from "../../../hooks/useDarkMode";
import useLang from "../../../hooks/useLang";
import Page from "../../../layout/Page/Page";
import PageWrapper from "../../../layout/PageWrapper/PageWrapper";
import CommonDatabaseProductItem from "./common/CommonDatabaseProductItem";
import CommonDatabaseTable from "./common/CommonDatabaseTable";

const data: {
  id: number;
  image: string;
  name: string;
}[] = [
  {
    id: 1,
    image: BeveledCone,
    name: "ClickHouse",
  },
  {
    id: 2,
    image: CloudBall,
    name: "Google BigQuery",
  },
  {
    id: 3,
    image: Quadrilateral,
    name: "PostgreSQL",
  },
  {
    id: 4,
    image: HardSharpDonut,
    name: "MySQL",
  },
];

const DataBasePage = () => {
  const { darkModeStatus } = useDarkMode();

  const [databaseFormCanvas, setDatabaseFormCanvas] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const formik = useFormik({
    onSubmit<Values>(
      values: Values,
      formikHelpers: FormikHelpers<Values>
    ): void | Promise<any> {
      return undefined;
    },
    initialValues: {
      host: "",
      port: "",
      database: "",
      user: "",
      password: "",
      ssl: true,
    },
  });

  return (
    <PageWrapper title={useLang("Database Page")}>
      <Page container="fluid">
        <div className="row">
          <div className="col-12">
            <div className="display-4 fw-bold py-3">
              {useLang("Data Bases")}
            </div>
          </div>
          <div className="col-12">
            <div className="display-6 fw-normal py-3">
              <p className="h2">{useLang("Database subtitle")}</p>
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
                    setDatabaseFormCanvas(true);
                  }}
                />
              </div>
            ))}
          </div>

          <CommonDatabaseTable
            withActions
            handleEdit={() => {
              setIsEdit(true);
              setDatabaseFormCanvas(true);
            }}
          />

          <OffCanvas
            setOpen={setDatabaseFormCanvas}
            isOpen={databaseFormCanvas}
            titleId="upcomingEdit"
            isBodyScroll
            placement="end"
          >
            <OffCanvasHeader setOpen={setDatabaseFormCanvas}>
              <OffCanvasTitle id="upcomingEdit" tag="h3">
                {isEdit ? useLang("Edit") : useLang("Add")}{" "}
                {useLang("Database Canvas title")}
              </OffCanvasTitle>
            </OffCanvasHeader>
            <OffCanvasBody>
              <div className="row g-4">
                <div className="col-12">
                  <p className="h5">Click House</p>
                  <img
                    src={HardSharpDonut}
                    alt=""
                    width={64}
                    height={64}
                    className="mx-auto d-block img-fluid mb-3"
                  />
                </div>
                <p className="h5">{useLang("Connection params")}:</p>
                <Card>
                  <CardBody>
                    <div className="row g-3">
                      <div className="col-8">
                        <FormGroup id="host" label={useLang("Host")}>
                          <Input
                            onChange={formik.handleChange}
                            value={formik.values.host}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-4">
                        <FormGroup id="port" label={useLang("Port")}>
                          <Input
                            onChange={formik.handleChange}
                            value={formik.values.port}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-12">
                        <FormGroup id="database" label={useLang("Database")}>
                          <Input
                            onChange={formik.handleChange}
                            value={formik.values.database}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-12">
                        <FormGroup id="user" label={useLang("User")}>
                          <Input
                            onChange={formik.handleChange}
                            value={formik.values.user}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-12">
                        <FormGroup id="password" label={useLang("Password")}>
                          <Input
                            onChange={formik.handleChange}
                            value={formik.values.password}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-12">
                        <Checks
                          type="checkbox"
                          id="ssl"
                          name={"ssl"}
                          label={useLang("Use SSL")}
                          onChange={formik.handleChange}
                          checked={formik.values.ssl}
                        />
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter className="justify-center">
                    <Button className="m-auto" color="info">
                      {useLang("Download certifiate")}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </OffCanvasBody>
            <div className="row m-0">
              <div className="col-6 py-3">
                <Button color="light" className="w-100">
                  {useLang("Do test")}
                </Button>
              </div>
              <div className="col-6 py-3">
                <Button
                  color="info"
                  className="w-100"
                  onClick={() => setDatabaseFormCanvas(false)}
                >
                  {useLang("Add")}
                </Button>
              </div>
            </div>
          </OffCanvas>
        </div>
      </Page>
    </PageWrapper>
  );
};

export default DataBasePage;
