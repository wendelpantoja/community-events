import { ContainerEvents } from "../../components/ContainerEvents";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchEvents, SectionOne } from "./styles";
import { FaSearch } from "react-icons/fa"

export function Events() {
    return(
        <>
            <SectionOne>
                <Header />
                <div className="container_text">
                    <h2>
                        Encontre os principais eventos da sua cidade
                    </h2>
                </div>
                <SearchEvents>
                    <div className="container_search">
                        <div className="search">
                            <FaSearch />
                            <input type="text" placeholder="Pesquisar eventos"/>
                        </div>
                        <div className="selecteds">
                            <select name="" id=""><option value="">Cursos e Workshops</option></select>
                            <select name="" id=""><option value="">Estado</option></select>
                        </div>
                    </div>
                </SearchEvents>
            </SectionOne>
            <ContainerEvents event="online"/>
            <ContainerEvents event="presenciais"/>
            <ContainerEvents event="híbridos"/>
            <Footer />
        </>
    )
}