import TodoCard from "@/components/todo/TodoCard";


const Todo = () => {
    return (
        <div className="h-screen w-full max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center my-5">My Todo Apps</h2>
            <div className=" bg-red-500 p-3 rounded-md space-y-3">
                <TodoCard></TodoCard>
                <TodoCard></TodoCard>
                <TodoCard></TodoCard>
            </div>
        </div>
    );
};

export default Todo;