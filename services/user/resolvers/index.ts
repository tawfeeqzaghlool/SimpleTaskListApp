import { prisma } from '@prisma/client'
import { Resolvers, StatusType } from 'generated/types'
import { Context } from '../../../libs/context'
import { mutation } from './mutation'
import { query } from './query'

export const resolvers: Resolvers<Context> = {
  Query: query,
  Mutation: mutation,
  // Task: task,
  // List: list,
}

// export const Task = {
//   id: (parent: { id: any }) => parent.id,
//   title: (parent: {title: any}) => parent.title,
//   description: (parent: {description: any}) => parent.description,
//   list: (parent: {list: any}, args: any) => {
//     return prisma.list.findFirst({
//       where: { id: parent.list}
//     })
//   },
//   status: (parent: {status: StatusType}) => parent.status,

// }

// export const List = {
//   id: (parent: {id: any}) => {
//     return parent.id
//   },
//   titlelist: (parent: {titlelist: any}) => parent.titlelist,
//   tasks: (parent: {id:any}, args:any) => {
//     return prisma.task.findUnique({
//       where: { id: parent.id },
//     }).tasks();
