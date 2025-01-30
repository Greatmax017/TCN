import React from "react";
import {
  VStack,
  Text,
  Stack,
} from "@chakra-ui/react";
import ContainerLayout from "../../ui/layouts/ContainerLayout";
import MiniHeading from "../../ui/MiniHeading";




function OurHistory() {

  return (
    <Stack
        w="full"
        justify="start"
        align="start"
        py={["4rem", "4rem", "6rem"]}
    >
        <ContainerLayout>
            <VStack 
                w="full" 
                justify="start" 
                align="start" 
                py="20px"
            >
                <VStack 
                    w="full" 
                    justify="start" 
                    align="start" 
                    gap="10px"
                >
                    <MiniHeading
                        miniTitle="Our History"
                        title="Our Journey of Faith and Transformation"
                    />

                    <Text
                        fontSize={16}
                        fontWeight={400}
                        lineHeight="25px"
                        color="brand.900"
                        mt={10}
                    >
                        The Covenant Nation was dedicated in 1994 as Covenant Christian Centre and has flourished and grown into a church without walls.

                        Embracing the next phase of the work of the ministry, saw the change in the name and logo of this assembly in January 2020 by the Senior pastor and founder, Pastor ‘Poju Oyemade.

                        The Ministry places strong emphasis on a personal relationship with Christ and communion with Him through the Word (the Bible) and this is consistently communicated from the pulpit. Practical insights on how to live and grow in the Christian faith is taught and encouraged in daily life, which makes an impact and difference in the world.

                    </Text>

                    <Text
                        fontSize={16}
                        fontWeight={400}
                        lineHeight="25px"
                        color="brand.900"
                        mt={2}
                    >
                       With Sunday attendance in more than twenty(20) centers running into thousands and a large online community and followers that identify with the ministry, this modern-day congregation has members all over the nation, in the UK, United States, Canada, and many more countries around the world. The UK and New York church branches also add their flavor to these diverse demographics. <br/><br/>

                        The Ministry caters to congregants down to the individual level with its small groups systems; Life Fellowships (Prayer Cells) and Covenant Community Groups, which give the needed personal care to members. This can be as intimate as they so desire, with the spiritual, relational and some material needs attended to by these groups. <br/><br/>

                        As a member of the larger body of Christ, the Covenant Nation heeds the call to ‘go make disciples of all nations’ (Matt 28:19) through its events and programs like The World Faith Believer’s Convention (WOFBEC), International Conference for Pastors, Ministers, Leaders and Workers (ICPLMW), The Platform (a National Development conference) and various community initiatives like Lagos Sees (Free Medical Eye Care to host communities), Edu-Aid (providing assistance to Public Primary Schools), Project WRAP (providing assistance to widows and families of deceased service personnel), Covenant Capital Business School (CCBS), The Lagos Career Fair and more.

                    </Text>
                </VStack>
            </VStack>
        </ContainerLayout>

    </Stack>
  )
}

export default OurHistory