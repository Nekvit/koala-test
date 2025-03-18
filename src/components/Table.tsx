'use client';

import { FC, useMemo } from 'react';
import { TableRow } from './TableRow';
import { TableHeader } from './TableHeader';
import classNames from 'classnames';
import { Children } from '../utlis/helpers';

type TableProps = {
    map: Children[];
    isRoot?: boolean;
    indexesPath: number[];
};

export const Table: FC<TableProps> = ({ map, isRoot = false, indexesPath }) => {
    const mapKeys = useMemo(() => Object.keys(map[0].data), [map]);

    return (
        <div
            className={classNames('text-xs border-gray-300', {
                'border m-10': isRoot,
            })}
        >
            <TableHeader items={mapKeys} />
            {map.map((item, index) => (
                <TableRow
                    item={item}
                    key={`root-row-${index}`}
                    indexesPath={[...indexesPath, index]}
                />
            ))}
        </div>
    );
};
