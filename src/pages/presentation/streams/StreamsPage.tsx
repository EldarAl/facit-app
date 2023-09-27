import PageWrapper from "../../../layout/PageWrapper/PageWrapper";
import Page from "../../../layout/Page/Page";
import CommonDatabaseProductItem from "./common/CommonDatabaseProductItem";
import BeveledCone from "../../../assets/img/abstract/beveled-cone.png";
import CloudBall from "../../../assets/img/abstract/cloud-ball.png";
import Quadrilateral from "../../../assets/img/abstract/quadrilateral.png";
import HardSharpDonut from "../../../assets/img/abstract/hald-sharp-donut.png";
import CommonDatabaseConnectionsTable from "./common/CommonDatabaseConnectionsTable";
import Input from "../../../components/bootstrap/forms/Input";
import Button from "../../../components/bootstrap/Button";
import { useFormik } from "formik";
import classNames from "classnames";
import useDarkMode from "../../../hooks/useDarkMode";
import Select from "../../../components/bootstrap/forms/Select";

const StreamsPage = () => {
  const { darkModeStatus } = useDarkMode();

  const formik = useFormik({
    initialValues: {
      search: "",
      category: "",
    },
    onSubmit: () => {},
    // onReset: () => setFilterableData(data),
  });

  const debounce = (func: any, wait: number | undefined) => {
    let timeout: string | number | NodeJS.Timeout | undefined;

    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const onFormSubmit = (values: { category: any; search: any }) => {
    const searchValue = values.search.toString().toLowerCase();
    // const newData = searchAndFilterData(searchValue, values.category);

    // if (!values.search && !values.category) {
    // 	setFilterableData(data);
    // } else {
    // 	setFilterableData(newData);
    // }
  };

  type TCategories = { value: string; text: string };
  const CATEGORIES: { [key: string]: TCategories } = {
    DOCUMENTATION: {
      value: "documentation",
      text: "Documentation",
    },
    SETTINGS: {
      value: "settings",
      text: "Settings",
    },
    COLORS: {
      value: "colors",
      text: "Colors",
    },
  };

  return (
    <PageWrapper title="Database Page">
      <Page container="fluid">
        <div className="row">
          <div className="col-12">
            <div className="display-4 fw-bold py-3">Streams</div>
          </div>
          <div className="col-8">
            <div className="display-6 fw-normal py-3">
              <p className="h2">
                Stream is a configured flow of data between a connection and a
                database. Add the streams you want here
              </p>
           
            </div>
          </div>
          <div
                className="col-xxl-6 mx-auto text-center my-5"
                data-tour="knowledge-filter"
              >
                <form
                  className={classNames(
                    "row",
                    "pb-4 px-3 mx-0 g-4",
                    "rounded-3",
                    [`bg-l${darkModeStatus ? "o25" : "10"}-primary`]
                  )}
                  onSubmit={formik.handleSubmit}
                >
                                    <div className="col-md-5">
                  <Select
                      id="connection"
                      size="lg"
                      ariaLabel="Connection"
                      placeholder="Connection"
                      list={Object.keys(CATEGORIES).map((c) => CATEGORIES[c])}
                      className={classNames("rounded-1", {
                        "bg-white": !darkModeStatus,
                      })}
                      onChange={(e: { target: { value: any } }) => {
                        formik.handleChange(e);

                        if (e.target.value)
                          debounce(
                            () =>
                              onFormSubmit({
                                ...formik.values,
                                category: e.target.value,
                              }),
                            1000
                          )();
                      }}
                      value={formik.values.category}
                    />
                  </div>
                  <div className="col-md-5">
                    <Select
                      id="database"
                      size="lg"
                      ariaLabel="Database"
                      placeholder="Database"
                      list={Object.keys(CATEGORIES).map((c) => CATEGORIES[c])}
                      className={classNames("rounded-1", {
                        "bg-white": !darkModeStatus,
                      })}
                      onChange={(e: { target: { value: any } }) => {
                        formik.handleChange(e);

                        if (e.target.value)
                          debounce(
                            () =>
                              onFormSubmit({
                                ...formik.values,
                                category: e.target.value,
                              }),
                            1000
                          )();
                      }}
                      value={formik.values.category}
                    />
                  </div>

                  <div className="col-md-2">
                    <Button
                      size="lg"
                      
                      color="primary"
                      className="w-100"
                      rounded={1}
                      onClick={formik.resetForm}
                      type="submit"
                      // isDisable={
                      //   !(formik.values.search || formik.values.category)
                      // }
                      aria-label="Submit"
                    >Add</Button>
                  </div>
                </form>
              </div>

          <CommonDatabaseConnectionsTable />
        </div>
      </Page>
    </PageWrapper>
  );
};

export default StreamsPage;
