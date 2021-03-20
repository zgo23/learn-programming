interface Func {
  (p: number): number;
}

const func: Func = () => {
  throw new Error("error");
};
