import React from 'react';
import { IQuarterData } from '@/types/types';
import { TbNorthStar } from 'react-icons/tb'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { MdLabelImportant } from 'react-icons/md'

function Coursecontent({ data }: { data: IQuarterData }) {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[1200px] mt-20'>

                {/* Course Description */}

                <div className='text-zinc-800'>
                    <h1 className='text-5xl font-bold flex items-center gap-5'>Course Description <TbNorthStar size={30} className='text-[#D46A8E]' /></h1>
                    <div className='mt-10'>
                        {
                            data.description.map((val, index) => {
                                return (
                                    <p key={index} className='mb-5 word_spacing text-sm bg-slate-100 p-5 rounded-xl'>{val}</p>
                                )
                            })
                        }
                    </div>
                </div>

                {/* Course Outline */}

                <div className='mt-20'>
                    <h1 className='text-5xl font-bold flex items-center gap-5'>Course Outline <TbNorthStar size={30} className='text-[#D46A8E]' /></h1>
                    <div className='mt-10'>
                        {
                            data.outline.map((val, index) => {
                                return (
                                    <div key={index}>
                                        <h1 className='text-2xl text_gradient font-bold mb-5 mt-10'>{val.title}</h1>
                                        <div className={val.children?.length ? 'text-sm text-zinc-800 bg-slate-100 p-5 rounded-xl' : ''}>
                                            {
                                                val.children?.map((child, childIndex) => {
                                                    return (
                                                        <div key={childIndex} className='mt-5 mb-5'>
                                                            {
                                                                child.map((sub_child: any, subChildIndex) => {
                                                                    return (
                                                                        <div key={subChildIndex} className=''>
                                                                            {
                                                                                sub_child.type === 'text' ?
                                                                                    <p>{sub_child.text}</p>
                                                                                    :
                                                                                    sub_child.type === 'link' ?
                                                                                        <a href={sub_child.url} className='text-blue-600 flex items-center gap-3'>
                                                                                            <HiOutlineExternalLink className='text-gray-400' size={16} />
                                                                                            <span className='lowercase'>{sub_child.text}</span>
                                                                                        </a>
                                                                                        :
                                                                                        sub_child.type === 'sub-heading' ?
                                                                                            <p className='text-xl font-bold'>{sub_child.text}</p>
                                                                                            :
                                                                                            sub_child.type === 'h3' ?
                                                                                                <p className='text-lg font-bold'>{sub_child.text}</p>
                                                                                                :
                                                                                                sub_child.type === 'note' ?
                                                                                                    <p className='flex items-start gap-3 font-bold'><span className=' w-4'><MdLabelImportant className='text-[#8A34D1]' size={16} /></span>Note : {sub_child.text}</p>
                                                                                                    :
                                                                                                    sub_child.type === 'list' ?
                                                                                                        <ul className='list-disc ml-10'>

                                                                                                            {
                                                                                                                sub_child.children.map((list: any, list_index: number) => {
                                                                                                                    return (
                                                                                                                        <li key={list_index} className='mb-2 mt-2'>
                                                                                                                            {
                                                                                                                                list.map((list_item: any, list_item_index: number) => {
                                                                                                                                    return (
                                                                                                                                        <div key={list_item_index}>
                                                                                                                                            {
                                                                                                                                                list_item.type === 'text' ?
                                                                                                                                                    <p>{list_item.text}</p>
                                                                                                                                                    :
                                                                                                                                                    list_item.type === 'link' ?
                                                                                                                                                        <a href={list_item.url} className='text-blue-600 flex items-center gap-3'>
                                                                                                                                                            <HiOutlineExternalLink className='text-gray-400' size={16} />
                                                                                                                                                            <span className='lowercase'>{list_item.text}</span>
                                                                                                                                                        </a>
                                                                                                                                                        :
                                                                                                                                                        false
                                                                                                                                            }
                                                                                                                                        </div>
                                                                                                                                    )
                                                                                                                                })
                                                                                                                            }
                                                                                                                        </li>
                                                                                                                    )
                                                                                                                })
                                                                                                            }
                                                                                                        </ul>
                                                                                                        :
                                                                                                        false
                                                                            }
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Coursecontent;