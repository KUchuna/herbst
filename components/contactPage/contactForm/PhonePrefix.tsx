import {motion } from "framer-motion"
import { prefixes } from "@/lib/datas/prefixes"

const container = {
    hidden: { 
        height: 0,
    },
    visible: {
        height: 180,
        transition: {
        duration: 0.1,
        delayChildren: 0.1,
        },
    },
    exit: {
        height: 0,
        transition: {
            duration: 0.1,
            delay: 0.1
        },
    }
}

  const item = {
    hidden: { opacity: 0},
    visible: { opacity: 1 },
    exit: {opacity: 0, transition: {
        duration: 0.1
    }}
}

interface PhonePrefixProps {
    handleSelection: (code: string) => void;
}


export default function PhonePrefix({handleSelection}: PhonePrefixProps) {
    return (
        <motion.ul
            className="select-none bg-white border-[1px] border-[#C9C9C9] rounded-lg absolute -bottom-1 translate-y-[100%] -left-[1px] w-fit overflow-y-auto"
            id="phone-prefix"
            variants={container}
            initial="hidden"
            exit="exit"
            animate="visible"
        >

            {prefixes.countries.map((prefix, index) => (
                <motion.li 
                    key={index}
                    variants={item} 
                    className="px-3 py-2 hover:bg-secondary-light cursor-pointer"
                    onClick={() => handleSelection(prefix.code)}
                >
                {prefix.shortName+": "+prefix.code}
                </motion.li>
            ))}
        </motion.ul>
    )
}
