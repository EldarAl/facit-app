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

const DashboardPage = () => {
  return (
    <PageWrapper title="Dashboard Page">
      <Page container="fluid">
        <div className="row">
          <div className="col-xl-4">
            <CommonDashboardUserCard />
          </div>
          <div className="col-xxl-8">
            <CommonDashboardSalesByStore />
          </div>
          <div className="col-xxl-6">
            <CommonDashboardTopSeller title="Connections"/>
          </div>
          <div className="col-xxl-6">
            <CommonDashboardTopSeller title="Data Bases" />
          </div>
        </div>
      </Page>
    </PageWrapper>
  );
};

export default DashboardPage;
