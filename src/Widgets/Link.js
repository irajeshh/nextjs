import Link from 'next/link';

/// A common link widget to allow the link or route to open in new tab
export function Linker({ href, text, openInNewTab, }) {
    const style = openInNewTab ? { target: '_blank' } : {};
    return (
        <Link
            href={href ?? '/'} {...style}>{text}
        </Link>
    );
}