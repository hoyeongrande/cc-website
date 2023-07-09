import React from "react";
import Head from "next/head";
import DefaultContainer from "@/components/DefaultContainer";
import MainInfo from "@/components/MainInfo";

const Contact = () => {
    return (
        <DefaultContainer>
            <Head>
                <title>Contact</title>
            </Head>
            <MainInfo />
            <div>hi</div>
        </DefaultContainer>
    );
};

export default Contact;
