import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { FiMinus } from 'react-icons/fi'

export default function Accordian({faq, currentIndex, index, setCurrentIndex}) {

    console.log(currentIndex, index)

    const changeIndex = (i) => {
        if(currentIndex == i){
            setCurrentIndex(-1)
        } else{
            setCurrentIndex(i)
        }
    }

    return (
        <>
            <div class="overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm shadow-slate-200/60">
                <div class="flex items-center justify-between gap-6 px-6 py-5">
                    <div onClick={ () => changeIndex(index) }>
                        <h3 class="text-base font-semibold text-slate-900 sm:text-lg cursor-pointer">
                            { faq.question }
                        </h3>

                        <p class={ currentIndex == index ? "mt-2 text-sm leading-6 text-slate-500" : "mt-2 text-sm leading-6 text-slate-500 hidden" }>
                            { faq.answer }
                        </p>
                    </div>

                    {
                        currentIndex == index
                        ?
                        <button type="button" class="cursor-pointer flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition hover:bg-indigo-100">
                            <FiMinus />
                        </button>
                        :
                        <button type="button" class="cursor-pointer flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600">
                        <FaPlus />
                    </button>
                    }
                </div>
            </div>
        </>
    )
}
