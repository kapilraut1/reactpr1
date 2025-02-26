import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}