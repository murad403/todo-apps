import TodoCard from "@/components/todo/TodoCard";
import TodoFilter from "@/components/todo/TodoFilter";
import TodoModal from "@/components/todo/TodoModal";
import { useAppSelector } from "@/redux/hooks";



const Todo = () => {
    const todos = useAppSelector((state) => state.todos.todos);
    console.log(todos);
    return (
        <div className="h-screen w-full max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center my-5">My Todo Apps</h2>
            <div className="mb-3 flex justify-between items-center">
                <TodoModal></TodoModal>
                <TodoFilter></TodoFilter>
            </div>
            <div className="bg-gradient-to-l to-violet-500 from-red-600 p-2 rounded-lg">
                <div className="space-y-3 bg-white rounded-sm p-2">
                    {
                        todos.map(todo => <TodoCard key={todo.id} todo={todo}></TodoCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Todo;