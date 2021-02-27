import React from "react";
import { useDrag } from "react-dnd";
import {
  Avatar,
  Icon,
  IconButton,
  Panel,
  PanelProps,
  Placeholder,
  Tooltip,
  Whisper,
} from "rsuite";
import { DeletableTag } from "./DeletableTag";
import "./Card.css";
import { KPTItem } from "../data";

const ItemTypes = {
  CARD: "card",
};
export const Card = (props: PanelProps & KPTItem) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD },
    collect: (monitor: any) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

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
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1.0 }}>
      <div ref={nodeRef}>
        <Panel bordered {...props}>
          {/* <Tag color={props.tagColor}>{props.tagValue}</Tag> */}
          <DeletableTag
            id={props.id}
            handleTagRemove={props.handleTagRemove}
            color={props.tag?.color}
          >
            {props.tag?.value}
          </DeletableTag>
          <h6
            contentEditable="true"
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            {props.title}
          </h6>
          <div contentEditable="true" placeholder="memo">
            {props.memo || ""}
          </div>
          <Placeholder.Paragraph />
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
                <Avatar circle src={props.author.imageUrl || ""} />
              </Whisper>
            </div>
            <div style={{ marginTop: 10 }}>
              <IconButton
                circle
                appearance="subtle"
                icon={<Icon size="lg" icon="flag" />}
              />
              {props.insertDatetime.getMonth() +
                1 +
                "/" +
                props.insertDatetime.getDate()}
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
              {coordinate.y}
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
};
