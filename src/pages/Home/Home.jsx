import { useState, useEffect } from "react";

import { Card } from "../../components/Card/Card";
import { HomeBody, HomeHeader } from "./HomeStyled";
import { getAllPosts, getTopPost } from "../../services/postsServices";

export default function Home() {

    const [news, setNews] = useState([]);
    const [topNews, setTopNews] = useState({});

    async function findNews() {
        const postsresponse = await getAllPosts();
        setNews(postsresponse.data.results);

        const topPostResponse = await getTopPost();
        setTopNews(topPostResponse.data.news);
    }

    useEffect(() => {
        findNews();
    }, []);

    return (
        <section>
            <HomeHeader>
                <Card
                    $top={true}
                    key={topNews.id}
                    title={topNews.tittle}
                    text={topNews.text}
                    banner={topNews.banner}
                    likes={topNews.likes}
                    comments={topNews.comments}
                />
            </HomeHeader>
            <HomeBody>
                {news.map((item) => {
                    return <Card
                        key={item.id}
                        title={item.tittle}
                        text={item.text}
                        banner={item.banner}
                        likes={item.likes}
                        comments={item.comments}
                    />;
                })}
            </HomeBody>
        </section>
    );
}