import React, { FC, useState } from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import { FormikHelpers, useFormik } from "formik";
import Card, {
  CardActions,
  CardBody,
  CardHeader,
  CardLabel,
  CardTitle,
} from "../../../../components/bootstrap/Card";
import Button from "../../../../components/bootstrap/Button";
import { priceFormat } from "../../../../helpers/helpers";
import Dropdown, {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "../../../../components/bootstrap/Dropdown";
import Icon from "../../../../components/icon/Icon";
import OffCanvas, {
  OffCanvasBody,
  OffCanvasHeader,
  OffCanvasTitle,
} from "../../../../components/bootstrap/OffCanvas";
import FormGroup from "../../../../components/bootstrap/forms/FormGroup";
import Input from "../../../../components/bootstrap/forms/Input";
import Textarea from "../../../../components/bootstrap/forms/Textarea";
import Checks from "../../../../components/bootstrap/forms/Checks";
import Popovers from "../../../../components/bootstrap/Popovers";
import data from "../../../../common/data/dummyEventsData";
import USERS from "../../../../common/data/userDummyData";
import EVENT_STATUS from "../../../../common/data/enumEventStatus";
import Avatar from "../../../../components/Avatar";
import PaginationButtons, {
  dataPagination,
  PER_COUNT,
} from "../../../../components/PaginationButtons";
import useSortableData from "../../../../hooks/useSortableData";
import useDarkMode from "../../../../hooks/useDarkMode";
import Select from "../../../../components/bootstrap/forms/Select";
import HardSharpDonut from "../../../../assets/img/abstract/hald-sharp-donut.png";
import CommonDatabaseProductItem from "./CommonDatabaseProductItem";

interface ICommonDatabaseConnectionsTableProps {
  isFluid?: boolean;
	handleUpcomingEdit: any
}
const CommonDatabaseConnectionsTable: FC<
  ICommonDatabaseConnectionsTableProps
> = ({ isFluid, handleUpcomingEdit }) => {
  const { themeStatus, darkModeStatus } = useDarkMode();

  // END :: Upcoming Events



  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(PER_COUNT["5"]);
  const { items, requestSort, getClassNamesFor } = useSortableData(data);

  return (
    <>
      <Card stretch={isFluid}>
        <CardHeader borderSize={1}>
          <CardLabel icon="Link" iconColor="info">
            <CardTitle tag="div" className="h5">
              Connections
            </CardTitle>
          </CardLabel>
          <CardActions>
            <Button
              color="info"
              icon="CloudDownload"
              isLight
              tag="a"
              to="/somefile.txt"
              target="_blank"
              download
            >
              Export
            </Button>
          </CardActions>
        </CardHeader>
        <CardBody className="table-responsive" isScrollable={isFluid}>
          <table className="table table-modern">
            <thead>
              <tr>
                <th>#</th>
                <th>Connections</th>
                <th
                  onClick={() => requestSort("date")}
                  className="cursor-pointer text-decoration-underline"
                >
                  Date / Time{" "}
                  <Icon
                    size="lg"
                    className={getClassNamesFor("date")}
                    icon="FilterList"
                  />
                </th>
                <th>Active Streams</th>
                <th>Status</th>
                <td />
              </tr>
            </thead>
            <tbody>
              {dataPagination(items, currentPage, perPage).map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.service.name}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span
                        className={classNames(
                          "badge",
                          "border border-2",
                          [`border-${themeStatus}`],
                          "rounded-circle",
                          "bg-success",
                          "p-2 me-2",
                          `bg-${item.status.color}`
                        )}
                      >
                        <span className="visually-hidden">
                          {item.status.name}
                        </span>
                      </span>
                      <span className="text-nowrap">
                        {dayjs(`${item.date} ${item.time}`).format(
                          "MMM Do YYYY, h:mm a"
                        )}
                      </span>
                    </div>
                  </td>
                  <td>{item.payment}</td>
                  <td>
                    <Dropdown>
                      <DropdownToggle hasIcon={false}>
                        <Button
                          isLink
                          color={item.status.color}
                          icon="Circle"
                          className="text-nowrap"
                        >
                          {item.status.name}
                        </Button>
                      </DropdownToggle>
                      <DropdownMenu>
                        {Object.keys(EVENT_STATUS).map((key) => (
                          <DropdownItem key={key}>
                            <div>
                              <Icon
                                icon="Circle"
                                color={EVENT_STATUS[key].color}
                              />
                              {EVENT_STATUS[key].name}
                            </div>
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  </td>
                  <td>
                    <div className="row g-3">
                      <div className="col-auto">
                        <Button
                          isOutline={!darkModeStatus}
                          color="dark"
                          isLight={darkModeStatus}
                          className={classNames("text-nowrap", {
                            "border-light": !darkModeStatus,
                          })}
                          icon="Edit"
                          onClick={handleUpcomingEdit}
                        />
                      </div>
                      <div className="col-auto">
                        <Button
                          isOutline={!darkModeStatus}
                          color="dark"
                          isLight={darkModeStatus}
                          className={classNames("text-nowrap", {
                            "border-light": !darkModeStatus,
                          })}
                          icon="Refresh"
                          // onClick={handleUpcomingEdit}
                        />
                      </div>
                      <div className="col-auto">
                        <Button
                          isOutline={!darkModeStatus}
                          color="dark"
                          isLight={darkModeStatus}
                          className={classNames("text-nowrap", {
                            "border-light": !darkModeStatus,
                          })}
                          icon="Close"
                          // onClick={handleUpcomingEdit}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
        <PaginationButtons
          data={items}
          label="items"
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          perPage={perPage}
          setPerPage={setPerPage}
        />
      </Card>


    </>
  );
};
CommonDatabaseConnectionsTable.defaultProps = {
  isFluid: false,
};

export default CommonDatabaseConnectionsTable;
