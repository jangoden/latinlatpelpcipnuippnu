'use client';

import { usePathname } from 'next/navigation';
import ChatBot from './chatbot';

export default function ChatBotWrapper() {
    const pathname = usePathname();

    // Hide ChatBot on login and admin pages
    const isExcluded = pathname?.startsWith('/login') || pathname?.startsWith('/admin');

    if (isExcluded) {
        return null;
    }

    return <ChatBot />;
}
