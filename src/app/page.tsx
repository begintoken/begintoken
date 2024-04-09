import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        {/* <Landing/> */}
        <div className="hero bg-base-200">
          <div className="hero-content text-center pt-24 pb-24 lg:h-screen ">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Introducing Begin Token</h1>
              <p className="py-6 text-left">Our goal is to provide free, accessible education to users, with the aim of driving widespread adoption of blockchain technology.</p>
              <button className="btn bg-green-200 text-black hover:bg-green-400 hover:text-black">
                <Link href="/faq">
                  Learn More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
