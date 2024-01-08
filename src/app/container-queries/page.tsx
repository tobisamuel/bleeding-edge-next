const data = Array.from({ length: 7 }, (_, i) => ({
  id: i,
  title: "Title",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempore consequatur iure voluptatum doloremque quisquam, aliquam voluptatibus soluta mollitia, illum pariatur? Fugiat deserunt velit temporibus quas debitis? Quis, quas repellendus.",
}));

export default function ContainerQueries() {
  return (
    <div className="@container/layout p-8">
      <ul className="grid @3xl/layout:grid-cols-2 @5xl/layout:grid-cols-4 gap-4 @5xl/layout:gap-8">
        {data.map((item) => (
          <li
            key={item.id}
            className="@container/article @3xl/layout:first:col-span-2 @5xl/layout:first:col-span-4 @5xl/layout:[&:nth-child(2)]:col-span-2 @5xl/layout:[&:nth-child(3)]:col-span-2"
          >
            <article className="grid gap-4 @lg/article:grid-cols-3 @3xl/article:grid-cols-2 @5xl/layout:gap-8 @3xl/article:text-xl">
              <div className="h-48 w-full bg-slate-400"></div>

              <div className="@lg/article:col-span-2 @3xl/article:col-span-1">
                <h3 className="font-bold text-3xl">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
