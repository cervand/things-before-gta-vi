import { NextRequest, NextResponse } from 'next/server';
import { ListItem } from '@/types/listItem';

const items: ListItem[] = [
    {
        id: '1',
        text: 'Surgery on a grape',
        author: 'Random person',
        date: '2024-06-01',
    },
    {
        id: '2',
        text: 'Pandemic',
        author: 'Somehow an even more random person',
        date: '2024-06-02',
    },
];

export async function GET(request: NextRequest) {
    return NextResponse.json(items);
}