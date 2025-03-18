'use client';

import { useState } from 'react';
import { Table } from '../components/Table';
import {
    findAndRemoveLastItemByIndexes,
    getTransformedData,
} from '../utlis/helpers';
import { TableContext } from '../contexts/TableContext';

export const TableView = () => {
    const data = getTransformedData();
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
