import { match } from "assert";
import { useRef, useState } from "react";
import { setSourceMapRange } from "typescript";

export function CardGame(props: {
  flips: number;
  setFlips: () => void;
  score: number;
  setScore: () => void;
}) {
  const [flipCard1, setFlipCard1] = useState<{
    idx: number;
    srcf: string;
  }>({ idx: -1, srcf: "" });
  const [flipCard2, setFlipCard2] = useState<{
    idx: number;
    srcf: string;
  }>({ idx: -1, srcf: "" });

  const [cards, setCards] = useState<{ srcb: string; srcf: string }[]>([
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/67552/giraffe-tall-mammal-africa-67552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/67552/giraffe-tall-mammal-africa-67552.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ]);

  const [match, setMatch] = useState<{ srcf: string }[]>([{ srcf: "" }]);

  // const audioRef = useRef<HTMLAudioElement>(null);

  // const handlePlay = () => {
  //   audioRef.current?.play();
  // };

  return (
    <div
      onClick={() => {
        props.setFlips();
      }}
      className="grid grid-cols-4 gap-2"
    >
      {/* <audio ref={audioRef} controls>
        <source src="public/audio/clickaudio.mp3" type="audio/mpeg" />
      </audio> */}
      {cards.map((c, idx) => (
        <div
          key={idx}
          onClick={function () {
            if (props.flips % 2 !== 0) {
              setFlipCard1({ idx: idx, srcf: c.srcf });
              setFlipCard2({ idx: -1, srcf: "" });
            } else {
              setFlipCard2({ idx: idx, srcf: c.srcf });

              setFlipCard1(flipCard1);
            }
            if (
              flipCard1.idx !== -1 &&
              flipCard2.idx !== -1 &&
              flipCard1.srcf === flipCard2.srcf
            ) {
              props.setScore();
              setMatch([...match, { srcf: flipCard1.srcf }]);
            } else {
              return "";
            }
          }}
        >
          <div className="border w-36  h-40 border-black rounded-lg ">
            <picture>
              <img
                className="w-full object-fill h-full"
                src={
                  idx === flipCard1.idx ||
                  idx === flipCard2.idx ||
                  match.find((s) => s.srcf === c.srcf)
                    ? c.srcf
                    : c.srcb
                }
                alt="picture"
              />
            </picture>
          </div>
        </div>
      ))}
    </div>
  );
}
