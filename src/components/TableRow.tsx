import { ArrowDownSquareIcon, XIcon } from 'lucide-react';
import { FC, useContext, useState } from 'react';
import { Table } from './Table';
import classNames from 'classnames';
import { TableContext } from '../contexts/TableContext';
import { Children } from '../utlis/helpers';

type TableRowProps = {
    item: {
        data: Record<string, string>;
        children: Children[];
    };
    indexesPath: number[];
};

export const TableRow: FC<TableRowProps> = ({ item, indexesPath }) => {
    const [isOpen, setIsOpen] = useState(false);
    const values = Object.values(item.data);
    const hasChildren = item.children && item.children.length > 0;
    const context = useContext(TableContext);

    const deleteRow = () => {
        context.removeRow(indexesPath);
    };

    return (
        <>
            <div className="flex gap-2 px-2">
                <div
                    className={classNames('w-24 overflow-hidden', {
                        'cursor-pointer': hasChildren,
                    })}
                    onClick={() => hasChildren && setIsOpen((prev) => !prev)}
                >
                    {hasChildren ? (
                        <ArrowDownSquareIcon
                            className={isOpen ? 'rotate-180' : undefined}
                        />
                    ) : null}
                </div>
                {values.map((row, index) => (
                    <div key={`row-${index}`} className="w-24 overflow-hidden">
                        {row}
                    </div>
                ))}
                <div
                    className={'w-24 overflow-hidden cursor-pointer'}
                    onClick={deleteRow}
                >
                    <XIcon className="stroke-red-700" />
                </div>
            </div>
            <div className="px-5 pt-2">
                {hasChildren && isOpen ? (
                    <Table map={item.children} indexesPath={indexesPath} />
                ) : null}
            </div>
        </>
    );
};
