import apiClient from '@/api/api';
import { useState, useEffect } from 'react';

const Main = () => {
  const [datas, setDatas] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await apiClient('');
      setDatas(res.data);
    };
    getData();
  }, []);

  console.log(datas);

  return (
    <div>
      {datas.map((data, i) => (
        <div key={i}>
          <div>{data.idx}</div>
          <div>{data.name}</div>
          <div>
            <img src={data.mainImage} alt={data.name} />
          </div>
          <div>{data.price}</div>
          <div>{data.spaceCategory}</div>
        </div>
      ))}
    </div>
  );
};
export default Main;
