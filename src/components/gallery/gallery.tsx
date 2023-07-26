import { FC } from "react";
import ImageCard from "../card/imagecard";
import { UserService } from "../../services/api/auth.service";

interface MyComponentProps {
    image: string;
    initial: string;
    title: string;
    date: string;
    body: string;
}

const ImageGallery: MyComponentProps[] = [
    { image: "1.jpg", initial: "A", title: "Campos Eliseos Chinos", date: "September 14, 2016", body: "Estos son los campos mas bellos de medio oriente" },
    { image: "2.jpg", initial: "B", title: "Campos Eliseos Japoneses", date: "September 15, 2016", body: "Estos bosques tienen una magia inigualable." },
    { image: "3.jpg", initial: "C", title: "Campos Eliseos Coreanos", date: "September 16, 2016", body: "La magia de los bosuqes coreanos." },
    { image: "4.jpg", initial: "D", title: "Campos Eliseos Sureanos", date: "September 17, 2016", body: "La vida explota en los campos de Java." },
    { image: "5.jpg", initial: "E", title: "Campos Eliseos Java", date: "September 14, 2017", body: "La armonia expota dentro de cada arbol en los campos de sureña." },
    { image: "6.jpg", initial: "F", title: "Campos Eliseos Holandeses", date: "September 14, 2017", body: "Bosque ideal para juntar leña y prender fuego." },
    { image: "7.jpg", initial: "G", title: "Campos Eliseos Austriacos", date: "September 14, 2017", body: "Arboles milenarios se encuentran en este bosque." },
    { image: "8.jpg", initial: "H", title: "Campos Eliseos suizos", date: "September 14, 2017", body: "Explendido bosque." }
];

const Gallery: FC = () => {
    const userService = new UserService();
    return (
        <>
            {userService.isLogin() &&
                <div className="card-list">
                    {ImageGallery.map((obj, index) => (
                        <ImageCard key={index} image={`./gallery/${obj.image}`}
                            initial={obj.initial}
                            title={obj.title}
                            date={obj.date}
                            body={obj.body}
                        />
                    ))}
                </div>}
            {!userService.isLogin() && <> {window.location.href = '/signin'}</>}
        </>
    );
}

export default Gallery;