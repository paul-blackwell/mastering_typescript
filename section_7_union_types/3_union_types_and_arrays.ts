const stuff: (number | string)[] = [1, 2, 3, 'asdaa'];

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

const coords: (Point | Loc)[] = [];
coords.push({ lat: 321.212, long: 23.334 });
