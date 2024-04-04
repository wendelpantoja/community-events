import { useState } from 'react';
import { ContainerDash, ContainerElemens, HeaderDash, Layout } from './styles';
import { Modal } from '../../components/Modal';
import { LogoutOutlined } from '@ant-design/icons';
import { Container } from '../../styles/GlobalStyles';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';

export function Dashboard() {
    const [handleModal, setHandleModal] = useState(false)

    const auth = useAuth()

    if(!auth?.user) {
        return <Navigate to="/login" />
    }

    function handleModalAction(value: boolean) {
        setHandleModal(value)
    }

    function handleModalOpen() {
        setHandleModal(true)
    }
    
    return (
        <Layout>
            <HeaderDash>

                <Container>
                    <ContainerElemens>
                        <h2>Dashboard</h2>
                        <LogoutOutlined onClick={handleModalOpen} />
                    </ContainerElemens>
                </Container>

            </HeaderDash>

            <ContainerDash>
                <div className="links">
                    <Link to="/dashboard/create-event">Criar evento</Link>
                    <Link to="/dashboard/events-dash">Eventos</Link>
                </div>
                
                <Outlet />
            </ContainerDash>

            {handleModal && (<Modal handleModal={handleModalAction}/>)}
        </Layout>
    )
}