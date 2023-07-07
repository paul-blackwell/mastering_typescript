const bools: Array<boolean> = [];
// ^ Is another way of doing this const bools: boolean[] = []

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });
// coords.push({x: 23, y: '8'}) won't work
