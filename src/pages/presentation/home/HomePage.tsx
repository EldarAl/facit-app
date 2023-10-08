import React from "react";
import CommonDashboardUserCard from "./common/CommonDashboardUserCard";

import PageWrapper from "../../../layout/PageWrapper/PageWrapper";
import SubHeader, {
  SubHeaderLeft,
  SubHeaderRight,
  SubheaderSeparator,
} from "../../../layout/SubHeader/SubHeader";
import Page from "../../../layout/Page/Page";
import Popovers from "../../../components/bootstrap/Popovers";
import CommonDashboardTopSeller from "./common/CommonDashboardTopSeller";
import CommonDashboardSalesByStore from "./common/CommonDashboardSalesByStore";
import Chart from "../../../components/extras/Chart";
import useLang from "../../../hooks/useLang";
import CommonConnectionsTable from "../connections/common/CommonConnectionsTable";
import CommonDatabaseTable from "../data-base/common/CommonDatabaseTable";

const HomePage = () => {
  return (
    <PageWrapper title={useLang("Home Page")}>
      <Page container="fluid">
        <div className="row">
          <div className="col-xl-4">
            <CommonDashboardUserCard />
          </div>
          <div className="col-xxl-8">
            <CommonDashboardSalesByStore />
          </div>
          <div className="col-xxl-6">
            {/* <CommonDashboardTopSeller title={useLang("Connections")}/> */}
            <CommonConnectionsTable  />
          </div>
          <div className="col-xxl-6">
            {/* <CommonDashboardTopSeller title={useLang("Data Bases")} /> */}
            <CommonDatabaseTable />
          </div>
        </div>
      </Page>
    </PageWrapper>
  );
};

export default HomePage;
