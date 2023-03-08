import { HStack, Center } from '@chakra-ui/react';
import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import ProductModal from '@/components/ProductModal';
import { useAppDispatch, useAppSelector } from '@/store';
import { IProduct } from '@/interface/product';
import { ChangeEvent, useState, useEffect } from 'react';
import { getProducts } from '@/store/slices/productSlice';

const Main = () => {
  const {
    products: { products },
  } = useAppSelector((state) => state);
  const [checkedValue, setCheckedValue] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const filteredItem = e.target.value;
    setCheckedValue(filteredItem);
  };

  const filterd = (products: IProduct[]) => {
    let filteredList: IProduct[] = products;
    if (checkedValue === '') {
      return filteredList;
    } else {
      filteredList = products.filter(
        (product) => product.spaceCategory === checkedValue,
      );
      return filteredList;
    }
  };
  const filteredList = filterd(products);
  console.log(filteredList);

  return (
    <>
      <Filter handleChange={handleChange} />
      <Center as="main" bg="tomato" w="100%">
        <HStack as="section" bg="tomato" w="50%">
          <ProductList filteredList={filteredList} />
        </HStack>
      </Center>
      <ProductModal />
    </>
  );
};
export default Main;
