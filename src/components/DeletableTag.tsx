import React from "react";
import { Icon, IconButton, Tag } from "rsuite";

export const DeletableTag = (props: {
  color?: string;
  id: string;
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
        props.handleTagRemove(props.id);
      }}
      color={props.color}
    >
      {props.children}
    </Tag>
  );
};
