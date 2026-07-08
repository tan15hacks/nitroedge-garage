import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#060607] px-6 text-center text-white">
      <div className="max-w-xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-red-500">404</p>
        <h1 className="font-display mt-5 text-6xl font-bold uppercase italic tracking-[-0.05em] sm:text-8xl">Wrong turn.</h1>
        <p className="mt-6 text-lg font-semibold leading-8 text-zinc-400">
          This route is off the map. Head back to the NitroEdge Garage homepage.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-red-600 px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-xl shadow-red-600/25 transition hover:-translate-y-1"
        >
          Back to garage
        </Link>
      </div>
    </main>
  );
}
