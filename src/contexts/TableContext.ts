import { Context, createContext } from 'react';

export const TableContext: Context<{ removeRow: (ids?: number[]) => void }> =
    createContext({
        removeRow: () => console.log(),
    });
