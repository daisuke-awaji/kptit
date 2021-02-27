import faker from "faker";

export type KPTData = {
  categoryId: string;
  categoryName: string;
  data: KPTItem[];
};

type User = {
  id: string;
  lastName?: string;
  firstName?: string;
  imageUrl?: string;
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

type Category = {
  id: string;
  name: "Keep" | "Problem" | "Try";
};

export type KPTItem = {
  id: string;
  title: string;
  category?: Category;
  author: User;
  tag?: Tag;
  memo?: string;
  insertDatetime: Date;
  comments?: Comment[];
  likes?: Like[];
};

faker.seed(8);

export const myCategories: Category[] = [
  {
    id: "0cc4afe7-f14e-4c70-afc0-d2f1ef6393ce",
    name: "Keep",
  },
  {
    id: "db1ebaaa-56d6-4805-8c7d-b7bf96d6cc5d",
    name: "Problem",
  },
  {
    id: "d13d267a-7da1-4449-9dbe-89fb2a9f8b6c",
    name: "Try",
  },
];

export const kptData: KPTData[] = [
  {
    categoryId: "0cc4afe7-f14e-4c70-afc0-d2f1ef6393ce",
    categoryName: "Keep",
    data: [
      {
        id: "1",
        category: myCategories.find((i) => i.name === "Keep")!,
        insertDatetime: faker.date.between(
          new Date("2020-01-01"),
          new Date("2021-12-31")
        ),
        title: "毎週、パーソナルトレーニングに行けている。",
        tag: {
          color: "red",
          value: "運動",
        },
        author: {
          id: faker.random.uuid(),
          imageUrl: `https://randomuser.me/api/portraits/${faker.helpers.randomize(
            ["women", "men"]
          )}/${faker.random.number(60)}.jpg`,
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
        category: myCategories.find((i) => i.name === "Keep")!,
        insertDatetime: faker.date.between(
          new Date("2020-01-01"),
          new Date("2021-12-31")
        ),
        title: "30日間フィットネスチャレンジというアプリを使い始めた。",
        tag: {
          color: "red",
          value: "運動",
        },
        author: {
          id: faker.random.uuid(),
          imageUrl: `https://randomuser.me/api/portraits/${faker.helpers.randomize(
            ["women", "men"]
          )}/${faker.random.number(60)}.jpg`,
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
        category: myCategories.find((i) => i.name === "Keep")!,
        insertDatetime: faker.date.between(
          new Date("2020-01-01"),
          new Date("2021-12-31")
        ),
        title: "週の半分は自炊できている。",
        tag: {
          color: "yellow",
          value: "食生活",
        },
        author: {
          id: faker.random.uuid(),
          imageUrl: `https://randomuser.me/api/portraits/${faker.helpers.randomize(
            ["women", "men"]
          )}/${faker.random.number(60)}.jpg`,
          lastName: faker.name.firstName() + faker.name.lastName(),
        },
      },
    ],
  },

  {
    categoryId: "db1ebaaa-56d6-4805-8c7d-b7bf96d6cc5d",
    categoryName: "Problem",
    data: [
      {
        id: "4",
        category: myCategories.find((i) => i.name === "Problem")!,
        insertDatetime: faker.date.between(
          new Date("2020-01-01"),
          new Date("2021-12-31")
        ),
        title: "飲み会が多い",
        tag: {
          color: "blue",
          value: "会社",
        },
        author: {
          id: faker.random.uuid(),
          imageUrl: `https://randomuser.me/api/portraits/${faker.helpers.randomize(
            ["women", "men"]
          )}/${faker.random.number(60)}.jpg`,
          lastName: faker.name.firstName() + faker.name.lastName(),
        },
      },
      {
        id: "5",
        category: myCategories.find((i) => i.name === "Problem")!,
        insertDatetime: faker.date.between(
          new Date("2020-01-01"),
          new Date("2021-12-31")
        ),
        title: "ジムの費用が高い",
        tag: {
          color: "red",
          value: "運動",
        },
        author: {
          id: faker.random.uuid(),
          imageUrl: `https://randomuser.me/api/portraits/${faker.helpers.randomize(
            ["women", "men"]
          )}/${faker.random.number(60)}.jpg`,
          lastName: faker.name.firstName() + faker.name.lastName(),
        },
      },
      {
        id: "6",
        category: myCategories.find((i) => i.name === "Problem")!,
        insertDatetime: faker.date.between(
          new Date("2020-01-01"),
          new Date("2021-12-31")
        ),
        title: "睡眠時間が少ない",
        tag: {
          color: "green",
          value: "睡眠",
        },
        author: {
          id: faker.random.uuid(),
          imageUrl: `https://randomuser.me/api/portraits/${faker.helpers.randomize(
            ["women", "men"]
          )}/${faker.random.number(60)}.jpg`,
          lastName: faker.name.firstName() + faker.name.lastName(),
        },
      },
    ],
  },

  {
    categoryId: "d13d267a-7da1-4449-9dbe-89fb2a9f8b6c",
    categoryName: "Try",
    data: [
      {
        id: "7",
        category: myCategories.find((i) => i.name === "Try")!,
        insertDatetime: faker.date.between(
          new Date("2020-01-01"),
          new Date("2021-12-31")
        ),
        title: "飲み会は週に１回まで",
        tag: {
          color: "green",
          value: "会社",
        },
        author: {
          id: faker.random.uuid(),
          imageUrl: `https://randomuser.me/api/portraits/${faker.helpers.randomize(
            ["women", "men"]
          )}/${faker.random.number(60)}.jpg`,
          lastName: faker.name.firstName() + faker.name.lastName(),
        },
      },
    ],
  },
];

export const privateKptItems: KPTItem[] = [
  {
    id: "8",
    title: "残業時間が多い",
    tag: {
      color: "blue",
      value: "会社",
    },
    author: {
      id: "1",
      imageUrl: `https://randomuser.me/api/portraits/men/1.jpg`,
      lastName: "an",
    },
    insertDatetime: faker.date.between(
      new Date("2020-01-01"),
      new Date("2021-12-31")
    ),
  },
  {
    id: "9",
    title: "ランニングを二回できた",
    tag: {
      color: "red",
      value: "運動",
    },
    author: {
      id: "1",
      imageUrl: `https://randomuser.me/api/portraits/men/1.jpg`,
      lastName: "an",
    },
    insertDatetime: faker.date.between(
      new Date("2020-01-01"),
      new Date("2021-12-31")
    ),
  },
  {
    id: "10",
    title: "眠い",
    tag: {
      color: "green",
      value: "睡眠",
    },
    author: {
      id: "1",
      imageUrl: `https://randomuser.me/api/portraits/men/1.jpg`,
      lastName: "an",
    },
    insertDatetime: faker.date.between(
      new Date("2020-01-01"),
      new Date("2021-12-31")
    ),
  },
];
