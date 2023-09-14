import { connection } from "../database/database";
import { Game } from "../protocols/game-protocol";

const games: Game[] = [];

async function getGames() {
  const res = await connection.query(`SELECT * FROM games;`);
  return res;
}

async function createGame(game: Game) {
  console.log(game)
  await connection.query(`INSERT INTO games (title, platform) VALUES ($1, $2);`, [game.title, game.platform]);
  return;
}

async function getGameByTitleAndPlatform(game: Game) {
  const res = await connection.query(`SELECT * FROM games WHERE title = $1 AND platform = $2;`, [game.title, game.platform])
  return res;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;