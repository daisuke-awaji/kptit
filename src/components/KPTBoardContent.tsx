import React, { useEffect } from "react";
import { Col, Grid, Placeholder, Row } from "rsuite";
import { Card } from ".";
import { kptData, KPTData, KPTItem } from "../data";

export const KPTRow = (props: { data: KPTItem[]; handleTagRemove: any }) => {
  const { data, handleTagRemove } = props;
  if (!data.length) return null;
  return (
    <>
      {data.map((d) => (
        <Card
          key={d.itemId}
          title={d.title}
          tag={d.tag}
          style={{ backgroundColor: "white", marginBottom: 10 }}
          itemId={d.itemId}
          handleTagRemove={handleTagRemove}
        />
      ))}
    </>
  );
};

export const KPTBoard = () => {
  const [data, setData] = React.useState<KPTData[]>([]);
  useEffect(() => {
    setData(kptData);
  }, []);

  const handleTagRemove = (removedTagItemId: string) => {
    console.log(removedTagItemId);
  };

  return (
    <Grid fluid>
      <Row className="show-grid">
        {data.map((d) => (
          <Col xs={8} sm={8} md={8} lg={6} key={d.categoryId}>
            <h4>{d.categoryName}</h4>
            <KPTRow data={d.data} handleTagRemove={handleTagRemove} />
          </Col>
        ))}
        <Col xs={24} sm={24} md={24} lg={6}>
          <Placeholder.Paragraph rows={30} />
        </Col>
      </Row>
    </Grid>
  );
};
