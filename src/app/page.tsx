import { BookshelfScene } from "../components/bookshelf/BookshelfScene";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 flex justify-center items-center">
      {/* <div style={{}}>
        <div>
          <Book
          accentColor="pink"
          author="Gustavo"
          color="green"
          height={19}
          title="Memories"
          width={60}
          key={1}/>
        </div>
      </div> */}
      <BookshelfScene />
    </main>
  );
}
