import { Heading, VStack, VisuallyHidden } from '@chakra-ui/react';
import Product from '@/components/Product';
import { IProduct } from '@/interface/product';

const ProductList = ({ filteredList }: { filteredList: IProduct[] }) => {
  return (
    <VStack as="section" bg="blue.100" w="75%" minW="500px" p={4}>
      <VisuallyHidden>
        <Heading>상품 정보</Heading>
      </VisuallyHidden>
      {filteredList.map((product: IProduct) => (
        <Product key={product.idx} {...product} />
      ))}
    </VStack>
  );
};
export default ProductList;
