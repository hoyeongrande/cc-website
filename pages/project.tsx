import React from "react";
import Head from "next/head";
import DefaultContainer from "@/components/DefaultContainer";
import MainInfo from "@/components/MainInfo";

const Project = () => {
    return (
        <DefaultContainer>
            <Head>
                <title>Project</title>
            </Head>
            <MainInfo />
            <div>hi</div>
        </DefaultContainer>
    );
};

export default Project;
