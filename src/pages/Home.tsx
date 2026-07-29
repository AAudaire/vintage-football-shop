import Featured from "../components/Featured";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Featured />
      </main>
    </>
  );
}
