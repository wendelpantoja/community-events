import { useState } from 'react';
import { ContainerDash, ContainerElemens, HeaderDash, Layout } from './styles';
import { Modal } from '../../components/Modal';
import { Container } from '../../styles/GlobalStyles';
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';

export function Dashboard() {
    const local = useLocation()
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
                        <h3>Dashboard</h3>
                        <i className='bx bx-log-out-circle' onClick={handleModalOpen} />
                    </ContainerElemens>
                </Container>

            </HeaderDash>

            <ContainerDash>
                
                <div className="links">
                    <ul>
                        <li>
                            <Link 
                                className={local.pathname === "/dashboard/create-event" ? "active_link" : "active_hover"} 
                                to="/dashboard/create-event"
                            >
                                Criar evento
                            </Link>
                        </li>
                        <li>
                            <Link 
                                className={local.pathname === "/dashboard/events-dash" ? "active_link" : "active_hover"} 
                                to="/dashboard/events-dash"
                            >
                                Eventos
                            </Link>
                        </li>
                    </ul>
                </div>
                
                <Outlet />

            </ContainerDash>

            {handleModal && (<Modal handleModal={handleModalAction}/>)}
        </Layout>
    )
}