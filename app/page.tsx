import Image from "next/image";
// We dont use server side props like last year
import revalidate from "./lib/actions/action1";

export default async function Home() {
  const response = await fetch("https://sum-server.100xdevs.com/todos",{
    next: {
      tags: ['todos']
    }
  })
  const data = await response?.json();
  revalidate();
  console.log("Logs from BE is ");
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
