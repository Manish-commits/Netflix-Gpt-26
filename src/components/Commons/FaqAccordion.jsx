import React, { useState } from 'react'

const FaqAccordion = ({faqList}) => {
    const [allfaqs, setAllFaqs] = useState(faqList);

    const displayAnswer = (currFaq) => {
        let faqs = [...allfaqs];
        let updatedFaqs = faqs.map((elem) => {
            if(elem.question === currFaq.question) {
                return {...elem, isShow: !elem.isShow}
            } else {
                return {...elem, isShow: false}
            }
        });

        console.log(updatedFaqs);
        setAllFaqs([...updatedFaqs]);
    } 


  return (
    <div className='w-full flex flex-col gap-1'>
        {
            allfaqs.map((currFaq, index) => {
                return <li key={index} className='list-none bg-[rgb(45,45,45)] text-[24px] font-normal p-6 cursor-pointer accordion-body'>
                    <button 
                    className='w-full flex justify-between items-center bg-[rgb(45,45,45)] accordion-body' 
                    onClick={() => displayAnswer(currFaq)}
                    >
                        {currFaq.question}
                        <span className='text-[54px] leading-none '>+</span>
                    </button>
                    <h2 className={`mt-2 ${currFaq.isShow ? 'block' : 'hidden' }`} >{currFaq.answer}</h2>
                </li>
            })
        }
    </div>
  )
}

export default FaqAccordion
