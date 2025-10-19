import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";

type TTodo = {
    id: string;
    task: string;
    description: string;
    isCompleted?: boolean;
}

const TodoCard = ({todo}: {todo: TTodo}) => {
    // console.log(todo);
    const dispatch = useAppDispatch();
    const handleRemoveTodo = () =>{
        dispatch(removeTodo(todo.id));
    }
    const handleToggleChange = () =>{
        dispatch(toggleComplete(todo.id));
    }
    return (
        <div className='py-1 px-3 border border-gray-300 rounded-sm flex justify-between items-center text-sm'>
            <input onClick={handleToggleChange} type="checkbox" id='' name='' />
            <h3 className="font-semibold text-[15px]">{todo?.task}</h3>
            <div>
                {
                    todo.isCompleted ? <p className="text-green-500">Done</p> : <p className="text-red-500">Pending</p>
                }
            </div>
            <p>{todo?.description}</p>
            <div className="space-x-2 *:cursor-pointer">
                <Button className="bg-violet-500">
                    <CiEdit/>
                </Button>
                <Button onClick={handleRemoveTodo} className="bg-red-500">
                    <MdOutlineDelete/>
                </Button>
            </div>
        </div>

    );
};

export default TodoCard;