import faker from "faker";
import React from "react";
import { Avatar, Tooltip, Whisper } from "rsuite";

faker.seed(8);

const tooltip = (txt: string) => <Tooltip>{txt}</Tooltip>;

export const ContributeUsers = () => {
  const DATA = [...Array(6).keys()].map((_, i) => {
    return {
      key: faker.random.uuid(),
      image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
        "women",
        "men",
      ])}/${faker.random.number(60)}.jpg`,
      name: faker.name.findName(),
      active: faker.random.boolean(),
      updateDatetime: faker.date.between("2015-01-01", "2015-01-05"),
    };
  });
  return (
    <div>
      <h5>Recent Activity</h5>
      <div style={{ display: "flex" }}>
        {DATA.sort((a, b) => {
          if (a.active !== b.active) {
            return -1 * (Number(a.active) - Number(b.active));
          }
          if (a.updateDatetime !== b.updateDatetime) {
            return a.updateDatetime.getTime() - b.updateDatetime.getTime();
          }
          return 0;
        }).map((item, i) => {
          if (i > 4) return <div>+ more</div>;
          return (
            <div>
              <Whisper
                placement="top"
                trigger="hover"
                speaker={tooltip(item.name)}
              >
                <Avatar
                  circle
                  src={item.image}
                  style={{ opacity: item.active ? 1.0 : 0.2 }}
                />
              </Whisper>
            </div>
          );
        })}
      </div>
    </div>
  );
};
