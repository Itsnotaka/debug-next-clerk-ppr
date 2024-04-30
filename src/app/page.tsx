import { auth } from "@clerk/nextjs/server";

// random async function
async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
	const { userId } = auth();

	await sleep(3000);

	if (userId) {
		return <h1>User {userId}</h1>;
	}

	return <h1>Home Page</h1>;
}
