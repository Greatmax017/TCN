import React from "react";
import {
  IconButton,
  VStack,
  Text,
  HStack,
  SimpleGrid,
  Icon,
  Stack,
} from "@chakra-ui/react";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import MiniHeading from "../../ui/MiniHeading";
import { IoCalendarNumber } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import CtaButton from "../../ui/CtaButton";

function EventSection() {
  const eventDetail = [
    {
      icon: IoCalendarNumber,
      content: (
        <>
          Weekly Prayers: Tuesday and Friday - (8pm ET)
          <br />
          via{" "}
          <a
            href="https://bit.ly/TCNTORONTOPRAYS"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "blue",
              textDecoration: "underline",
            }}
          >
            ZOOM
          </a>
        </>
      ),
    },

    {
      icon: FaLocationDot,
      content: "1465 Leda Avenue Mississauga, ON L5G 4B8",
    },
  ];

  return (
    <Stack
      w="full"
      justify="start"
      align="start"
      py={["4rem", "4rem", "6rem"]}
      bgColor="brand.500"
    >
      <ContainerLayout>
        <VStack w="full" justify="center" align="center" gap="40px">
          <SimpleGrid w="full" columns={[1, 1, 1, 12]} gap="40px">
            <VStack
              w="full"
              justify="start"
              align="start"
              gap="40px"
              gridColumn={["span 1", "span 1", "span 1", "span 7"]}
            >
              <MiniHeading
                miniTitle="Upcoming Event"
                title="Experience God’s Presence at TCN Church"
              />

              <VStack w="full" justify="start" align="start" gap="20px">
                {eventDetail.map((item, i) => (
                  <HStack
                    w="full"
                    justify="start"
                    align="center"
                    gap="10px"
                    key={i}
                  >
                    <IconButton
                      icon={
                        <Icon
                          as={item.icon}
                          color="brand.100"
                          fontSize="30px"
                        />
                      }
                      bgColor="alt.600"
                      rounded="full"
                      py="30px"
                      px="15px"
                    />

                    <Text
                      fontSize={16}
                      fontWeight={600}
                      color="brand.900"
                      lineHeight="25px"
                    >
                      {item.content}
                    </Text>
                  </HStack>
                ))}
              </VStack>

              <Text
                fontSize={16}
                fontWeight={400}
                color="brand.900"
                lineHeight="25px"
              >
                Discover a community where faith meets love and lives are
                transformed. Join us this Sunday for uplifting worship, powerful
                teachings, and genuine fellowship. There’s a place for you at
                TCN come as you are and leave inspired!
              </Text>

              <CtaButton
                url="/contact-us"
                content="Join Us In Person"
                type="primary"
              />
            </VStack>

            <VStack
              w="full"
              justify="center"
              align="center"
              minH="500px"
              bgImage="https://res.cloudinary.com/drthrun7f/image/upload/v1738705990/gjyzlehgkkmmqpyprmqs.jpg"
              bgSize="cover"
              bgRepeat="no-repeat"
              bgPos="center"
              position="relative"
              roundedBottomRight="200px"
              overflow="hidden"
              data-aos="slide-left"
              data-aos-duration="1000"
              gridColumn={["span 1", "span 1", "span 1", "span 5"]}
              _before={{
                content: "''",
                position: "absolute",
                w: "full",
                h: "full",
                inset: 0,
                bgColor: "rgba(0,0,0,0.3)",
                zIndex: 1,
              }}
            />
          </SimpleGrid>
        </VStack>
      </ContainerLayout>
    </Stack>
  );
}

export default EventSection;
