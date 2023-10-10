import CommonDashboardUserCard from "./common/CommonDashboardUserCard";
import useLang from "../../../hooks/useLang";
import Page from "../../../layout/Page/Page";
import PageWrapper from "../../../layout/PageWrapper/PageWrapper";
import CommonConnectionsTable from "../connections/common/CommonConnectionsTable";
import CommonDatabaseTable from "../data-base/common/CommonDatabaseTable";
import CommonDashboardSalesByStore from "./common/CommonDashboardSalesByStore";

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
