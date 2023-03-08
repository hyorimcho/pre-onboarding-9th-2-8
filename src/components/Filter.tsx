import { Select } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

const Filter = ({
  handleChange,
}: {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <>
      <Select placeholder="공간" size="md" w="100px" onChange={handleChange}>
        <option value="강원">강원</option>
        <option value="대구">대구</option>
        <option value="부산">부산</option>
        <option value="서울">서울</option>
        <option value="제주">제주</option>
      </Select>
    </>
  );
};
export default Filter;
