import Image from "next/image";
import { Book } from "./ui/bookshelf/book";
import { Shelf } from "./ui/bookshelf/shelf";

export default function Home() {
  return (
    <div className="bg-[#dedede] h-96 w-96 flex items-center justify-center">
      {/* <div>
        <Book 
        accentColor="pink"
        author="Gustavo"
        color="green"
        height={19}
        title="Memories"
        width={60}
        key={1}/>
      </div> */}
      <Shelf/>
    </div>
  );
}
