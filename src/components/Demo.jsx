import React,{useState,useEffect} from 'react'
import { copy, linkIcon, loader, tick } from "../assets";


const Demo = () => {

    const [article, setArticle] = useState({
        url:'',
        article:'',
    });

    const handleSubmit = async(e) => {
        alert("Submitted")
    }

  return (
    <section className='mt-16 w-full max-w-xl'>
        <div  className='flex flex-col w-full gap-2'>
            <form
            className='relative flex justify-center items-center'
            onSubmit={handleSubmit}>
                <img 
                src={linkIcon}
                alt="link_icon"
                className='absolute left-0 my-2 ml-3 w-5 h-5'
                />
                 <input
                type='url'
                value={article.url}
                onChange={(e)=>setArticle({...article,url:e.target.value})}
                placeholder='Paste the article link'
                required
                classN
                className='url_input peer'
                />
                
                <button
                type='submit'
                className='submit_btn peer-focus:border-gray-600 peer-focus:text-gray-600'>
                    <p>↵</p>
                </button>
            </form>
        </div>
    </section>
  )
}

export default Demo