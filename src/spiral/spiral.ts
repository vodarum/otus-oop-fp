export default function spiral(matrix: Array<Array<number>>): Array<number> {
  const result: Array<number> = [];

  if (matrix.length === 0 || matrix[0].length === 0) {
    return result;
  }

  const count = matrix.length * matrix[0].length;
  const xLastIdx = matrix[0].length - 1;
  const yLastIdx = matrix.length - 1;

  let [x, y] = [0, 0];

  while (count - result.length > 0) {
    for (let n = x, max = xLastIdx - x; n <= max; n++) {
      result.push(matrix[y][n]);
    }

    if (yLastIdx === 0) {
      break;
    }

    for (let m = y + 1, max = yLastIdx - y; m <= max; m++) {
      result.push(matrix[m][xLastIdx - x]);
    }

    if (xLastIdx === 0) {
      break;
    }

    for (let n = xLastIdx - 1 - x, min = x; n >= min; n--) {
      result.push(matrix[yLastIdx - y][n]);
    }

    for (let m = yLastIdx - 1 - y, min = y + 1; m >= min; m--) {
      result.push(matrix[m][x]);
    }

    x++;
    y++;
  }

  return result;
}
