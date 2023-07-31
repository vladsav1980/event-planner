import React from "react";
import { VStack, Box, Heading, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import heroImage from "../images/photo4.jpg";

const LandingSection = () => {
  return (
    <FullScreenSection isDarkBackground backgroundColor="#2A4365" spacing={8}>
      <VStack w="90%" py={16} alignItems="center">
        {/* Hero Image */}
        <Image src={heroImage} height="60vmin" alt="Hero Image" />

        {/* Hero Title */}
        <Heading as="h1" fontSize="6vw" textAlign="center" mt={8}>
          Discover Unforgettable Moments: Event Planner App
        </Heading>

        {/* Hero Text */}
        <Text fontSize="4vmin" textAlign="center" mt={8}>
          Unlock a world of endless entertainment and adventure right at your
          fingertips. The Event Planner app empowers leisure seekers to explore
          and immerse themselves in unique events and activities across their
          city with just a few taps. Get ready to create unforgettable memories
          and experience life to the fullest!
        </Text>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
