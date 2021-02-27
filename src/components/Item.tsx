import React from "react";

import type { Contents } from "../data";

const Item: React.FC<{
  id: number;
  contents: Contents;
}> = ({ contents }) => (
  <div className="item">
    <div className="contents">
      <p className="title">{contents.title}</p>
      <p className="memo">{contents.memo}</p>
    </div>
  </div>
);

export default Item;
