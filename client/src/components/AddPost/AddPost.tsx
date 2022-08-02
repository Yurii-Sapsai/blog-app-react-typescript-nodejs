import { FC } from 'react';
import axios from 'axios'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    title: String;
    text: String;
    category: String;
    imageUrl: any;
};

const AddPost: FC = () => {

    const { register,
        handleSubmit,
        formState: { errors } } = useForm<Inputs>({ mode: 'onBlur' });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        try {
            const formData = new FormData();
            const file = data.imageUrl[0]
            formData.append('image', file);

            await axios.post('http://localhost:4444/posts', {
                title: data.title,
                text: data.text,
                category: data.category,
                imageUrl: data.imageUrl[0].name
            }, {
                headers: {
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTY1MGIwMzQzNjk1MWIwZGQ1MjVhNyIsImlhdCI6MTY1OTI3MDY5OCwiZXhwIjoxNjU5NTI5ODk4fQ.mI0KAeb6HUxd2yL5kOmTOvK0JSiq_aZ9TH7bN02AbE4'
                }
            })
            await axios.post('http://localhost:4444/upload', formData)

        } catch (error) {
            console.warn(error);
            alert('Ошибка при загрузке файла!');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    {...register("title")}
                />
                <input
                    {...register("text")}
                />
                <input
                    {...register("category")}
                />

                <input  {...register('imageUrl')}
                    type="file"
                    name="imageUrl" />

                <button type="submit">Send</button>

            </form>
        </div>
    )
}

export default AddPost;