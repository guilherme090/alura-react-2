import { Button } from "../Button";
import { TextInput } from "../TextInput";

export function TodoForm({onSubmit, defaultValue}: {onSubmit: (formData: FormData) => void, defaultValue: string | undefined}) {
    return(
        <form action={onSubmit}>
            <TextInput 
                placeholder="Digite o item que deseja adicionar."
                required
                name="description"
                defaultValue={defaultValue}/>
            <div className="btn-wrapper">
                <Button className="btn">Salvar item</Button>
            </div>
        </form>
    );
} 