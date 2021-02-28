import React, { useState } from "react";
import { Icon, IconButton, Input, Tag } from "rsuite";
import useAutoFocus from "../hooks/useAutoFocus";

export const DeletableTag = (props: {
  color?: string;
  id: string;
  handleTagRemove: any;
  handleInputConfirm: any;
  children?: any;
}) => {
  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    setTyping(true);
  };

  const ref = useAutoFocus<HTMLInputElement>();
  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleConfirm = () => {
    props.handleInputConfirm(props.id, inputValue);
    setTyping(false);
  };

  if (!props.children) {
    if (typing) {
      return (
        <Input
          className="tag-input"
          size="xs"
          style={{ width: 70 }}
          value={inputValue}
          inputRef={ref}
          onChange={handleInputChange}
          onBlur={handleConfirm}
          onPressEnter={handleConfirm}
        />
      );
    }

    return (
      <IconButton
        appearance="link"
        size="xs"
        icon={<Icon size="lg" icon="plus" />}
        onClick={handleButtonClick}
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
