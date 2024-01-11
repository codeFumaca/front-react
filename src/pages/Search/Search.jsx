import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getByTitlePost } from "../../services/postsServices";
import { SearchNews, ContainerResults, TextResults } from "../Search/SearchStyled";
import { Card } from "../../components/Card/Card";

export function Search() {
    const { title } = useParams()

    const [news, setNews] = useState([]);

    async function findNews() {
        try {
            const postsresponse = await getByTitlePost(title);
            setNews(postsresponse.data.results);
        } catch (error) {
            setNews([]);
        }
    }

    useEffect(() => {
        findNews();
    }, [title]);

    return (
        <ContainerResults>
            <TextResults>
                <span>
                    {!news.length ? `Encontramos ${news.length} ${news.length > 1 ? "resultados" : "resultado"} para:` : "Não encontramos resultados para: "}
                </span>
                <h2>{title}</h2>
            </TextResults>
            <SearchNews>
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
            </SearchNews>
        </ContainerResults>
    );
}