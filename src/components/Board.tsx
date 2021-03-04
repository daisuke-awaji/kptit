import faker from "faker";
import React, { useCallback } from "react";
import { Button, Col, Grid, Placeholder, Row } from "rsuite";
import { ContributeUsers } from ".";
import { kptData, GroupTypes, MoveHandler, Item, GroupType } from "../data";
import { me } from "../data/me";
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

  const removeTag = (id: string) => {
    console.log(id);

    setItems((prevState) => {
      const newState = prevState.map((item) => {
        if (item.id === id) {
          return { ...item, tag: undefined };
        }
        return item;
      });
      return newState;
    });
  };

  const confirmTagInput = (id: string, inputValue: string) => {
    setItems((prevState) => {
      const newState = prevState.map((item) => {
        if (item.id === id) {
          return { ...item, tag: { value: inputValue, color: "red" } };
        }
        return item;
      });
      return newState;
    });
  };

  const createNewCard = (group: GroupType) => {
    const newItem: Item & { focus: boolean } = {
      id: faker.random.uuid(),
      type: "item",
      contents: {
        title: "",
        memo: "",
      },
      group,
      author: me,
      insertDatetime: new Date(),
      focus: true,
    };

    setItems((prevState) => [...prevState, newItem]);
  };

  const removeItem = (id: string) => {
    setItems((prevState) => {
      return prevState.filter((i) => i.id !== id);
    });
  };

  const handleLike = (id: string) => {
    setItems((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          const myLike = {
            id: faker.random.uuid(),
            kptItemId: id,
            userId: me.id,
          };
          if (item.likes?.length) {
            item.likes = [...item.likes, myLike];
          } else {
            item.likes = [myLike];
          }
        }
        return item;
      });
    });
  };

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
            <Col key={group} xs={24} sm={8} md={8} lg={6}>
              <Group
                items={items}
                groupType={group}
                firstIndex={firstIndex}
                onMove={moveItem}
                onRemove={removeItem}
                handleLike={handleLike}
                handleTagRemove={removeTag}
                handleInputConfirm={confirmTagInput}
              />
              <Button
                appearance="default"
                block
                onClick={() => createNewCard(group)}
              >
                + NEW
              </Button>
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
