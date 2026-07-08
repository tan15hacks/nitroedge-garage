export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#060607] text-white">
      <div className="text-center">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-red-600 font-display text-2xl font-bold italic shadow-2xl shadow-red-600/30">
          NE
        </div>
        <p className="text-xs font-black uppercase tracking-[0.35em] text-red-500">Firing up the bay</p>
      </div>
    </main>
  );
}
