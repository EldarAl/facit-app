import PageWrapper from "../../../layout/PageWrapper/PageWrapper";
import Page from "../../../layout/Page/Page";
import CommonDatabaseProductItem from "./common/CommonDatabaseProductItem";
import BeveledCone from "../../../assets/img/abstract/beveled-cone.png";
import CloudBall from "../../../assets/img/abstract/cloud-ball.png";
import Quadrilateral from "../../../assets/img/abstract/quadrilateral.png";
import HardSharpDonut from "../../../assets/img/abstract/hald-sharp-donut.png";
import CommonDatabaseConnectionsTable from "./common/CommonDatabaseConnectionsTable";

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
  return (
    <PageWrapper title="Database Page">
      <Page container="fluid">
        <div className="row">
          <div className="col-12">
            <div className="display-4 fw-bold py-3">Database</div>
          </div>
          <div className="col-12">
            <div className="display-6 fw-normal py-3">
              <p className="h2">Start by adding a database</p>
            </div>
          </div>
          <div className="row">
            {data.map((item) => (
              <div key={item.id} className="col-xxl-3 col-xl-4 col-md-6">
                <CommonDatabaseProductItem
                  id={item.id}
                  name={item.name}
                  img={item.image}
                />
              </div>
            ))}
          </div>

          <CommonDatabaseConnectionsTable />
        </div>
      </Page>
    </PageWrapper>
  );
};

export default DataBasePage;
