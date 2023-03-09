import { Heading, VStack, VisuallyHidden } from '@chakra-ui/react';
import Product from '@/components/Product';
import { IProduct } from '@/interface/product';
import { useAppDispatch, useAppSelector } from '@/store';
import { ChangeEvent, useState, useEffect } from 'react';
import { getProducts } from '@/store/slices/productSlice';
import {
  Select,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
} from '@chakra-ui/react';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const {
    products: { products },
  } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const [currValues, setCurrValues] = useState<number[]>([]);

  const handlePrice = (e: number[]) => {
    setCurrValues(e);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const filteredItem = e.target.value;
    setCheckedValue(filteredItem);
  };
  const [checkedValue, setCheckedValue] = useState('');

  const filteredProducts = products.filter((product: IProduct) => {
    const [currMin, currMax] = currValues;
    if (checkedValue === '') {
      return product.price >= currMin && product.price <= currMax;
    } else {
      return (
        product.price >= currMin &&
        product.price <= currMax &&
        product.spaceCategory === checkedValue
      );
    }
  });

  return (
    <VStack as="section" bg="blue.100" w="75%" minW="500px" p={4}>
      <VisuallyHidden>
        <Heading>상품 정보</Heading>
      </VisuallyHidden>

      <Select placeholder="공간" size="md" w="100px" onChange={handleChange}>
        <option value="강원">강원</option>
        <option value="대구">대구</option>
        <option value="부산">부산</option>
        <option value="서울">서울</option>
        <option value="제주">제주</option>
      </Select>
      <RangeSlider
        defaultValue={[0, 0]}
        min={1000}
        max={30000}
        step={1000}
        onChange={handlePrice}
        w="300px"
      >
        <RangeSliderTrack bg="red.100">
          <RangeSliderFilledTrack bg="tomato" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} index={0} />
        <RangeSliderThumb boxSize={6} index={1} />
      </RangeSlider>
      <Text>
        {currValues[0]}~{currValues[1]}원
      </Text>
      {filteredProducts.map((product: IProduct) => (
        <Product key={product.idx} {...product} />
      ))}
    </VStack>
  );
};
export default ProductList;
