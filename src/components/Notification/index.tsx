import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type NotificationTypes = 'success' | 'info' | 'warning' | 'error';

export interface NotificationProps {
    message?: string;
    type: NotificationTypes;
}

export function Notification() {
    const notify = ({message, type}: NotificationProps): void => {
        if(message) {
            toast[type](message, {
                position: "top-right",
            });
        }
    };

    return {
        notify
    }
}