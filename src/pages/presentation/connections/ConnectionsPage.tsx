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
    image: Quadrilateral,
    name: "Yandex Direct",
  },
  {
    id: 2,
    image: HardSharpDonut,
    name: "Yandex Metrics",
  },
  {
    id: 3,
    image: BeveledCone,
    name: "AppMetrica",
  },
  {
    id: 4,
    image: CloudBall,
    name: "VK",
  },
];

const CoonectionsePage = () => {
  return (
    <PageWrapper title="Database Page">
      <Page container="fluid">
        <div className="row">
          <div className="col-12">
            <div className="display-4 fw-bold py-3">Connections</div>
          </div>
          <div className="col-12">
            <div className="display-6 fw-normal py-3">
              <p className="h2 ">
                Add the necessary connections to services
              </p>
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

export default CoonectionsePage;
