import { NextRequest, NextResponse } from 'next/server';
import { ListItem } from '@/types/listItem';

export const dynamic = 'force-dynamic';

const items: ListItem[] = [
    {
        id: '1',
        text: 'Surgery on a grape',
        date: '2024-06-01',
    },
    {
        id: '2',
        text: 'Pandemic',
        date: '2024-06-02',
    },
];

export async function GET() {
    return NextResponse.json(items);
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const newItem: ListItem = {
        id: (items.length + 1).toString(),
        text: body.text,
        date: new Date().toISOString().split('T')[0],
    };
    items.push(newItem);
    return NextResponse.json(newItem);
}