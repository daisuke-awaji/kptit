import React from "react";
import { useDrop } from "react-dnd";
import Draggable from "./Draggable";
import {
  Item as _Item,
  ItemWithIndex,
  GroupType,
  ItemTypes,
  TitleMap,
  MoveHandler,
} from "../data";
import { Card } from "./Card";

export const Group: React.FC<{
  items: _Item[];
  groupType: GroupType;
  firstIndex: number;
  onMove: MoveHandler;
  onRemove: any;
  handleLike: any;
  handleTagRemove: any;
  handleInputConfirm: any;
}> = ({
  items,
  groupType,
  firstIndex,
  onMove,
  onRemove,
  handleLike,
  handleTagRemove,
  handleInputConfirm,
}) => {
  const [, ref] = useDrop({
    accept: ItemTypes,
    hover(dragItem: ItemWithIndex) {
      const dragIndex = dragItem.index;
      if (dragItem.group === groupType) return;
      const targetIndex =
        dragIndex < firstIndex
          ? // forward
            firstIndex + items.length - 1
          : // backward
            firstIndex + items.length;
      onMove(dragIndex, targetIndex, groupType);
      dragItem.index = targetIndex;
      dragItem.group = groupType;
    },
  });

  return (
    <div ref={ref}>
      <h5>{TitleMap[groupType]}</h5>
      {items.map((item, i) => {
        return (
          <Draggable item={item} index={firstIndex + i} onMove={onMove}>
            <Card
              handleRemove={onRemove}
              handleLike={handleLike}
              handleTagRemove={handleTagRemove}
              handleInputConfirm={handleInputConfirm}
              {...item}
            />
          </Draggable>
        );
      })}
    </div>
  );
};
