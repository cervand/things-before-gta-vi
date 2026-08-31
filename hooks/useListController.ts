import { useState } from 'react';
import { ListItem, ListItemSubmission } from '@/types/listItem';
import { submitListItem, fetchListItems } from '@/lib/listAPI';

export function useListController() {
    const [items, setItems] = useState<ListItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadItems = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchListItems();
            setItems(data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    const addItem = async (item: ListItemSubmission) => {
        setLoading(true);
        setError(null);
        try {
            const newItem = await submitListItem(item);
            setItems((prevItems) => [...prevItems, newItem]);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return {
        items,
        loading,
        error,
        loadItems,
        addItem,
    };
}
