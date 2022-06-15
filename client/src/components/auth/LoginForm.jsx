import { Input, Text, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showResetPage } from "../../redux/features/auth/actions";
import { setToast } from "../../utils/extraFunctions";
import { isLoginFormEmpty } from "../../utils/formValidator";

export const LoginForm = () => {

    const dispatch = useDispatch();
    const toast = useToast();
    const [form, setForm] = useState({ email: "", password: "" });


    const handleInputChange = ({ target: { name, value } }) => {
        setForm({...form, [name]: value});
    };

    const handleOnSubmit = (e)=>{
        e.preventDefault();

        const isEmpty = isLoginFormEmpty(form);
        if(!isEmpty.status){
            return setToast(toast, isEmpty.message, 'error');
        }

        
        console.log(form);

    }

    const displayReset = () => {
        dispatch(showResetPage());
    };

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <VStack w={['95%', '85%']} mx={'auto'} gap={'8px'}>
                    <Input onChange={handleInputChange} name="email" type={'email'} placeholder="Email address" />
                    <Input onChange={handleInputChange} name="password" type={'password'} placeholder="Password" />
                    <Text onClick={displayReset} _hover={{ textDecoration: "underline" }}
                        w={'100%'} color={'#b0a8af'} textAlign={'right'} my={'10px'} cursor={'pointer'}>
                        Forgot your password?
                    </Text>
                    <Input value={"LOGIN"} type={'submit'} backgroundColor={'black'}
                        _hover={{ backgroundColor: "#656565" }} color={'white'} w={'100%'} />
                </VStack>
            </form>
        </>
    );
};