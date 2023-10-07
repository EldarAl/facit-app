import PageWrapper from "../../../layout/PageWrapper/PageWrapper";
import Page from "../../../layout/Page/Page";
import CommonDatabaseProductItem from "./common/CommonDatabaseProductItem";
import BeveledCone from "../../../assets/img/abstract/beveled-cone.png";
import CloudBall from "../../../assets/img/abstract/cloud-ball.png";
import Quadrilateral from "../../../assets/img/abstract/quadrilateral.png";
import HardSharpDonut from "../../../assets/img/abstract/hald-sharp-donut.png";
import CommonDatabaseConnectionsTable from "./common/CommonDatabaseConnectionsTable";
import useLang from "../../../hooks/useLang";
import OffCanvas, {
  OffCanvasBody,
  OffCanvasHeader,
  OffCanvasTitle,
} from "../../../components/bootstrap/OffCanvas";
import Button from "../../../components/bootstrap/Button";
import FormGroup from "../../../components/bootstrap/forms/FormGroup";
import Select from "../../../components/bootstrap/forms/Select";
import classNames from "classnames";
import Input from "../../../components/bootstrap/forms/Input";
import { useState } from "react";
import useDarkMode from "../../../hooks/useDarkMode";
import { FormikHelpers, useFormik } from "formik";
import Card, { CardBody, CardFooter } from "../../../components/bootstrap/Card";
import Checks from "../../../components/bootstrap/forms/Checks";

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
      customerName: "Alison Berry",
      service: "Exercise Bike",
      location: "Maryland",
      time: "10:30",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut nisi odio. Nam sit amet pharetra enim. Nulla facilisi. Nunc dictum felis id massa mattis pretium. Mauris at blandit orci. Nunc vulputate vulputate turpis vitae cursus. In sit amet turpis tincidunt, interdum ex vitae, sollicitudin massa. Maecenas eget dui molestie, ullamcorper ante vel, tincidunt nisi. Donec vitae pulvinar risus. In ultricies nisl ac massa malesuada, vel tempus neque placerat.",
      notify: true,
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

          <CommonDatabaseConnectionsTable handleEdit={() => {
              setIsEdit(true);
              setDatabaseFormCanvas(true);
            }} />

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
                            size={"lg"}
                            onChange={formik.handleChange}
                            // value={formik.values.connectionName}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-4">
                        <FormGroup id="port" label={useLang("Port")}>
                          <Input
                            size={"lg"}
                            onChange={formik.handleChange}
                            // value={formik.values.connectionName}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-12">
                        <FormGroup id="databse" label={useLang("Database")}>
                          <Input
                            size={"lg"}
                            onChange={formik.handleChange}
                            // value={formik.values.connectionName}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-12">
                        <FormGroup id="user" label={useLang("User")}>
                          <Input
                            size={"lg"}
                            onChange={formik.handleChange}
                            // value={formik.values.connectionName}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-12">
                        <FormGroup id="password" label={useLang("Password")}>
                          <Input
                            size={"lg"}
                            onChange={formik.handleChange}
                            // value={formik.values.connectionName}
                          />
                        </FormGroup>
                      </div>
                      <div className="col-12">
                          <Checks type="checkbox" checked  label={useLang("Use SSL")} onChange={()=>{}}/>
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter className="justify-center">
                    <Button className="m-auto" color="info" >{useLang("Download certifiate")}</Button>
                  </CardFooter>
                </Card>
              </div>
            </OffCanvasBody>
            <div className="row m-0">
            <div className="col-6 py-3">
                <Button
                  color="light"
                  className="w-100"
                >
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
