import React, { useCallback } from "react";
import { Col, Grid, Placeholder, Row } from "rsuite";
import { ContributeUsers } from ".";
import { kptData, GroupTypes, MoveHandler } from "../data";
import useGroupedItems from "../hooks/useGroupedItems";
import { Group } from "./Group";

export const KPTBoard = () => {
  const [groupedItems, items, setItems] = useGroupedItems(kptData);

  const moveItem: MoveHandler = useCallback(
    (dragIndex, targetIndex, group) => {
      const item = items[dragIndex];
      if (!item) return;
      setItems((prevState) => {
        const newItems = prevState.filter((_, idx) => idx !== dragIndex);
        newItems.splice(targetIndex, 0, { ...item, group });
        return newItems;
      });
    },
    [items, setItems]
  );

  let index = 0;
  return (
    <Grid fluid>
      <Row className="show-grid">
        {GroupTypes.map((group) => {
          const items = groupedItems[group];
          const firstIndex = index;
          if (items === undefined) return null;
          index = index + items.length;

          return (
            <Col key={group} xs={8} sm={8} md={8} lg={6}>
              <Group
                items={items}
                groupType={group}
                firstIndex={firstIndex}
                onMove={moveItem}
              />
            </Col>
          );
        })}
        <Col xs={24} sm={24} md={24} lg={6}>
          <ContributeUsers />
          <Placeholder.Paragraph rows={30} />
        </Col>
      </Row>
    </Grid>
  );
};
