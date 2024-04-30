import { auth, currentUser } from "@clerk/nextjs/server";

// random async function
async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// adding the config would allow build to work
// export const dynamic = "force-dynamic";

export default async function Home() {
	const user = await currentUser();

	await sleep(3000);

	if (!user) {
		return <h1>Not Logged In</h1>;
	}

	return <h1>User {user.id}</h1>;
}
