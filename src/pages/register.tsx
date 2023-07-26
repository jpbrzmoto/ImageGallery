
import { useForm } from "react-hook-form";



type FormData = {
    firstName: string;
    lastName: string;
};

export default function Register() {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();
    const onSubmit = handleSubmit(({ firstName, lastName }) => {
        console.log(firstName, lastName);
        console.log(errors);
    }); // firstName and lastName will have correct type

    return (
        <form onSubmit={onSubmit}>
            <label>First Name</label>
            <input {...register("firstName")} />
            <label>Last Name</label>
            <input {...register("lastName")} />
            <button
                type="button"
                onClick={() => {
                    setValue("lastName", "luo"); // ✅
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    // errors.bill; // ❌: property bill does not exist
                }}
            >
                SetValue
            </button>
            <input type="submit" />
        </form>
    );
}
