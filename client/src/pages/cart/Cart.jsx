import { Box } from "@chakra-ui/react";
import { BagItems } from "../../components/cart/BagItems";
import { OrderSummary } from "../../components/cart/OrderSummary";

export const Cart = () => {

    return (
        <>
            <Box
                display={'grid'}
                gap={['40px','40px','40px','5%','5%']}
                my={'50px'}
                maxW={'1200px'}
                mx={'auto'}
                p={'20px'}
                border={'1px solid red'}
                gridTemplateColumns={['100%', '100%', '100%', '65% 30%', '65% 30%']}
            >

                <BagItems />

                <OrderSummary />

            </Box>
        </>
    );
};