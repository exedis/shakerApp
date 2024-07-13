export type EventType = {
  id: number;
  name: string;
  description: string;
  coords: [number, number];
};
export const EventData: EventType[] = [
  {
    id: 1,
    name: "Кройка и шитье",
    description: "Описание",
    coords: [55.729103, 37.637845],
  },
  {
    id: 2,
    name: "Танцы до упаду",
    description: "Описание",
    coords: [55.730265, 37.635949],
  },
  {
    id: 3,
    name: "Изба читальня",
    description: "Описание",
    coords: [55.731907, 37.631994],
  },
  {
    id: 4,
    name: "Ликбез по жижам",
    description: "Описание",
    coords: [55.730745, 37.628431],
  },
  {
    id: 5,
    name: "Дача на прокачку",
    description: "Описание",
    coords: [55.733438, 37.621044],
  },
  {
    id: 6,
    name: "Как девок кадрить",
    description: "Описание",
    coords: [55.741438, 37.610927],
  },
];
