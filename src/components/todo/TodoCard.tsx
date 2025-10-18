
const TodoCard = () => {
    return (
        <div className='bg-gray-200 py-1 px-3 rounded-md flex justify-between items-center text-sm'>
            <input type="checkbox" id='' name='' />
            <h3 className="font-semibold text-[16px]">Todo title</h3>
            <p>time</p>
            <p>description</p>
            <div className="space-x-2">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>

    );
};

export default TodoCard;