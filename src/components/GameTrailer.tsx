import useTrailers from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameID: number;
}

const GameTrailer = ({ gameID }: Props) => {
  const { data, error, isLoading } = useTrailers(gameID);
  if (isLoading) return <Spinner />;
  if (error) throw error;

  const first = data?.results[0];
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
