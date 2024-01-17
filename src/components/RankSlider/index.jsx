import { Col, InputNumber, Row, Slider, Space } from "antd";

const RankSlider = () => {
  return (
    <Space
      style={{
        width: "100%",
      }}
      direction="vertical"
    >
      <Row>
        <Col span={2}>
          <InputNumber
            min={1}
            max={20}
            style={{
              margin: "0 16px",
            }}
          />
        </Col>
        <Col span={8}>
          <Slider
            range={{
              draggableTrack: true,
            }}
            defaultValue={[20, 50]}
            style={{ color: "red" }}
          />
        </Col>

        <Col span={2}>
          <InputNumber
            min={1}
            max={20}
            style={{
              margin: "0 16px",
            }}
          />
        </Col>
      </Row>
    </Space>
  );
};

export default RankSlider;
