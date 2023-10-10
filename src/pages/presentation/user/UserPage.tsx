import classNames from "classnames";
import dayjs from "dayjs";
import { useState } from "react";
import {
  View as TView,
  Views,
  dayjsLocalizer
} from "react-big-calendar";
import { useNavigate } from "react-router-dom";
import eventList, { IEvents } from "../../../common/data/events";
import USERS from "../../../common/data/userDummyData";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/bootstrap/Button";
import Card, {
  CardBody,
  CardHeader,
  CardLabel,
  CardSubTitle,
  CardTitle
} from "../../../components/bootstrap/Card";
import {
  getLabel,
  getUnitType,
  getViews
} from "../../../components/extras/calendarHelper";
import Icon from "../../../components/icon/Icon";
import useLang from "../../../hooks/useLang";
import Page from "../../../layout/Page/Page";
import PageWrapper from "../../../layout/PageWrapper/PageWrapper";
import SubHeader, {
  SubHeaderLeft,
  SubheaderSeparator
} from "../../../layout/SubHeader/SubHeader";
import { TColor } from "../../../type/color-type";
import AccountDetailCard from "./common/AccountDetailCard";
import LegalEntitiesDetailsCard from "./common/LegalEntitiesDetailsCard";
import NotificationsDetailsCard from "./common/NotificationsDetailsCard";

const localizer = dayjsLocalizer(dayjs);
const now = new Date();

const MyEvent = (data: { event: IEvents }) => {
  const { event } = data;
  return (
    <div className="row g-2">
      <div className="col text-truncate">
        {event.icon && <Icon icon={event.icon} size="lg" className="me-2" />}
        {event.name}
      </div>
    </div>
  );
};

const MyWeekEvent = (data: { event: IEvents }) => {
  const { event } = data;
  return (
    <div className="row g-2">
      <div className="col-12 text-truncate">
        {event.icon && <Icon icon={event.icon} size="lg" className="me-2" />}
        {event.name}
      </div>
    </div>
  );
};

type TTabs = "Account Details" | "Legal Entities" | "Notifications";
interface ITabs {
  [key: string]: TTabs;
}
const UserPage = () => {

  const navigate = useNavigate();

  const TABS: ITabs = {
    ACCOUNT_DETAIL: "Account Details",
    LEGAL_ENTITIES: "Legal Entities",
    NOTIFICATIONS: "Notifications",
  };
  const [activeTab, setActiveTab] = useState<TTabs>(TABS.ACCOUNT_DETAIL);



  //
  // Events
  const [events, setEvents] = useState<IEvents[]>(eventList);
  // Selected Event
  const [eventItem, setEventItem] = useState<IEvents | null>(null);
  // Calendar View Mode
  const [viewMode, setViewMode] = useState<TView>(Views.MONTH);
  // Calendar Date
  const [date, setDate] = useState<Date>(new Date());
  // Item edit panel status
  const [toggleInfoEventCanvas, setToggleInfoEventCanvas] =
    useState<boolean>(false);
  const setInfoEvent = () => setToggleInfoEventCanvas(!toggleInfoEventCanvas);
  // Calendar Unit Type
  const unitType = getUnitType(viewMode);
  // Calendar Date Label
  const calendarDateLabel = getLabel(date, viewMode);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const eventStyleGetter = (
    event: { color?: TColor },
    start: Date,
    end: Date,
    isSelected: boolean
  ): { className: string } => {
    const isActiveEvent = start <= now && end >= now;
    const isPastEvent = end < now;
    const color = isActiveEvent ? "success" : event.color;

    return {
      className: classNames({
        [`bg-l10-${color} text-${color}`]: color,
        "border border-success": isActiveEvent,
        "opacity-50": isPastEvent,
      }),
    };
  };

  const handleViewMode = (e: dayjs.ConfigType) => {
    setDate(dayjs(e).toDate());
    setViewMode(Views.DAY);
  };

  // View modes; Month, Week, Work Week, Day and Agenda
  const views = getViews();

  // New Event
  const handleSelect = ({ start, end }: { start: Date; end: Date }) => {
    // eslint-disable-next-line no-alert
    const title = window.prompt("New Event name");
    if (title)
      setEvents([
        ...events,
        {
          start,
          end,
          title,
        },
      ]);
  };

  return (
    <PageWrapper title={"User"}>
      <SubHeader>
        <SubHeaderLeft>
          <Button
            color="info"
            isLink
            icon="ArrowBack"
            onClick={() => navigate(-1)}
          >
            {useLang("Back")}
          </Button>
          <SubheaderSeparator />
          <Avatar srcSet={USERS.CHLOE.srcSet} src={USERS.CHLOE.src} size={32} />
          <span>
            <strong> {`${USERS.CHLOE.name} ${USERS.CHLOE.surname}`}</strong>
          </span>
        </SubHeaderLeft>
      </SubHeader>
      <Page container="fluid">
        <div className="row h-100">
          <div className="col-xxl-3 col-xl-4 col-lg-6">
            <Card stretch>
              <CardHeader>
                <CardLabel icon="Person" iconColor="info">
                  <CardTitle tag="div" className="h5">
                    {useLang("Account Settings")}
                  </CardTitle>
                  <CardSubTitle tag="div" className="h6">
                    {useLang("Personal Information")}
                  </CardSubTitle>
                </CardLabel>
              </CardHeader>
              <CardBody isScrollable>
                <div className="row g-3">
                  <div className="col-12">
                    <Button
                      icon="Contacts"
                      color="info"
                      className="w-100 p-3"
                      isLight={TABS.ACCOUNT_DETAIL !== activeTab}
                      onClick={() => setActiveTab(TABS.ACCOUNT_DETAIL)}
                    >
                      {useLang(`${TABS.ACCOUNT_DETAIL}`)}
                    </Button>
                  </div>
                  <div className="col-12">
                    <Button
                      icon="Policy"
                      color="info"
                      className="w-100 p-3"
                      isLight={TABS.LEGAL_ENTITIES !== activeTab}
                      onClick={() => setActiveTab(TABS.LEGAL_ENTITIES)}
                    >
                      {useLang(`${TABS.LEGAL_ENTITIES}`)}
                    </Button>
                  </div>
                  <div className="col-12">
                    <Button
                      icon="Notifications"
                      color="info"
                      className="w-100 p-3"
                      isLight={TABS.NOTIFICATIONS !== activeTab}
                      onClick={() => setActiveTab(TABS.NOTIFICATIONS)}
                    >
                      {useLang(`${TABS.NOTIFICATIONS}`)}
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="col-xxl-9 col-xl-8 col-lg-6">
            {TABS.ACCOUNT_DETAIL === activeTab && <AccountDetailCard />}
            {TABS.LEGAL_ENTITIES === activeTab && <LegalEntitiesDetailsCard />}
            {TABS.NOTIFICATIONS === activeTab && (
              <NotificationsDetailsCard />
            )}
          </div>
        </div>
      </Page>
    </PageWrapper>
  );
};

export default UserPage;
