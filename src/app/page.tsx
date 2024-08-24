import { Col, Row } from "antd";
import Navigator from "./components/navigator/Navigator";

export default function Home() {
  return (
    <main className="h-dvh bg-bg-color dark:bg-dark-bg-color w-full">
      <Row>
        <Navigator />
        <Col span={23}>
          <div id="part-1" style={{ height: "100vh" }}>
            Page 1
          </div>
          <div id="part-2" style={{ height: "100vh" }}>
            Page 2
          </div>
          <div id="part-3" style={{ height: "100vh" }}>
            Page 3
          </div>
        </Col>
      </Row>
    </main>
  );
}
