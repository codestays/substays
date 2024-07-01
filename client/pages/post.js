import React from 'react';

const Post = () => {
  return (
    <div className='border-t border-greylight border-opacity-15 flex flex-row pl-6 pr-6 pt-6 pb-4'>
        <div className='w-16 h-full bg-none'>
            <div className='w-full h-16 bg-none-500 flex items-center justify-center'>
            <div class="h-14 w-14 bg-chatwhite rounded-full hover: cursor-pointer"></div>
            </div>
        </div>
        <div className='w-full h-full bg-none-500 flex flex-col ml-3'>
            <div className='bg-none-500 flex gap-1.5 mt-1'>
                <div className='bg-none-500 mt-0 mb-0 font-thin text-greylight hover: cursor-pointer'>@tenstays</div>
                <div className='flex gap-1.5'>
                    <div className='bg-none-500 mt-0 mb-0 text-chatgreen'>|</div>
                    <div className='bg-none-500 mt-0 mb-0 text-greylight'>june 17 2024</div>
                </div>
            </div>
            <div className='w-full bg-none-500 flex'>
                <h1 className='bg-none-500 items-center flex font-bold hover: cursor-pointer'>content heading</h1>
                <div className=''></div>
            </div>
            <div className='w-full bg-none-500 font-thin mt-0 hover: cursor-pointer'>
                life is a special occassion! Every single person in this world has a purpose in their live. :)
            </div>
            <div className='border border-greylight border-opacity-25 h-52 bg-none-500 mt-2 rounded-xl hover: cursor-pointer'></div>
            <div className='bg-none-500 flex flex-row items-center mt-2'>
                <div class='w-4 h-4 bg-darkgrey flex flex-col justify-center hover:cursor-pointer'>
                    <div className='h-1/5 bg-greylight rounded-lg mb-1'></div>
                    <div className='h-1/6 bg-greylight rounded-lg mb-1'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post;