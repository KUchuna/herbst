import {motion } from "framer-motion"
import { prefixes } from "@/lib/datas/prefixes"
import { useState } from "react";
import Image from "next/image";
import searchIco from "@/public/assets/search.svg"

const container = {
    hidden: { 
        height: 0,
    },
    visible: {
        height: 300,
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
    searchRef: React.MutableRefObject<null>
}


export default function PhonePrefix({handleSelection, searchRef}: PhonePrefixProps) {

    const [search, setSearch] = useState("")
    const [searchedValues, setSearchedValues] = useState(prefixes.countries)


    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = e.target.value;
        
        setSearch(inputValue)

        const filteredPrefixes = prefixes.countries.filter((prefix) =>
            prefix.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        setSearchedValues(filteredPrefixes)
    }

    return (
        <motion.ul
            className="select-none bg-white border-[1px] border-[#C9C9C9] rounded-lg absolute -bottom-1 translate-y-[100%] -left-[1px] w-fit overflow-y-auto"
            id="phone-prefix"
            variants={container}
            initial="hidden"
            exit="exit"
            animate="visible"
        >
            <div className="sticky top-0 py-2 bg-white w-full px-2 flex">
                <div className="flex items-center border-[1px] border-[#C9C9C9] rounded-lg w-full px-2">
                    <Image src={searchIco} alt=""/>
                    <input type="text" ref={searchRef} className="outline-none rounded-lg py-1 px-2" onChange={handleSearch} value={search}/>
                </div>
            </div>
            {searchedValues.map((prefix, index) => (
                <motion.li 
                    key={index}
                    variants={item} 
                    className="py-2 hover:bg-secondary-light cursor-pointer text-sm px-3"
                    onClick={() => handleSelection(prefix.code)}
                >
                {prefix.code +" " + prefix.name}
                </motion.li>
            ))}
        </motion.ul>
    )
}
