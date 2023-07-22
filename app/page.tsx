const session = undefined;

export default function Home() {
  if (!session) throw new Error("error", { cause: "cause" });
  return <p>error</p>;
}
