import gamesRepository from "../repository/games-repository";
import { Game } from "./../protocols/game-protocol";

function getGames() {
  return gamesRepository.getGames();
}

async function createGame(game: Game) {

  const exist = await  gamesRepository.getGameByTitleAndPlatform(game);

  if(exist.rows.length !== 0) throw {type: "conflict", message: "Game already exists"}
  
  return gamesRepository.createGame(game);
  }

async function gameAlreadyExists(game: Game): Promise<boolean> {
   return;
}


const gamesService = {
  getGames,
  createGame
}

export default gamesService;