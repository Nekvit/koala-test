'use client';

import { FC, useState } from 'react';
import { Table } from '../components/Table';
import { Children, findAndRemoveLastItemByIndexes } from '../utlis/helpers';
import { TableContext } from '../contexts/TableContext';

export const TableView: FC<{ data: Children[] }> = ({ data }) => {
    const [map, setMap] = useState(data);

    const removeRow = (indexes?: number[]) => {
        if (!indexes) return;
        setMap(findAndRemoveLastItemByIndexes([...map], indexes));
    };

    return (
        <TableContext value={{ removeRow }}>
            <Table map={map} indexesPath={[]} isRoot />;
        </TableContext>
    );
};
