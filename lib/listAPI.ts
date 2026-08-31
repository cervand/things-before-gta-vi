export async function fetchListItems() {
    const response = await fetch('/api/list/items');
    const data = await response.json();
    return data;
}

export async function submitListItem(item: { text: string }) {
    const response = await fetch('/api/list/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    });
    const data = await response.json();
    return data;
}