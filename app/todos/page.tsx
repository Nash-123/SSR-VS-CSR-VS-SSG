import Image from "next/image";
// We dont use server side props like last year

export default async function Home() {
  const response = await fetch("https://sum-server.100xdevs.com/todos",{
    next: {
        revalidate:10
    }
  });
  const data = await response?.json();
  console.log("data found from the BE server is ");
  console.log(JSON.stringify(data));
  return (
    <div>
      {data.todos.map( (todo:any) => (<div key={todo.id}>
         {todo.title},
         {todo.description},
         {todo.completed}
      </div>))}
    </div>
  );
}
