import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      width="100%"
      _hover={{
        transform: "scale(1.05)",
        transition: "transform 0.15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default CameCardContainer;
