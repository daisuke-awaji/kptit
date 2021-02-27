import React, { useEffect, useState } from "react";
import { Col, Grid, Row } from "rsuite";
import { KPTRow } from ".";
import { KPTItem, privateKptItems } from "../data";

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
