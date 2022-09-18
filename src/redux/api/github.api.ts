import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser,ServerResponse } from '../../components/interfaces/ServerResponse'
import { ServerReposResponse } from '../../components/interfaces/IRepos'

export const gitHubApi = createApi({
    reducerPath: 'gitHubApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
    endpoints: (build) => ({
      getGitUsers: build.query<IUser[], string>({
        query: (search:string) => ({
            url:`search/users`,
            params:{
                q:search,
                per_page:10,
            }
        }),
        transformResponse:(response:ServerResponse<IUser>) => response.items
      }),
      getOneUser:build.query<IUser,any>({
        query:(userName:string)=>({
          url:`users/${userName}`
        })
      }),
      getUserRepos:build.query<ServerReposResponse[],any>({
        query:(userName:string)=>({
          url:`users/${userName}/repos`
        })
      })
    }),
  })


  export const {useGetGitUsersQuery,useGetOneUserQuery,useGetUserReposQuery} = gitHubApi