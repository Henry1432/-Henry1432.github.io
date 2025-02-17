export default function Home() {
    return (
        <>
            <div className="grid grid-rows-[20px_1fr_20px] min-h-screen w-full gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <main className="relative h-screen w-full border border-red-500 border-opacity-0">
                    <p className="absolute top-[10%] left-[50%] -translate-x-1/2 text-5xl font-semibold">
                        React Site!
                    </p>
                </main>
            </div>

            <div className="grid grid-rows-[20px_1fr_20px] min-h-screen w-full gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <main className="relative h-screen w-full border border-red-500 border-opacity-0">
                    <p className="absolute top-[10%] left-[50%] -translate-x-1/2 text-5xl font-semibold">
                        React part 2 as a Test!
                    </p>
                </main>
            </div>
        </>
    );
}
