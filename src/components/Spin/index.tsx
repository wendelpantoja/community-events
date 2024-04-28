import { Spin, ConfigProvider } from 'antd';
import { ContainerSpin } from './styles';

type SpinProps = {
    colorPrimary: string;
    colorContainer: string;
}
// '#DCE9E2'
//'#f6ffed'
export function HandleSpin({ colorPrimary, colorContainer }: SpinProps) {
    return (
        <ContainerSpin>
            <ConfigProvider
                theme={{
                    token: {
                      colorPrimary: colorPrimary,
                      borderRadius: 2,
                      colorBgContainer: colorContainer,
                    },
                  }}
            >
                <Spin />
            </ConfigProvider>
        </ContainerSpin>
    )
}