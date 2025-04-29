'use client';

import * as W from '@/Widgets/Widgets';

export default function HomePage() {
  return (
    <W.Center>
      <W.Column>
        <W.Txt
          text="Welcome to the Store"
          isBold={true}
          fontSize={48}
          className="text-center"
        />

        <div className="flex flex-col items-center gap-6">
          <W.Linker
            text="🛒 View Products list"
            href="/products"
            openInNewTab={false}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          />
          <W.Linker
            text="🔢 View Counter"
            href="/counter"
            openInNewTab={false}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          />
        </div>
      </W.Column>
    </W.Center>
  );
}