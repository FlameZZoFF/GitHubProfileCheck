
import React, { useEffect, useState } from 'react'
import useDebounce from '../components/hooks/useDebounce'
import { useGetGitUsersQuery, useGetOneUserQuery } from '../redux/api/github.api'
import { Link } from 'react-router-dom'

export default function StartPage() {
    const [search,setSearch] = useState('')
    const debounced = useDebounce(search)
    const {data,isLoading,isError} = useGetGitUsersQuery(debounced,{
        skip:debounced.length === 0,
    })
    
   
  return (
    
      <div className='h-screen w-auto  flex justify-center flex-col text-center items-center bg-gray-300'>
      <input
      type='text'
      className='w-1/2 h-20 text-3xl pl-3 border border-black '
      placeholder='Введите имя пользователя'
      value={search}
      onChange={(e:any) => setSearch(e.target.value)}
      >
      </input>
      <div >
      {isError && <p>Произошла ошибка</p>}
      {isLoading && <p>Идет загрузка...</p>}
      <div className=' bg-white  scroll overflow-y-auto h-[300px] '>
      {data?.map((el)=>
      <Link to= {`/user/${el.login}`}>
      <div className='w-[950px]  flex bg-gray-100 border border-black transition-all  hover:bg-gray-700 cursor-pointer'  key ={el.id}>
      <div className=''><img className='w-10 h-10 rounded-full' src={el.avatar_url}/></div>
      <h2 className='text-3xl'>{el.login}</h2>
      </div>
      </Link>
      
      )}
      </div>
      </div>
      </div>

  )
}
