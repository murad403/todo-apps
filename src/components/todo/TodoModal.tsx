import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useState, type FormEvent } from "react";

const TodoModal = () => {
    const dispatch = useAppDispatch();
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2, 12);
    const taskDetails = {
        id, task, description
    }
    // console.log(taskDetails);
    dispatch(addTodo(taskDetails));
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="bg-gradient-to-l to-violet-500 from-red-500 font-semibold cursor-pointer">
            Add todo
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add task</DialogTitle>
            <DialogDescription>
              Add your tasks that yout want to finish.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddTask}>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="task">Task</Label>
                <Input  onChange={(e) => setTask(e.target.value)} id="task" name="task" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Input
                    onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  name="description"
                />
              </div>
            </div>
            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button variant="outline" className="cursor-pointer">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button type="submit" className="cursor-pointer">Save changes</Button>
              </DialogClose>
              
            </DialogFooter>
          </form>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default TodoModal;
