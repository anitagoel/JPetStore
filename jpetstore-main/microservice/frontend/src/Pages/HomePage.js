import { Row, Col } from "react-bootstrap";

import { HomePageList } from "../Components/index";
import splashGif from "../Assets/images/splash.gif";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Row md={12} className="bg-white">
        <Col md={4}>
          <HomePageList />
        </Col>
        <Col>
          <div>
            <div id="MainImage">
              <div id="MainImageContent">
                <map name="estoremap">
                  <Link to="/catalogue/birds">
                    <area alt="Birds" coords="72,2,280,250" shape="RECT" />
                  </Link>
                  <Link to="/catalogue/fish">
                    <area alt="Fish" coords="2,180,72,250" shape="RECT" />
                  </Link>
                  <Link to="/catalogue/dogs">
                    <area alt="Dogs" coords="60,250,130,320" shape="RECT" />
                  </Link>
                  <Link to="/catalogue/reptiles">
                    <area
                      alt="Reptiles"
                      coords="140,270,210,340"
                      shape="RECT"
                    />
                  </Link>
                  <Link to="/catalogue/cats">
                    <area alt="Cats" coords="225,240,295,310" shape="RECT" />
                  </Link>
                  <Link to="/catalogue/birds">
                    <area alt="Birds" coords="280,180,350,250" shape="RECT" />
                  </Link>
                </map>
                <img
                  height="355"
                  src={splashGif}
                  align="middle"
                  useMap="#estoremap"
                  width="350"
                />
              </div>
            </div>

            <div id="Separator">&nbsp;</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default HomePage;
