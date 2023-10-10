import classNames from "classnames";
import dayjs from "dayjs";
import { FC, useState } from "react";
import data from "../../../../common/data/dummyEventsData";
import EVENT_STATUS from "../../../../common/data/enumEventStatus";
import PaginationButtons, {
  PER_COUNT,
  dataPagination,
} from "../../../../components/PaginationButtons";
import Button from "../../../../components/bootstrap/Button";
import Card, {
  CardActions,
  CardBody,
  CardHeader,
  CardLabel,
  CardTitle,
} from "../../../../components/bootstrap/Card";
import Dropdown, {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "../../../../components/bootstrap/Dropdown";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "../../../../components/bootstrap/Modal";
import Icon from "../../../../components/icon/Icon";
import useDarkMode from "../../../../hooks/useDarkMode";
import useLang from "../../../../hooks/useLang";
import useSortableData from "../../../../hooks/useSortableData";

interface ICommonConnectionsTableProps {
  isFluid?: boolean;
  handleUpcomingEdit?: any;
  withActions?: boolean;
}
const CommonConnectionsTable: FC<ICommonConnectionsTableProps> = ({
  isFluid,
  handleUpcomingEdit,
  withActions = false,
}) => {
  const { themeStatus, darkModeStatus } = useDarkMode();

  // END :: Upcoming Events

  const [currentPage, setCurrentPage] = useState(1);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [perPage, setPerPage] = useState(PER_COUNT["5"]);
  const { items, requestSort, getClassNamesFor } = useSortableData(data);

  return (
    <>
      <Card stretch={isFluid}>
        <CardHeader borderSize={1}>
          <CardLabel icon="Link" iconColor="info">
            <CardTitle tag="div" className="h5">
              {useLang("Connections")}
            </CardTitle>
          </CardLabel>
        </CardHeader>
        <CardBody className="table-responsive" isScrollable={isFluid}>
          <table className="table table-modern">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">{useLang("Connection")}</th>
                <th className="text-center"
                  // onClick={() => requestSort("date")}
                  // className="cursor-pointer text-decoration-underline"
                >
                  {useLang("Date added")} 
                </th>
                <th className="text-center">{useLang("Active Streams")}</th>
                <th className="text-center">{useLang("Status")}</th>
                {withActions && <td />}
              </tr>
            </thead>
            <tbody>
              {dataPagination(items, currentPage, perPage).map((item) => (
                <tr key={item.id}>
                  <td className="text-center">{item.id}</td>
                  <td className="text-center">{item.service.name}</td>
                  <td className="text-center">
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="text-nowrap">
                        {dayjs(`${item.date} ${item.time}`).format(
                          "MMM Do YYYY, h:mm a"
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="text-center">{item.payment}</td>
                  <td className="text-center">
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
                  {withActions && (
                    <td>
                      <div className="row g-3 justify-content-end">
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
                            onClick={() => setDeleteModalOpen(true)}
                          />
                        </div>
                      </div>
                    </td>
                  )}
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
      <Modal
        isOpen={deleteModalOpen}
        setIsOpen={setDeleteModalOpen}
        isCentered={true}
        titleId="example-title"
      >
        <ModalHeader>
          <ModalTitle id="example-title">{useLang("Title")}</ModalTitle>
        </ModalHeader>
        <ModalBody>{useLang("Remove Title")}</ModalBody>
        <ModalFooter>
          <Button
            color="info"
            isLink={true}
            onClick={() => setDeleteModalOpen(false)}
          >
            {useLang("Close")}
          </Button>
          <Button
            color="info"
            icon="Delete"
            onClick={() => setDeleteModalOpen(false)}
          >
            {useLang("Remove")}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
CommonConnectionsTable.defaultProps = {
  isFluid: false,
};

export default CommonConnectionsTable;
