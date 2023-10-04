import { Spin, ConfigProvider } from 'antd';
import { ContainerSpin } from './styles';
export function HandleSpin() {
    return (
        <ContainerSpin>
            <ConfigProvider
                theme={{
                    token: {
                      colorPrimary: '#DCE9E2',
                      borderRadius: 2,
                      colorBgContainer: '#f6ffed',
                    },
                  }}
            >
                <Spin />
            </ConfigProvider>
        </ContainerSpin>
    )
}