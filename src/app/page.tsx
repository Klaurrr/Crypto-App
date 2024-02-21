"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Pages } from "@/shared";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		router.push(Pages.HOME);
	}, []);

	return <></>;
}
