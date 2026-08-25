import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { FiMinus } from 'react-icons/fi'
import { faqs } from '../faqData';
import Accordian from './Accordian';

export default function HomePage() {

    var [getFaqs, setGetFaqs] = useState(faqs);
    var [currentIndex, setCurrentIndex] = useState(0)

    return (
        <>
            <section class="min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-3xl">

                    {/* <!-- Header --> */}
                    <div class="mb-10 text-center">
                        <span class="mb-3 inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
                            Frequently Asked Questions
                        </span>

                        <h1 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Everything you need to know
                        </h1>

                        <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
                            Find answers to the most common questions about our product,
                            features, pricing, and everything in between.
                        </p>
                    </div>

                    {/* <!-- Accordion --> */}
                    <div class="space-y-4">
                        {
                            getFaqs.map((item, index) => {
                                return(
                                    <Accordian faq={item} key={index} currentIndex={currentIndex} index={index} setCurrentIndex={setCurrentIndex}/>
                                )
                            })
                        }
                    </div>

                    {/* <!-- Bottom CTA --> */}
                    <div class="mt-10 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-6 text-center">
                        <h3 class="font-semibold text-slate-900">
                            Still have questions?
                        </h3>

                        <p class="mt-1 text-sm text-slate-500">
                            Our support team is happy to help you with anything else.
                        </p>

                        <button
                            class="mt-4 inline-flex items-center rounded-xl bg-indigo-600 px-5 py-2.5
               text-sm font-semibold text-white shadow-sm transition
               hover:bg-indigo-700 focus:outline-none focus:ring-2
               focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Contact Support
                        </button>
                    </div>

                </div>
            </section>
        </>
    )
}
