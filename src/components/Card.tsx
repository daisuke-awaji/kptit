import React from "react";
import {
  Avatar,
  Icon,
  IconButton,
  Panel,
  PanelProps,
  Tooltip,
  Whisper,
} from "rsuite";
import { DeletableTag } from "./DeletableTag";
import "./Card.css";
import { Item } from "../data";

export const Card = (props: PanelProps & Item) => {
  const [coordinate, setCoordinate] = React.useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const nodeRef = React.useRef<any>();
  React.useEffect(() => {
    const card = nodeRef.current;
    if (card) {
      const { x, y } = card.getBoundingClientRect();
      setCoordinate({ x, y });
    }
  }, [nodeRef]);

  return (
    <div ref={nodeRef}>
      <Panel bordered {...props}>
        {/* <Tag color={props.tagColor}>{props.tagValue}</Tag> */}
        <DeletableTag
          id={props.id}
          handleTagRemove={props.handleTagRemove}
          handleInputConfirm={props.handleInputConfirm}
          color={props.tag?.color}
        >
          {props.tag?.value}
        </DeletableTag>
        <h6 contentEditable="true" style={{ marginTop: 10, marginBottom: 10 }}>
          {props.contents.title}
        </h6>
        <div contentEditable="true" placeholder="memo">
          {props.contents.memo || ""}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ marginTop: 10 }}>
            <Whisper
              placement="top"
              trigger="hover"
              speaker={
                <Tooltip>
                  {props.author.lastName} {props.author.firstName}
                </Tooltip>
              }
            >
              <Avatar circle src={props.author.image || ""} />
            </Whisper>
          </div>
          <div style={{ marginTop: 10 }}>
            <IconButton
              circle
              appearance="subtle"
              icon={<Icon size="lg" icon="comment" />}
            />
            {props.comments ? props.comments.length : 0}
            <IconButton
              circle
              appearance="subtle"
              icon={<Icon size="lg" icon="thumbs-o-up" />}
            />
            {props.likes ? props.likes.length : 0}
          </div>
        </div>
      </Panel>
    </div>
  );
};
