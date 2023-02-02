import { useSettings } from "@/providers";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const level = router.query.level as string;
  const settings = useSettings();
  const mute = settings.muted;
  const audio = () => new Audio("/audio/click.mp3");
  return (
    <div className=" w-screen h-screen overflow-hidden">
      <Head>
        <title>Memory Game</title>
      </Head>
      <div className="bg-gradient-to-r bg-teal-400 w-screen min-h-screen h-full">
        <main className="xs:p-16 md:p-16 lg:p-8">
          <h1 className="xs:text-2xl md:text-5xl text-shadow text-yellow-300 font-extrabold text-center">
            Memory Game 🧠
          </h1>
          <hr className="xs:my-16 md:my-20 lg:my-8 xl:mb-40 opacity-40"></hr>
          <div className="w-full mt-20 grid gap-4  place-items-center container mx-auto grid-cols-1">
            <Link
              role="button"
              className="xs:w-4/5 md:w-2/3 lg:w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300 text-center flex justify-center items-center xs:h-24 md:h-44 lg:h-20 xl:h-30 text-yellow-50 rounded-md transform transition md:text-3xl lg:text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
              href="/level"
              onClick={() => {
                if (!settings.muted) audio().play();
              }}
            >
              <>
                <div className="mr-4">▶️</div>
                <div>Start Game</div>
              </>
            </Link>
            <button
              onClick={() => {
                settings.setMute(!settings.muted);
                if (!settings.muted) audio().play();
              }}
              className="xs:w-4/5 md:w-2/3 lg:w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300  text-center flex justify-center items-center xs:h-24 md:h-44 lg:h-20 xl:h-30 text-yellow-50 rounded-md transform transition md:text-3xl lg:text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
            >
              <div className="mr-4">🎵</div>
              <div>{mute ? "Audio on" : "Audio off"}</div>
            </button>

            {/* The button to open modal */}
            <label
              onClick={() => {
                if (!settings.muted) audio().play();
              }}
              htmlFor="my-modal-4"
              className="xs:w-4/5 md:w-2/3 lg:w-1/2 text-shadow  bg-gradient-to-tl bg-teal-300 text-center flex justify-center items-center xs:h-24 md:h-44 lg:h-20 xl:h-30 text-yellow-50 rounded-md transform transition md:text-3xl lg:text-lg duration-100 hover:text-yellow-300 font-bold shadow-lg"
            >
              <div className="mr-4">ℹ️</div> <div>Instructions</div>
            </label>
            {/* The modal */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label
                className="modal-box md:w-full md:h-fit lg:relative bg-teal-900 "
                htmlFor=""
              >
                <h3 className="xs:text-lg md:text-5xl lg:text-lg font-extrabold text-yellow-300 text-center">
                  Instructions Of Memory Game
                </h3>
                <p className="py-4 text-yellow-50 xs:text-base md:text-xl">
                  Lorem ipsum dolor sit amet. Ut repellendus facere aut minima
                  doloribus et quibusdam ullam est cumque temporibus id
                  laudantium labore qui officiis ipsam. Id quia nobis ea eius
                  adipisci qui esse voluptatem. Sed inventore delectus et culpa
                  laborum 33 quidem provident ad consectetur impedit qui odit
                  quod a saepe assumenda aut iusto expedita! Non consequatur
                  quasi aut omnis nulla ut aspernatur eaque eos omnis sequi sed
                  excepturi quas. Qui sint doloremque sed possimus earum in
                  quibusdam minima ut repudiandae laudantium et quos deleniti?
                  Rem cupiditate reiciendis aut repellendus molestias qui
                  eveniet voluptatem id deserunt error sit autem commodi. Ut
                  similique iste sed distinctio molestias 33 voluptatem labore
                  ut facilis provident. Eos praesentium iure qui minus natus qui
                  minus facere. Est vero porro quo sint ipsam et amet quas sed
                  reprehenderit debitis At inventore delectus. Ea enim similique
                  quo dicta quaerat sit reprehenderit aliquid et recusandae
                  temporibus et maxime nulla aut debitis similique et iure
                  officia.
                </p>
              </label>
            </label>
          </div>
        </main>
      </div>
    </div>
  );
}
