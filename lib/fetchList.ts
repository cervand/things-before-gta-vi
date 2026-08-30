export async function fetchList() {
    const response = await fetch('/api/list/items');
    const data = await response.json();
    return data;
}