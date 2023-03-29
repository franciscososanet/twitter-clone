import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../layout/Modal";

const RegisterModal = () => {

    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPasswowrd] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {

        if(isLoading){
            return;
        }

        registerModal.onClose();
        loginModal.onOpen();

    }, [isLoading, registerModal, loginModal]);

    const onSubmit = useCallback(async () => {
        try{
            setIsLoading(true);
            //TODO: AGREGAR REGISTRO Y LOGIN

            registerModal.onClose();

        }catch(error){
            console.log(error);
        } finally{
            setIsLoading(false);
        }
    }, [registerModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input 
                placeholder="Nombre real"
                onChange={(n) => setName(n.target.value)}
                value={name}
                disabled={isLoading}
            />
            <Input 
                placeholder="Nombre de usuario"
                onChange={(n) => setUsername(n.target.value)}
                value={username}
                disabled={isLoading}
            />
            <Input 
                placeholder="Contraseña"
                onChange={(p) => setPasswowrd(p.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    );

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>¿Ya tenés una cuenta?   
                <span
                    onClick={onToggle}
                    className="
                        text-white
                        cursor-pointer
                        hover:underline
                    "
                > Iniciar sesión
                </span>
            </p>
        </div>
    );

    return (
        <Modal 
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Crear nueva cuenta"
            actionLabel="Registrarme"
            onClose={registerModal.onClose}
            onSubmit={onSubmit}
            body={bodyContent}
            footer={footerContent}

        />
    );
}

export default RegisterModal;