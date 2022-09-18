import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetUserReposQuery } from '../../redux/api/github.api'
import { ServerReposResponse } from '../interfaces/IRepos'
interface ReposCadrProps{
    isReposLoading:boolean,
    isReposError:boolean,
    repos:ServerReposResponse[],
}

export default function Repos({isReposError,isReposLoading,repos}:ReposCadrProps) {


  return (
    <div className='mt-[100px] ml-[40px]'>
      {repos.map((el)=>
      <Link  key = {el.id} to={el.html_url} target='_blank'>
        <div className='flex border mt border-black '>
        <div className='flex items-end flex-col'>
        <span className=''>{el.visibility}</span>
        </div>
        <div className='flex'>
        <h1 className='text-4xl w-[700px]'>{el.name}</h1>
        </div>
        <div className='ml-auto'>
        <h2>{el.created_at.slice(0,10)}</h2>
        </div>
        </div>
        </Link>
      )}
    </div>
  )
}
