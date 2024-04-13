import { errorClass, status, taskListCollectionRef } from "../utils/constants";
import InputDropDown from "./InputDropdown";
import Popup from "./Popup";
import {useForm} from "react-hook-form"
import { postTaskList } from "../services/apiCalls";

const Create = ({ closeFunc, isOpen, title, setRender }) => {

    const { register, handleSubmit, reset, watch, formState:{errors} } = useForm({
        defaultValues: {
          id: '',
          name: title,
          description: '',
          status: ''
        }
    }); 

    const close = () => {
        reset()
        closeFunc()
    }

    const onSubmit = (data) => {
        const time = new Date()
        data = {...data, id:time}
        postTaskList(data, close, setRender)

    }

    const formElement = <div className="my-4">
        <h2 className="flex w-full justify-center">Add New Task</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="px-4 lg:px-8 flex flex-col gap-2">
            <div className="flex flex-col">
                <label htmlFor="name">Title:</label>
                <input type="text" className="border" {...register("name", {required : 'Title can\'t be empty'})} />
                {errors.name && <div className={errorClass}>{errors.name.message}</div>}
            </div>
            <div className="flex flex-col">
                <label htmlFor="description">Description:</label>
                <textarea rows={5} className="border" {...register("description", {required : 'Describe about the task'})}/>
                {errors.description && <div className={errorClass}>{errors.description.message}</div>}
            </div>
            <div className="flex flex-col">
                <InputDropDown label={'Status:'} options={status} props={register('status',{required: 'Select status of task'} )} />
                {errors.status && <div className={errorClass}>{errors.status.message}</div>}
            </div>
            <div className="w-full flex justify-center px-8">
                <button type="submit" className="border bg-gray-800 text-white py-1 px-2 max-w-96 w-full rounded-full">Submit</button>
            </div>
        </form>
    </div>


    return <Popup isOpen={isOpen} closeFunc={close} children={formElement} />
}

export default Create;