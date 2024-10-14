import { useSyncExternalStore } from 'react';

export const useWindowValue = (value: keyof Window, event: string) => {
    const subscribe = (callback: any) => {
        window.addEventListener(event, callback);
        return () => {
            window.removeEventListener(event, callback);
        };
    };
    const getSnapshot = () => {
        return window[value];
    };
    return useSyncExternalStore(subscribe, getSnapshot);
};
