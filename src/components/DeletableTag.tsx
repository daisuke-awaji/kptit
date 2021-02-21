import React from "react";
import { Icon, IconButton, Tag } from "rsuite";

export const DeletableTag = (props: {
  color?: string;
  itemId: string;
  handleTagRemove: any;
  children?: any;
}) => {
  if (!props.children) {
    return (
      <IconButton
        appearance="link"
        size="xs"
        icon={<Icon size="lg" icon="plus" />}
      />
    );
  }
  return (
    <Tag
      closable
      onClose={() => {
        props.handleTagRemove(props.itemId);
      }}
      color={props.color}
    >
      {props.children}
    </Tag>
  );
};
