import '../index.css';

export default function HomePage(){

  return (
    <>
      <main >
        <section className="flex justify-evenly ">
          <div >
            <img className="rounded-full rounded-bl-3xl imgc" src="./src/assets/profile.png" alt="profile picture"/>
          </div>
          <div className="w-full flex justify-evenly">
            <div className="w-1/2 ">
              <h1 className=" text-5xl">You&apos;re welcome!</h1>
              <p className="text-4xl mt-16">My name is Pedro but you can call me Peter. I am a Frontend developer.
              <p className="mt-6">Feel free!!</p>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}