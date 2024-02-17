import Head from "next/head"

type Props = {
    url?: string;
    type?: string;
    title?: string;
    description?: string;
    name?: string;
    image?: string;
};


export const OGP = ({ url, type, title, description, name, image }: Props) => {
    return <Head>
        {url ? <meta property="og:url" content={url} /> : <></>}
        {type ? <meta property="og:type" content={type} /> : <></>}
        {title ? <meta property="og:title" content={title} /> : <></>}
        {description ? <meta property="og:description" content={description} /> : <></>}
        {name ? <meta property="og:site_name" content={name} /> : <></>}
        {image ? <meta property="og:image" content={image} /> : <></>}
        <meta name="twitter:card" content="summary" />
    </Head>
}
