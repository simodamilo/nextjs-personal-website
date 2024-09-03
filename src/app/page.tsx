import { Col, Row } from "antd";
import Navigator from "./components/navigator/Navigator";
import Homepage from "./pages/homepage/Homepage";
import Experience from "./pages/experience/Experience";

export default function Home() {
  return (
    <main className="h-dvh w-full">
      <Row className="bg-bg-color dark:bg-dark-bg-color">
        <Navigator />
        <Col span={24} md={{ span: 23 }}>
          <div id="part-1" style={{ height: "100vh" }}>
            <Homepage />
          </div>
          <div id="part-2" style={{ height: "100vh" }}>
            <Experience />
          </div>
          <div id="part-3" style={{ height: "100vh" }}>
            Page 3
          </div>
        </Col>
      </Row>
    </main>
  );
}
