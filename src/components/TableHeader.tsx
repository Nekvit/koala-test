import { FC } from 'react';

type TableHeaderProps = {
    items: string[];
};

export const TableHeader: FC<TableHeaderProps> = ({ items }) => {
    return (
        <div className="flex gap-2 bg-amber-200 p-2 mb-2">
            <div className="w-24 overflow-hidden" />
            {items.map((item, index) => (
                <div key={`h-${index}`} className="w-24 overflow-hidden">
                    {item}
                </div>
            ))}
            <div className="w-24 overflow-hidden">Delete</div>
        </div>
    );
};
