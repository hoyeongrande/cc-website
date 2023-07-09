import React from "react";
import Head from "next/head";
import DefaultContainer from "@/components/DefaultContainer";
import MainInfo from "@/components/MainInfo";

const About = () => {
    return (
        <DefaultContainer>
            <Head>
                <title>About</title>
            </Head>
            <MainInfo />
            <div>hi</div>
        </DefaultContainer>
    );
};

export default About;
