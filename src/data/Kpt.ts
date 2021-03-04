import faker from "faker";
export type MoveHandler = (
  dragIndex: number,
  targetIndex: number,
  groupType: GroupType
) => void;

type User = {
  id: string;
  lastName?: string;
  firstName?: string;
  image?: string;
};

type Comment = {
  id: string;
  content: string;
  postedBy: User;
};

type Tag = {
  color: string;
  value: string;
};

type Like = {
  id: string;
  kptItemId: string;
  userId: string;
};

export const ItemTypes = ["item" as const];
export type ItemType = typeof ItemTypes[number];
export const GroupTypes = ["keep", "problem", "try"] as const;
export type GroupType = typeof GroupTypes[number];
export const TitleMap = {
  keep: "Keep",
  problem: "Problem",
  try: "Try",
} as const;

export type Contents = {
  title: string;
  memo?: string;
};
export type Item = {
  id: string;
  type: ItemType;
  contents: Contents;
  group: GroupType;
  author: User;
  tag?: Tag;
  insertDatetime: Date;
  comments?: Comment[];
  likes?: Like[];
};

export type ItemWithIndex = Item & {
  index: number;
};

faker.seed(8);

export const kptData: Item[] = [
  {
    id: "1",
    group: "keep",
    type: "item",
    insertDatetime: faker.date.between(
      new Date("2020-01-01"),
      new Date("2021-12-31")
    ),
    contents: {
      title: "毎週、パーソナルトレーニングに行けている。",
      memo: faker.random.words(),
    },
    tag: {
      color: "red",
      value: "運動",
    },
    author: {
      id: faker.random.uuid(),
      image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
        "women",
        "men",
      ])}/${faker.random.number(60)}.jpg`,
      lastName: faker.name.firstName() + faker.name.lastName(),
    },
    likes: [
      {
        id: faker.random.uuid(),
        kptItemId: "1",
        userId: faker.random.uuid(),
      },
    ],
  },
  {
    id: "2",
    group: "keep",
    type: "item",
    insertDatetime: faker.date.between(
      new Date("2020-01-01"),
      new Date("2021-12-31")
    ),
    contents: {
      title: "30日間フィットネスチャレンジというアプリを使い始めた。",
    },
    tag: {
      color: "red",
      value: "運動",
    },
    author: {
      id: faker.random.uuid(),
      image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
        "women",
        "men",
      ])}/${faker.random.number(60)}.jpg`,
      lastName: faker.name.firstName() + faker.name.lastName(),
    },
    comments: [
      {
        id: faker.random.uuid(),
        content: faker.random.words(),
        postedBy: {
          id: faker.random.uuid(),
        },
      },
    ],
  },
  {
    id: "3",
    group: "keep",
    type: "item",
    insertDatetime: faker.date.between(
      new Date("2020-01-01"),
      new Date("2021-12-31")
    ),
    contents: {
      title: "週の半分は自炊できている。",
    },
    tag: {
      color: "yellow",
      value: "食生活",
    },
    author: {
      id: faker.random.uuid(),
      image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
        "women",
        "men",
      ])}/${faker.random.number(60)}.jpg`,
      lastName: faker.name.firstName() + faker.name.lastName(),
    },
  },

  {
    id: faker.random.uuid(),
    group: "problem",
    type: "item",
    insertDatetime: faker.date.between(
      new Date("2020-01-01"),
      new Date("2021-12-31")
    ),
    contents: {
      title: "飲み会が多い",
    },
    tag: {
      color: "yellow",
      value: "食生活",
    },
    author: {
      id: faker.random.uuid(),
      image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
        "women",
        "men",
      ])}/${faker.random.number(60)}.jpg`,
      lastName: faker.name.firstName() + faker.name.lastName(),
    },
  },

  {
    id: faker.random.uuid(),
    group: "problem",
    type: "item",
    insertDatetime: faker.date.between(
      new Date("2020-01-01"),
      new Date("2021-12-31")
    ),
    contents: {
      title: "残業しすぎだ・・・",
    },
    tag: {
      color: "green",
      value: "会社",
    },
    author: {
      id: faker.random.uuid(),
      image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
        "women",
        "men",
      ])}/${faker.random.number(60)}.jpg`,
      lastName: faker.name.firstName() + faker.name.lastName(),
    },
  },

  {
    id: faker.random.uuid(),
    group: "try",
    type: "item",
    insertDatetime: faker.date.between(
      new Date("2020-01-01"),
      new Date("2021-12-31")
    ),
    contents: {
      title: "ランニング距離を２km増やしてみよう",
    },
    tag: {
      color: "red",
      value: "運動",
    },
    author: {
      id: faker.random.uuid(),
      image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
        "women",
        "men",
      ])}/${faker.random.number(60)}.jpg`,
      lastName: faker.name.firstName() + faker.name.lastName(),
    },
  },
];
