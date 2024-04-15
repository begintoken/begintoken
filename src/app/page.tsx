import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      {/* <Landing/> */}
      <div className="hero bg-base-200">
        <div className="hero-content text-center pt-24 pb-24 lg:h-screen ">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Introducing<br></br>Begin Token</h1>
            <p className="py-6 text-left">Our goal is to provide free and accessible education to everyone, with the aim of driving widespread adoption of blockchain technology.</p>
            <span className="justify-between">
              <button className="btn bg-green-200 text-black hover:bg-green-400 hover:text-black">
                <Link href="https://learn.begintoken.com" target="_blank" rel="noopener noreferrer">
                  Begin Learning
                </Link>
              </button>
              <div className="my-4"><a href="/faq">Learn More</a></div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
