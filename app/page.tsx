"use client";
import List from "@/components/List";
import SubmitBar from "@/components/SubmitBar";
import { useListItems } from '@/hooks/useListItems';
import { useSubmitBar } from '@/hooks/useSubmitBar';

export default function Home() {

  const items = useListItems();

  return (
    <div>
      <SubmitBar/>
      <List items={items} />
    </div>
  );
}
