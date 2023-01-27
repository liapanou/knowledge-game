import { useState } from "react";

export function CardGame(props: { flips: number; setFlips: () => void }) {
  const [flipCard1, setFlipCard1] = useState<number | null>(null);
  const [flipCard2, setFlipCard2] = useState<number | null>(null);
  const [cards, setCards] = useState<{ srcb: string; srcf: string }[]>([
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      srcb: "https://media.istockphoto.com/id/1135141898/vector/animal-pattern-leopard-seamless-background-with-spots.jpg?s=612x612&w=0&k=20&c=-EW27vds9fwyvAy2Jc9q6K0UQDJBc5ob_FvA47v1mYw=",
      srcf: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ]);

  return (
    <div
      onClick={() => {
        props.setFlips();
      }}
      className="grid grid-cols-4 gap-2"
    >
      {cards.map((c, idx) => (
        <div
          key={idx}
          onClick={function () {
            if (props.flips % 2 !== 0) {
              setFlipCard1(idx);
              setFlipCard2(null);
            } else {
              setFlipCard2(idx);
              setFlipCard1(flipCard1);
            }
            console.log(flipCard1, flipCard2);
          }}
        >
          <div className="border w-36  h-40 border-black rounded-lg ">
            <picture>
              <img
                className="w-full object-fill h-full"
                src={idx === flipCard1 || idx === flipCard2 ? c.srcf : c.srcb}
                alt="picture"
              />
            </picture>
          </div>
        </div>
      ))}
    </div>
  );
}
