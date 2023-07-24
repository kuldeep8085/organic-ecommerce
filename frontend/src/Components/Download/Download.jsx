import { Box, Image, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styles from './Download.module.css';
export default function Download() {
    return (
        <VStack align={['end', 'center', 'center']} justify={'center'} h={['200px', '270px', '500px']} className={styles.download}>
            <Image w={['21%', '18%', '15%']} left={['2rem', '10rem', '14rem']} top={['1rem','2rem','2rem']}   src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Download_our_App_Section_Image_V_460x460.png?v=1650369432" alt="" className={styles.mobileImg} />
            <Text w={'100%'} bgColor={'#475d4b'} color={'#e5f0da'} textAlign={['right', 'right']} fontSize={['22px', '35px', '49px']} p={['0.4rem 0rem 0.4rem 0rem', '0.4rem 18rem 0.4rem 0rem']} className={styles.tagline}>Download Our App</Text>
            <Box className={styles.stores}>
                <a href="https://play.google.com/store/apps/details?id=com.bellavita.shopifyapps" target={'_blank'}>
                    <Image w={['100px', '120px', '190px']} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/playstore_460x460_efa998ac-e0d8_460x460.png?v=1650369394" alt="" />
                </a>
                <a href="https://apps.apple.com/in/app/bella-vita-organic-app/id1588406681" target={'_blank'}>
                    <Image w={['100px', '120px', '190px']} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/app-store-card_460x460_35fc55d1_460x460.png?v=1650369409" alt="" />
                </a>
            </Box>
        </VStack>
    )
}