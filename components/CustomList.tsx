import { List, ListItem, ListItemText } from '@mui/material';
import { ListItem as ListItemType } from '@/types/listItem';

interface ListProps {
    items: ListItemType[];
}

export default function CustomList({ items }: ListProps) {
    return (
        <List>
            {items.map((item, index) => (
                <ListItem key={index}>
                    <ListItemText primary={item.text} />
                </ListItem>
            ))}
        </List>
    );
}