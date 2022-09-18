import React from 'react'
import { useGetOneUserQuery, useGetUserReposQuery } from '../redux/api/github.api'
import { useParams } from 'react-router-dom'
import Repos from '../components/Repos/Repos'
export default function UserPage() {
  const {id} = useParams()
  const {data:user,isLoading:isUserLoading,isError:isUserError} = useGetOneUserQuery(id)
  const {data:repos = [],isLoading:isReposLoading,isError:isReposError} = useGetUserReposQuery(id)

  return (
    <div>
      {isUserError 

      ? 

      <p className='text-center text-9xl mt-[400px]'>404 page not found</p> 
      
      : 
      
      isUserLoading 
      
      ? 
      
      <p>Loading...</p> 
      
      : 

      <div className=' text-center'>
        <h1 className='text-4xl text-center'>{user?.login}</h1>
        <div className='flex'>
        <img className='rounded-full w-96 h-96' src={user?.avatar_url}></img>
        <Repos repos={repos} isReposLoading={isReposLoading} isReposError = {isReposError} />
        </div>
        </div>}
    </div>
  )
}
