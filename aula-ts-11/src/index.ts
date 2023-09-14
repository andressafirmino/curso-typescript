import express, { Request, Response, json } from "express";
import { Game } from "./protocols/game-protocol";
import gamesService from "./service/games-service";
import httpStatus from "http-status";

const app = express();
app.use(json());

app.post("/games", async (req: Request, res: Response) => {
  const body = req.body as Game;
  try {
    const game = await gamesService.createGame(body);
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    if(error.type === "conflict") res.status(httpStatus.CONFLICT).send(error.message);
    res.sendStatus(httpStatus.CONFLICT);
  }
});

app.get("/games", async (req: Request, res: Response) => {
  const games = await gamesService.getGames();
  res.send(games.rows);
});

app.listen(5000, () => console.log(`Server is up and running or port 5000`));