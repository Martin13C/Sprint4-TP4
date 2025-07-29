import { motion } from 'framer-motion';
import { BarChart } from 'lucide-react';

function Footer() {

    return (
        <footer className="text-center p-6 text-gray-50 bg-purple-900 border-t border-gray-300 font-sans flex flex-col items-center gap-2">
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7, ease: "easeIn" }}
                className="text-sm"
            >
                Agradecimientos a&nbsp;
                <a
                    href="https://rickandmortyapi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                >
                    Rick and Morty API
                </a>
            </motion.span>
        </footer>
    );
}
export default Footer