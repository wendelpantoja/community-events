import { ContainerEvents } from "../../components/ContainerEvents";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Selected } from "../../components/Selected";
import { SearchEvents, SectionOne } from "./styles";


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
            </SectionOne>
            <SearchEvents>
                <div className="search">
                    <i className='bx bx-search-alt-2'></i>
                    <input type="text" placeholder="Pesquisar eventos"/>
                </div>
                <Selected />
            </SearchEvents>
            <ContainerEvents event="Online"/>
            <ContainerEvents event="Presenciais"/>
            <ContainerEvents event="Híbridos"/>
            <Footer />
        </>
    )
}