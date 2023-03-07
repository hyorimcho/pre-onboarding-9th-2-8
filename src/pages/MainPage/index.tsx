import apiClient from '@/api/api';
import { useState, useEffect } from 'react';
import { TimeIcon } from '@chakra-ui/icons';
import DetailModal from '@/components/DetailModal';
import { Button, useDisclosure } from '@chakra-ui/react';

export interface Product {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
}

const Main = () => {
  const [data, setData] = useState<Product[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [index, setIndex] = useState(0);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const getData = async () => {
      const res = await apiClient({ method: 'get' });
      setData(res.data);
    };
    getData();
  }, []);

  const matchedData = data?.find((item) => item.idx === index);

  console.log(index);
  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <div>{item.idx}</div>
          <TimeIcon
            cursor="pointer"
            onClick={() => {
              setIndex(item.idx);
            }}
          />
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
        item={matchedData as Product}
      />
    </div>
  );
};
export default Main;
