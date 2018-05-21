// 决赛对阵名次
const FinalGame = [1, 2];

export const Games = [4, 8, 16, 32, 64];

// 蛇形排阵
export function getSnakeOrderMatrix(playerCount: number) {
  if (FinalGame.length === playerCount) {
    return [FinalGame];
  }
  return getNewOrderMatrix([FinalGame], playerCount);
}

function getNewOrderMatrix(playerOrderMatrix, playerCount: number) {
  playerOrderMatrix.unshift(getNextOrder(playerOrderMatrix[0]));
  if (playerOrderMatrix[0].length === playerCount) {
    return playerOrderMatrix;
  }
  return getNewOrderMatrix(playerOrderMatrix, playerCount);
}

function getNextOrder(playerOrderList) {
  let result = [];
  const max = playerOrderList.length * 2 + 1;
  playerOrderList.forEach((item, index) => {
    let extendItem;
    if (index % 2 === 0) {
      extendItem = [
        item,
        max - item
      ];
    } else {
      extendItem = [
        max - item,
        item
      ];
    }
    result = result.concat(extendItem);
  });
  return result;
}
