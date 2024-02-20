"use client";

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
}

/**
 * localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
 * 뒤로가기 차이
 *
 * router.push
 * localhost:3000/i/flow/login -> localhost:3000/login
 *
 * router.replace
 * localhost:3000/i/flow/login -> localhost:3000
 */
