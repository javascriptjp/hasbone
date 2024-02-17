import React from "react";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import Head from "next/head";
import { OGP } from "@/components/ogp/ogp"
type Props = {
    name: string;
};

export const getServerSideProps = async (
    context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> => {
    if (typeof context.params?.name === "string") {
        return {
            props: {
                name: context.params?.name,
            },
        };
    } else {
        return {
            notFound: true,
        };
    }
};

const Page = ({ name }: Props) => {
    return <main className="min-h-screen">
        <OGP title={name} description={`test page for ${name}`} type="website" name={name} />
        入力した文字: {name}
    </main>

};
export default Page;
