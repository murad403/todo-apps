import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { Button } from "../ui/button";

const TodoCard = () => {
    return (
        <div className='py-1 px-3 border border-gray-300 rounded-sm flex justify-between items-center text-sm'>
            <input type="checkbox" id='' name='' />
            <h3 className="font-semibold text-[16px]">Todo title</h3>
            <p>time</p>
            <p>description</p>
            <div className="space-x-2 *:cursor-pointer">
                <Button className="bg-violet-500">
                    <CiEdit/>
                </Button>
                <Button className="bg-red-500">
                    <MdOutlineDelete/>
                </Button>
            </div>
        </div>

    );
};

export default TodoCard;