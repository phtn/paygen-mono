import { useEffect, useState } from 'react'
import './App.css'
import { getUser } from './query.ts'
import { SendMessage } from './trpc.ts'

const App = () => {
	const [user, setUser] = useState<SendMessage>()

	useEffect(() => {
		getUser().then((user) => setUser(user))
	}, [])

	return (
		<div>
			Client: {user?.name} | {user?.id}
		</div>
	)
}

export default App
