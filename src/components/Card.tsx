import React from "react";
import {
  Icon,
  IconButton,
  Input,
  Panel,
  PanelProps,
  Placeholder,
} from "rsuite";
import { DeletableTag } from "./DeletableTag";

export const Card = (
  props: PanelProps & {
    tag?: {
      color: string;
      value: string;
    };
    title: string;
  }
) => (
  <Panel bordered {...props}>
    {/* <Tag color={props.tagColor}>{props.tagValue}</Tag> */}
    <DeletableTag
      itemId={props.itemId}
      handleTagRemove={props.handleTagRemove}
      color={props.tag?.color}
    >
      {props.tag?.value}
    </DeletableTag>
    <h6
      contentEditable="true"
      style={{ marginTop: 10, marginBottom: 10, outline: 0 }}
    >
      {props.title}
    </h6>
    <Input
      style={{ outline: 0 }}
      componentClass="textarea"
      rows={3}
      placeholder="Textarea"
    />
    <Placeholder.Paragraph />
    <div style={{ marginTop: 10, textAlign: "right" }}>
      <IconButton
        circle
        appearance="subtle"
        icon={<Icon size="lg" icon="flag" />}
      />
      Nov 24
      <IconButton
        circle
        appearance="subtle"
        icon={<Icon size="lg" icon="comment" />}
      />
      21
      <IconButton
        circle
        appearance="subtle"
        icon={<Icon size="lg" icon="thumbs-o-up" />}
      />
      3
    </div>
  </Panel>
);
