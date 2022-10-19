import { prisma} from '@prisma/client'
import { Resolvers } from 'generated/types'
import { Context } from '../../../libs/context'

export const query: Resolvers<Context>['Query'] = {
  users: async (_parent, _args, ctx) => ctx.prisma.user.findMany(),
  user: async (_parent, { id }, ctx) =>
    ctx.prisma.user.findUnique({
      where: { id },
    }),
 
  // getalltasks: async (_parent, _args, ctx) => ctx.prisma.task.findMany(),
  // gettask: async (_parent, {id}, ctx) =>
  //   ctx.prisma.task.findUnique({
  //     where: { id },
  //   }),
  // getalllists: async (_parent, _args, ctx) => ctx.prisma.list.findMany(),
  // getlist: async (_parent, {id}, ctx) =>
  //   ctx.prisma.list.findUnique({
  //     where: { id },
  //     }),
  }