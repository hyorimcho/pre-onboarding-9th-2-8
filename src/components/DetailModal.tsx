import { Product } from '@/pages/MainPage';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  item: Product;
}

const DetailModal = ({ isOpen, onClose, item }: Props) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{item?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <img src={item?.mainImage} alt={item?.name} />
            </div>
            <div>지역:{item?.spaceCategory}</div>
            <div>번호:{item?.idx}</div>
            <div>등록일자:{item?.registrationDate}</div>
            <div>최대 구매 개수: {item?.maximumPurchases}</div>
            <div>가격:{item?.price.toLocaleString()}원</div>
            <div>{item?.description}</div>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
export default DetailModal;
