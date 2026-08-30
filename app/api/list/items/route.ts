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