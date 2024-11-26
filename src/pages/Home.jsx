

export default function HomePage(){

  const main = `.main{
    backdrop-filter: blur(5px);
  }`

  return (
    <>
      <main className={main}>
        <section className="flex gap-8">
          {/* <img src="./src/assets/do-something.jpg" alt="profile picture" className="w-1/5 bg-black rounded-full" /> */}
          <div className="w-full mt-16 flex justify-end">
            <div className="w-1/2 ">
              <h1 className="text-6xl">You&apos;re welcome</h1>
              <p className="text-4xl mt-16">My name is Pedro but you can call me Peter. I&apos;m a Frontend developer.
              <p className="mt-4">Feel free!!</p>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}