


export default Array.prototype.shuffle = function() {
  let m = this.length, i;
  while (m) {
    i = (Math.random() * m--) >>> 0;
    [this[m], this[i]] = [this[i], this[m]]
  }
  return this;
}

export function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function separator(base, max) {
  const res = [];
  const parts = (base.length)/max;
  const baseCopy = base.map((item) => item);

  for (let part = 0; part < parts; part++) {
    res.push(baseCopy.splice(0, max));
  }

  return res;
}
