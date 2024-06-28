function solution(maps) {
  let q = [[0, 0]];
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  while (q.length) {
    const [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= maps.length || ny >= maps[0].length)
        continue;
      if (maps[nx][ny] === 1) {
        maps[nx][ny] = maps[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }
  return maps[maps.length - 1][maps[0].length - 1] === 1
    ? -1
    : maps[maps.length - 1][maps[0].length - 1];
}
