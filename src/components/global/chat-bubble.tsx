"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ChatBubble = () => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1.5,
            }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-5 right-5 w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        >
            <MessageCircle className="text-white w-8 h-8" />
        </motion.div>
    );
};

export default ChatBubble;
