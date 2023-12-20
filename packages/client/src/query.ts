import { client } from './trpc'

export const getUser = async () => {
	const result = await client.getUser.query()
	return result
}

export const sendMessage = async () => {
	const result = await client.sendMessage.query({
		author: 'me',
		message: 'hello',
	})
	return result
}
