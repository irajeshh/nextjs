'use client';

import { useRouter } from 'next/navigation';
import * as W from '@/Widgets/Widgets';

export default function HomePage() {
  // const router = useRouter();



  return (
    <W.Column>
      <W.Txt text="Welcome to the Store" isBold={true} fontSize={20} />
      <W.Linker
        text="View Products"
        href="/products"
        openInNewTab={false}
      />
      <W.Linker
        text="View Counter"
        href="/counter"
        openInNewTab={false}
      />

    </W.Column>
  );
}