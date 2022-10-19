import { Resolvers } from 'generated/types'
import { Context } from '../../../libs/context'

export const mutation: Resolvers<Context>['Mutation'] = {
  createUser: async (_parent, { input }, ctx) =>
    ctx.prisma.user.create({ data: input }),
  updateUser: async (_parent, { id, input }, ctx) =>
    ctx.prisma.user.update({
      where: { id },
      data: {
        username: input.username ?? undefined,
      },
    }),
  // createTask: async (_parent, _args, ctx) =>
  //   ctx.prisma.task.create({ input:
  //     title: _args.data.title,
  //     description: _args.data.description,
  //     list: _args.listId && {
  //       connect: { id: _args.listId },
  //     },
  //     StatusType: _args.data.StatusType,
  //      }),

  // updateTask async (_parent, { input }, ctx) =>
  // ctx.prisma.user.update({
  //   where: { id },
  //   data: {
  //     title: title,
  //     StatusType : StatusType,
  //   },
  // }),  
      }
      
  