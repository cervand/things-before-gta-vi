import { useEffect, useState } from 'react';
import { fetchList } from '@/lib/fetchList';
import { ListItem } from '@/types/listItem';

export function useListItems() {
    const [items, setItems] = useState<ListItem[]>([]);

    useEffect(() => {
        async function loadItems() {
            const data = await fetchList();
            setItems(data);
        }
        loadItems();
    }, []);

    return items;
}