

export default function HomePage(){
  return (
    <>
      <main>
        <section className="flex gap-8">
          <img src="./src/assets/do-something.jpg" alt="profile picture" className="w-1/2 bg-black rounded-full" />
          <div className="">
            <h1 className="text-6xl">You&apos;re welcome</h1>
            <p className="text-4xl mt-16">Here you can see my portfolio and some details about my career.<br />
            <span className="">Feel free!!</span>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}