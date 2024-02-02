import React from "react";
import { Game } from "../hooks/useGames";
import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import PlatformIconLIst from "./PlatformIconLIst";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconLIst
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconLIst>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>{" "}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
