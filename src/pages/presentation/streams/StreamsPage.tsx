import classNames from "classnames";
import { useFormik } from "formik";
import { useState } from "react";
import Button from "../../../components/bootstrap/Button";
import Card, { CardBody } from "../../../components/bootstrap/Card";
import OffCanvas, {
  OffCanvasBody,
  OffCanvasHeader,
  OffCanvasTitle,
} from "../../../components/bootstrap/OffCanvas";
import Select from "../../../components/bootstrap/forms/Select";
import Icon from "../../../components/icon/Icon";
import useDarkMode from "../../../hooks/useDarkMode";
import useLang from "../../../hooks/useLang";
import Page from "../../../layout/Page/Page";
import PageWrapper from "../../../layout/PageWrapper/PageWrapper";
import CommonStreamsTable from "./common/CommonStreamsTable";

const StreamsPage = () => {
  const data: {
    id: number;
    name: string;
  }[] = [
    {
      id: 1,
      name: "1",
    },
    {
      id: 2,
      name: "2",
    },
    {
      id: 3,
      name: "3",
    },
    {
      id: 4,
      name: "4",
    },
  ];

  const { darkModeStatus } = useDarkMode();

  const [streamFormCanvas, setStreamFormCanvas] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

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
    <PageWrapper title={useLang("Streams")}>
      <Page container="fluid">
        <div className="row">
          <div className="col-12">
            <div className="display-4 fw-bold py-3">{useLang("Streams")}</div>
          </div>
          <div className="col-8">
            <div className="display-6 fw-normal py-3">
              <p className="h2">{useLang("Streams subtitle")}</p>
            </div>
          </div>
          <div
            className="col-xxl-6 mx-auto text-center my-5"
            data-tour="knowledge-filter"
          >
            <form
              className={classNames("row", "pb-4 px-3 mx-0 g-4", "rounded-3", [
                `bg-l${darkModeStatus ? "o25" : "10"}-primary`,
              ])}
              onSubmit={formik.handleSubmit}
            >
              <div className="col-md-4">
                <Select
                  id="connection"
                  size="lg"
                  ariaLabel="Connection"
                  placeholder={useLang("Connection")}
                  list={data.map((c) => {
                    return { value: c.id, text: c.name };
                  })}
                  className={classNames("rounded-1", {
                    "bg-white": !darkModeStatus,
                  })}
                />
              </div>
              <div className="col-md-1">
                <Icon icon="Trending Flat" size={"3x"} />
              </div>
              <div className="col-md-4">
                <Select
                  id="database"
                  size="lg"
                  ariaLabel="Database"
                  placeholder={useLang("Database")}
                  list={data.map((c) => {
                    return { value: c.id, text: c.name };
                  })}
                  className={classNames("rounded-1", {
                    "bg-white": !darkModeStatus,
                  })}
                />
              </div>

              <div className="col-md-3">
                <Button
                  size="lg"
                  color="primary"
                  className="w-100"
                  rounded={1}
                  onClick={() => setStreamFormCanvas(true)}
                  type="submit"
                  // isDisable={
                  //   !(formik.values.search || formik.values.category)
                  // }
                  aria-label="Submit"
                >
                  {useLang("Add")}
                </Button>
              </div>
            </form>
          </div>

          <CommonStreamsTable
            handleStreamEdit={() => {
              setStreamFormCanvas(true);
              setIsEdit(true);
            }}
          />

          <OffCanvas
            setOpen={setStreamFormCanvas}
            isOpen={streamFormCanvas}
            titleId="upcomingEdit"
            isBodyScroll
            placement="end"
          >
            <OffCanvasHeader setOpen={setStreamFormCanvas}>
              <OffCanvasTitle id="upcomingEdit" tag="h3">
                {isEdit ? useLang("Edit") : useLang("Add")}{" "}
                {useLang("Stream").toLowerCase()}
              </OffCanvasTitle>
            </OffCanvasHeader>
            <OffCanvasBody>
              <div className="row g-4">
                <div className="col-12">
                  <Select
                    id="connection"
                    size="lg"
                    ariaLabel="Account"
                    placeholder={useLang("Connection")}
                    list={data.map((c) => {
                      return { value: c.id, text: c.name };
                    })}
                    className={classNames("rounded-1 fs-6", {
                      "bg-white": !darkModeStatus,
                    })}
                  />
                </div>
                <div className="col-12 ">
                  <div className=" m-auto" style={{ maxWidth: "fit-content" }}>
                    <Icon icon="Vertical Align Bottom" size={"2x"} />
                  </div>
                </div>
                <div className="col-12">
                  <Select
                    id="database"
                    size="lg"
                    ariaLabel="Account"
                    placeholder={useLang("Database")}
                    list={data.map((c) => {
                      return { value: c.id, text: c.name };
                    })}
                    className={classNames("rounded-1 fs-6", {
                      "bg-white": !darkModeStatus,
                    })}
                  />
                </div>
                <div className="col-12">
                  <p className="fs-4 mt-5">{useLang("Launch Schedule")}</p>
                </div>
                <Card>
                  <CardBody>
                    <div className="row g-4">
                      <div
                        className="col-4 d-flex"
                        style={{ alignItems: "center" }}
                      >
                        <p className="fs-5 m-0"> {useLang("Every")}</p>{" "}
                      </div>
                      <div className="col-8">
                        <Select
                          id="day"
                          size="lg"
                          ariaLabel="Day"
                          placeholder={useLang("Day").toLowerCase()}
                          list={data.map((c) => {
                            return { value: c.id, text: c.name };
                          })}
                          className={classNames("rounded-1 fs-6", {
                            "bg-white": !darkModeStatus,
                          })}
                        />
                      </div>
                      <div
                        className="col-4 d-flex"
                        style={{ alignItems: "center" }}
                      >
                        <p className="fs-5 m-0">{useLang("In interval")}</p>
                      </div>
                      <div className="col-8">
                        <Select
                          id="dateTime"
                          size="lg"
                          ariaLabel="DateTime"
                          placeholder={`${useLang(
                            "From"
                          ).toLowerCase()} 6:00 ${useLang(
                            "To"
                          ).toLowerCase()} 9:00`}
                          list={data.map((c) => {
                            return { value: c.id, text: c.name };
                          })}
                          className={classNames("rounded-1 fs-6", {
                            "bg-white": !darkModeStatus,
                          })}
                        />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </OffCanvasBody>
            <div className="row m-0">
              <div className="col-12 p-3">
                <Button
                  color="info"
                  className="w-100"
                  onClick={() => setStreamFormCanvas(false)}
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

export default StreamsPage;
