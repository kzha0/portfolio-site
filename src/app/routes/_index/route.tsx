import type { MetaFunction } from "@remix-run/node";
import { Flex, Text, Title } from "@mantine/core";

import { HEADER_HEIGHT } from "~/components/AppLayout";

/* -------------------------------------------------------------------------- */

export const meta: MetaFunction = () => {
    return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
    return (
        <Flex direction="column" h="100%">
            <HeroSection />
            {lipsum}
        </Flex>
    );
}

const lipsum = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum ante tortor, rhoncus lacinia urna pharetra id. Donec nunc erat, porttitor vel efficitur tristique, pellentesque et odio. Aenean egestas magna vel maximus egestas. Duis at elementum est. Nullam leo tellus, scelerisque id nulla in, dignissim egestas justo. Mauris pharetra pulvinar tortor, in condimentum augue egestas non. Vestibulum feugiat pellentesque nulla, ac euismod augue auctor ut. Sed efficitur at sapien eu accumsan. Suspendisse iaculis, lacus sit amet congue facilisis, lectus ligula finibus nisl, eleifend tristique tellus mi eget lacus. Donec pretium at felis ac pharetra. Etiam erat ex, suscipit in turpis sit amet, tempor lacinia enim.

Suspendisse potenti. Suspendisse id volutpat magna. Suspendisse tempus auctor urna. Ut dapibus fermentum erat, quis laoreet justo feugiat in. Fusce convallis massa dignissim pharetra tempor. Sed tristique tellus nec augue tempus ornare. Morbi semper enim id eleifend imperdiet. Nunc nulla enim, ornare a vehicula sed, malesuada vel dui. Vestibulum eu gravida libero, non congue nisl. Sed arcu tellus, sollicitudin nec blandit a, commodo vitae metus. Vivamus et neque libero. Morbi vitae ligula sed arcu tincidunt faucibus ac quis lacus.

Donec rutrum imperdiet tellus, et pellentesque neque fringilla sed. Praesent ex nunc, feugiat non ipsum at, congue lobortis libero. Quisque diam felis, ultrices nec fringilla sed, pretium eu nunc. In quis quam lacinia, bibendum erat ac, consectetur nibh. Donec in lobortis felis. Donec efficitur, mi et suscipit mollis, orci risus ultricies mi, at pretium massa nibh sed dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc cursus mi eu feugiat imperdiet. Sed hendrerit viverra risus. Vivamus ullamcorper tortor faucibus ex porttitor, dignissim eleifend sem condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis tempor iaculis sodales. Ut gravida ultricies metus eget mattis. Nam purus dolor, aliquam vel mi eu, facilisis rhoncus arcu. Suspendisse et felis pellentesque enim ornare varius et vel tellus.

Nullam sagittis nibh id nisl efficitur eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin orci lectus, ullamcorper et dignissim lobortis, molestie ut quam. Aliquam iaculis sem at diam eleifend cursus. Duis egestas, lorem in convallis feugiat, ante nulla viverra dolor, id eleifend ante orci vitae magna. Phasellus bibendum suscipit sapien vitae ultrices. Sed maximus ex vel gravida viverra. Morbi pulvinar ut dui et auctor. Sed auctor felis et diam sodales, ut convallis ligula cursus. Quisque sed iaculis ante. Donec sed tortor ut neque maximus iaculis vel vitae magna. Ut in metus arcu. Nam accumsan hendrerit dui, et fermentum risus semper eu. Mauris euismod commodo lorem, ac ullamcorper nunc blandit ac.

Nulla justo est, ullamcorper vel varius varius, auctor rutrum urna. Aliquam eu dapibus massa. Phasellus sit amet facilisis velit, at fringilla augue. Nulla sagittis, orci et condimentum faucibus, metus sapien bibendum tellus, rutrum vehicula erat urna tempus urna. Suspendisse potenti. Mauris et eros sed turpis blandit sagittis. Curabitur nec mollis mi. Morbi eget turpis leo. Praesent at condimentum leo. Pellentesque vulputate mi non justo varius, nec sodales ipsum ullamcorper. Pellentesque sed accumsan leo. Proin eros felis, pharetra ac sem id, pellentesque aliquet nisl. Nullam cursus dolor massa, at sodales sem sagittis ac. Sed suscipit metus quis condimentum varius. Suspendisse orci erat, condimentum ut tincidunt sed, elementum in augue. Quisque eu accumsan nisi.`;

export const HeroSection: React.FC = () => {
    return (
        <Flex
            justify="center"
            h="100vh"
        >
            <Flex
                direction="column"
                justify="center"
                w="100%"
                maw={{ base: "60vw", xl: "50vw" }}
                gap="md"
            >
                <Flex>
                    <Title order={1}>Business automation specialist, programmer, consultant</Title>
                </Flex>
                <Flex>
                    <Text>
                        I'm Jerrico Duran, a fullstack software engineer and management consultant. I work directly with MSMEs to help them develop and implement automation solutions to common business problems, especially the repetitive kind.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
