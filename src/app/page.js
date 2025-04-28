'use client';

import { useRouter } from 'next/navigation';
import * as W from '@/Widgets/Widgets';

// HomePage to test both synchronous and asynchronous page loading
export default function HomePage() {
  // const router = useRouter();
  return (
    <W.Column>
      <W.Txt text="Welcome to the Store" isBold={true} fontSize={20} />
      {/* Asynchronous action page which will be shown only after loading the products from repository */}
      <W.Linker
        text="View Products"
        href="/products"
        openInNewTab={false}
      />
      {/* Synchronos page which has nothing to load from repository or API to show, so it will be immediately shown */}
      <W.Linker
        text="View Counter"
        href="/counter"
        openInNewTab={false}
      />

    </W.Column>
  );
}