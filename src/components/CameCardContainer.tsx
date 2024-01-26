import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden" width="100%">
      {children}
    </Box>
  );
};

export default CameCardContainer;
