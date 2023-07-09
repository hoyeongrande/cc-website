import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface Props {
    children: React.ReactNode;
}

const DefaultContainer: React.FC<Props> = ({ children }: Props) => {
    return (
        <div style={{ height: "auto", minHeight: "100%" }}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default DefaultContainer;
