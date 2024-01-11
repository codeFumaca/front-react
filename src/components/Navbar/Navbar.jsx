import { Link, Outlet, useNavigate } from 'react-router-dom'
import logo from '../../images/LogoBN.png'
import { Button, Nav, ImageLogo, InputSpace, ErrorSpan } from './NavbarStyled'
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchSchema = z.object({
    title: z.string().nonempty({ message: "Não pode ser vazio" }).
        refine(value => !/^\s*$/.test(value), { message: "Não pode ser apenas espaços" })
})

export function Navbar() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(searchSchema),
    })
    const navigate = useNavigate();

    function onSearch(data) {
        const { title } = data;
        navigate(`/search/${title}`);
        reset();
    }

    return (
        <>
            <Nav>
                <form onSubmit={handleSubmit(onSearch)}>
                    <InputSpace>
                        <button type='submit'>
                            <i className="bi bi-search" />
                        </button>
                        <input {...register("title", { required: true, })} type="text" placeholder="Search" />
                    </InputSpace>
                </form>
                <Link to="/">
                    <ImageLogo src={logo} alt="Logo do projeto" />
                </Link>
                <Link to="/auth">
                    <Button>Entrar</Button>
                </Link>

            </Nav>
            {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
            <Outlet />
        </>
    )
}