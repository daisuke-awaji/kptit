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

export const Card = (props: PanelProps & Item & { focus?: boolean }) => {
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

  const focusRef = React.useRef<HTMLDivElement>(null);
  if (props.focus) {
    focusRef.current?.focus();
  }

  return (
    <div ref={nodeRef} style={{ backgroundColor: "white", marginBottom: 10 }}>
      <Panel bordered shaded {...props}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <DeletableTag
            id={props.id}
            handleTagRemove={props.handleTagRemove}
            handleInputConfirm={props.handleInputConfirm}
            color={props.tag?.color}
          >
            {props.tag?.value}
          </DeletableTag>

          <IconButton
            size="xs"
            circle
            appearance="subtle"
            icon={<Icon icon="close" />}
            onClick={() => props.handleRemove(props.id)}
          />
        </div>
        <h6
          contentEditable="true"
          style={{
            minHeight: "30px",
            marginTop: 10,
            marginBottom: 10,
            border: "0",
          }}
          ref={focusRef}
        >
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
              <Avatar size="sm" circle src={props.author.image || ""} />
            </Whisper>
          </div>
          <div style={{ marginTop: 10 }}>
            <IconButton
              size="sm"
              circle
              appearance="subtle"
              icon={<Icon size="lg" icon="comment" />}
            />
            {props.comments ? props.comments.length : 0}
            <IconButton
              size="sm"
              circle
              appearance="subtle"
              icon={
                <Icon
                  size="lg"
                  icon="thumbs-o-up"
                  onClick={() => props.handleLike(props.id)}
                />
              }
            />
            {props.likes ? props.likes.length : 0}
          </div>
        </div>
      </Panel>
    </div>
  );
};
