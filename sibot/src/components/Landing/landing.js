import { Button } from "../ui/button";

export default function Landing() {
  return (
    <section className="container h-lvh mx-auto bg-white text-gray-500">
      <div className="flex flex-row items-center justify-center h-full">
        <div className="w-full border border-black  flex flex-col gap-3">
          <h1 className="text-3xl text-black font-bold">Welcome to SiBot</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, qui placeat dolore ea consequatur nam quas architecto
            itaque numquam saepe maiores distinctio odio natus necessitatibus
            voluptatibus exercitationem veritatis quibusdam similique?
          </p>
          <Button className="w-fit">CTA Link</Button>
        </div>
        <div className="w-full border border-black">Welcome to sibot</div>
      </div>
    </section>
  );
}
