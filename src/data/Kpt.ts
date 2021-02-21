export type KPTData = {
  categoryId: string;
  categoryName: string;
  data: KPTItem[];
};

export type KPTItem = {
  itemId: string;
  title: string;
  tag?: {
    color: string;
    value: string;
  };
};

export const myCategories = [
  {
    categoryId: "0cc4afe7-f14e-4c70-afc0-d2f1ef6393ce",
    categoryName: "Keep",
  },
  {
    categoryId: "db1ebaaa-56d6-4805-8c7d-b7bf96d6cc5d",
    categoryName: "Problem",
  },
  {
    categoryId: "d13d267a-7da1-4449-9dbe-89fb2a9f8b6c",
    categoryName: "Try",
  },
];

export const kptData: KPTData[] = [
  {
    categoryId: "0cc4afe7-f14e-4c70-afc0-d2f1ef6393ce",
    categoryName: "Keep",
    data: [
      {
        itemId: "1",
        title: "毎週、パーソナルトレーニングに行けている。",
        tag: {
          color: "red",
          value: "運動",
        },
      },
      {
        itemId: "2",
        title: "30日間フィットネスチャレンジというアプリを使い始めた。",
        tag: {
          color: "red",
          value: "運動",
        },
      },
      {
        itemId: "3",
        title: "週の半分は自炊できている。",
        tag: {
          color: "yellow",
          value: "食生活",
        },
      },
    ],
  },

  {
    categoryId: "db1ebaaa-56d6-4805-8c7d-b7bf96d6cc5d",
    categoryName: "Problem",
    data: [
      {
        itemId: "4",
        title: "飲み会が多い",
        tag: {
          color: "blue",
          value: "会社",
        },
      },
      {
        itemId: "5",
        title: "ジムの費用が高い",
        tag: {
          color: "red",
          value: "運動",
        },
      },
      {
        itemId: "6",
        title: "睡眠時間が少ない",
        tag: {
          color: "green",
          value: "睡眠",
        },
      },
    ],
  },

  {
    categoryId: "d13d267a-7da1-4449-9dbe-89fb2a9f8b6c",
    categoryName: "Try",
    data: [
      {
        itemId: "7",
        title: "飲み会は週に１回まで",
        tag: {
          color: "green",
          value: "会社",
        },
      },
    ],
  },
];
