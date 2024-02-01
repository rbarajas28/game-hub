import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedGenreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const genre = useGenre(selectedGenreID);

  const selectedPlatformID = useGameQueryStore((s) => s.gameQuery.platformID);
  const platform = usePlatform(selectedPlatformID);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
