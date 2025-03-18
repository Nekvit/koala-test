import { getTransformedData } from '../utlis/helpers';
import { TableView } from '../views/Table.view';

export default function Home() {
    const data = getTransformedData();

    return <TableView data={data} />;
}
