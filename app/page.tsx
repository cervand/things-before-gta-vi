"use client";
import List from "@/components/List";
import { useListItems } from '@/hooks/useListItems';

export default function Home() {

  const items = useListItems();

  return (
    <div>
      <List items={items} />
    </div>
  );
}
