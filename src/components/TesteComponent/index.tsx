import {
  Container,
  MainContainer,
  TextContainer,
  Title,
  TitleContainer,
  TextValue,
} from "./styles";

interface IRegister {
  name: string;
  age: number;
  birthDate: Date;
  email: string;
}

const TesteComponent = ({ name, age, birthDate, email }: IRegister) => {
  return (
    <Container>
      <MainContainer>
        <TitleContainer>
          <Title>Account Detail</Title>
        </TitleContainer>
        <TextContainer>
          <TextValue>Name: {name}</TextValue>
          <TextValue>Age: {age}</TextValue>
          <TextValue>Birth Date: {birthDate?.toLocaleDateString()}</TextValue>
          <TextValue>Email: {email}</TextValue>
        </TextContainer>
      </MainContainer>
    </Container>
  );
};

export default TesteComponent;
