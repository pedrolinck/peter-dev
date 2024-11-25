

export default function HomePage(){

  const main = `.main{
    backdrop-filter: blur(5px);
  }`

  return (
    <>
      <main className={main}>
        <section className="flex gap-8">
          {/* <img src="./src/assets/do-something.jpg" alt="profile picture" className="w-1/5 bg-black rounded-full" /> */}
          <div className="">
            <h1 className="text-6xl">You&apos;re welcome</h1>
            <p className="text-4xl mt-16">My name is Pedro but you can call me Peter. I&apos;m a Frontend developer targeting the success.<br />
            <span className="">Feel free!!</span>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}