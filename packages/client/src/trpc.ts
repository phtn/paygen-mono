import {
	createTRPCProxyClient,
	httpBatchLink,
	inferRouterProxyClient,
	loggerLink,
} from '@trpc/client'
import type { AppRouter } from '@server/routes'

type RouterOutput = inferRouterProxyClient<AppRouter>
export type GetUser = RouterOutput['get']['getUser']
export type SendMessage = RouterOutput['post']['sentMessage']

export const client = createTRPCProxyClient<AppRouter>({
	links: [loggerLink(), httpBatchLink({ url: 'http://localhost:8080/trpc' })],
})
