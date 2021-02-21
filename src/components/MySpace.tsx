import React, { useEffect, useState } from "react";
import { Col, Grid, Row } from "rsuite";
import { KPTRow } from ".";
import { KPTItem } from "../data";

const privateKptItems = [
  {
    itemId: "8",
    title: "残業時間が多い",
    tag: {
      color: "blue",
      value: "会社",
    },
  },
  {
    itemId: "9",
    title: "ランニングを二回できた",
    tag: {
      color: "red",
      value: "運動",
    },
  },
  {
    itemId: "10",
    title: "眠い",
    tag: {
      color: "green",
      value: "睡眠",
    },
  },
];

export const MySpace = () => {
  const [data, setData] = useState<KPTItem[]>([]);
  useEffect(() => {
    setData(privateKptItems);
  }, []);

  return (
    <div style={{ height: 100 }}>
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={8} sm={8} md={8} lg={6}>
            <h4>My Private Space</h4>
            <KPTRow data={data} handleTagRemove={null} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
