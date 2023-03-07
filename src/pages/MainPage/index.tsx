import apiClient from '@/api/api';
import { useState, useEffect } from 'react';
import { TimeIcon } from '@chakra-ui/icons';
import DetailModal from '@/components/DetailModal';
import { Button, useDisclosure } from '@chakra-ui/react';
import { IProduct } from '@/interface/products';
import { useAppDispatch } from '@/lib/hooks/hooks';
import { addCart } from '@/slices/cartSlice';

const Main = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [index, setIndex] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      const res = await apiClient({ method: 'get' });
      setData(res.data);
    };
    getData();
  }, []);

  const matchedData = data?.find((item) => item.idx === index);

  console.log(matchedData);
  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <div>{item.idx}</div>
          <TimeIcon cursor="pointer" onClick={() => dispatch(addCart(item))} />
          <div>{item.name}</div>
          <div>
            <img src={item.mainImage} alt={item.name} />
          </div>
          <div>{item.price.toLocaleString()}원</div>
          <div>{item.spaceCategory}</div>
          <Button
            onClick={() => {
              setIndex(item.idx);
              onOpen();
            }}
          >
            더보기
          </Button>
        </div>
      ))}
      <DetailModal
        isOpen={isOpen}
        onClose={onClose}
        item={matchedData as IProduct}
      />
    </div>
  );
};
export default Main;
