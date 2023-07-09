import React from "react";
import Head from "next/head";
import DefaultContainer from "@/components/DefaultContainer";
import MainInfo from "@/components/MainInfo";
import {Stack, Text, Box, Space} from "@mantine/core";

const Home = () => {
    return (
        <DefaultContainer>
            <Head>
                <title>Culture Cloud</title>
            </Head>
            <MainInfo />
            <Box p="xl">
                <Stack spacing="xl">
                    <Text align="center" weight={700} fz={20}>
                        문화 행사 기획 회사 소개
                    </Text>
                    <Text>
                        저희 회사는 문화 행사 기획에 특화된 기업으로, 다양한 종류의 문화 행사 및 이벤트를 기획하고 실행하는 데 전문화되어 있습니다.
                    </Text>
                    <Text>
                        우리의 목표는 참여자들에게 풍부한 문화 경험을 제공하고, 사회에 긍정적인 영향을 미치는 행사를 개최하는 것입니다.
                    </Text>

                    <Text>
                        우리는 창의적이고 독창적인 행사 기획을 위해 역량 있는 팀을 보유하고 있습니다.
                    </Text>
                    <Text>
                        우리의 팀은 예술, 문화, 이벤트 기획 및 실행에 노련한 전문가들로 구성되어 있으며, 다양한 배경과 경험을 갖고 있습니다.
                    </Text>
                    <Text>
                        이를 통해 우리는 행사의 다양성과 참신함을 보장하며, 개별적인 요구에 맞는 맞춤형 솔루션을 제공합니다.
                    </Text>
                    <Text>
                        우리의 서비스는 다양한 종류의 문화 행사에 대해 포괄적으로 제공됩니다.
                    </Text>
                    <Text>
                        음악 콘서트, 연극 공연, 축제, 예술 전시회, 문화 워크숍, 기업 행사 등을 포함하여 다양한 행사 유형을 기획하고 관리합니다.
                    </Text>
                    <Text>
                        우리는 창조적인 아이디어와 탁월한 조직력을 바탕으로 행사의 모든 측면을 관리하며, 예산 조정, 장소 섭외, 아티스트와의 협업, 마케팅 및 홍보 전략 등을 철저히 계획하고 실행합니다.
                    </Text>

                    <Text>
                        저희 회사는 고객의 요구를 최우선으로 생각합니다.
                    </Text>
                    <Text>
                        우리는 신뢰성과 투명성을 바탕으로 고객과의 긴밀한 협력을 유지하며, 행사의 목표와 비전을 이해하고 구현하기 위해 노력합니다.
                    </Text>
                    <Text>
                        우리의 목표는 고객의 만족도를 최대화하고, 행사가 참여자들에게 유익하고 기억에 남는 경험을 선사하도록 하는 것입니다.
                    </Text>

                    <Text>
                        우리 회사는 뛰어난 기획 능력, 창의성과 열정을 바탕으로 문화 행사 기획의 선두주자로 인정받고 있습니다.
                    </Text>
                    <Text>
                        우리와 함께하면 차별화된 행사 경험과 탁월한 결과물을 얻을 수 있을 것입니다.
                    </Text>
                    <Text>
                        저희 회사와 함께하면 문화 행사의 성공을 위한 최고의 파트너가 되어 드리겠습니다.
                    </Text>

                </Stack>
            </Box>
        </DefaultContainer>
    );
};

export default Home;
