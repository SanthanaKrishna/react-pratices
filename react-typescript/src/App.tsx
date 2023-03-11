import React from 'react';
import './App.css';
import Private from './component/auth/Private';
import Profile from './component/auth/Profile';
import Button from './component/Button';
import ChildComp from './component/ChildComp';
import Container from './component/Container';
import Box from './component/context/Box';
import { ThemeContextProvider } from './component/context/ThemeContext';
import User from './component/context/User';
import { UserContextProvide } from './component/context/UserContext';
import List from './component/generics/List';
import Greet from './component/Greet';
import Heading from './component/Heading';
import CustomButton from './component/html/Button';
import Input from './component/Input';
import Person from './component/Person';
import Text from './component/PolymorphicComponent/Text';
import ProductList from './component/ProductList';
import RandomNumber from './component/restrictionProps/RandomNumber';
import Status from './component/Status';
import Toast from './component/templateLiteralsUnionType/Toast';

function App() {
  const personName = {
    first: 'React',
    last: 'Typescript'
  }
  const nameList = [
    {
      first: 'Apple',
      last: 'Orange'
    },
    {
      first: 'Lion',
      last: 'Tiger'
    },
    {
      first: 'Volvo',
      last: 'Volkswagen'
    }
  ]
  return (
    <div className="App">
      <Greet name="React Typescript" isLoggedIn={true} />
      <Person name={personName} />
      <ProductList names={nameList} />
      <Status status='loading' />
      <Heading>React Typescript Learning</Heading>
      <ChildComp>
        <Heading>React Typescript Learning</Heading>
      </ChildComp>
      <Button handleClick={(event, id) => console.log('Button Clicked', event, id)} />
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem', display: 'none' }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvide>
        <User />
      </UserContextProvide>

      <Private isLoggedIn={true} component={Profile} />

      {/* item has generic type */}
      <List items={['Batman', 'Superman', 'IronMan']} onClick={(item) => console.log('item', item)} />
      <List items={[1, 2, 3, 4]} onClick={(item) => console.log('item', item)} />
      <List items={[
        { id: 1, first: 'Bruce', last: 'Wayne' },
        { id: 2, first: 'Clark', last: 'Kent' },
        { id: 3, first: 'Princess', last: 'Diana' }
      ]}
        onClick={(item) => console.log('item', item)} />
      {/* isPositive no need to assign true its automatically pass as true  <RandomNumber value={10} isPositive isNegative isZero/> */}
      <RandomNumber value={10} isPositive />

      <Toast position='left-center' />
      {/* <Toast position='center-center' /> */}
      <CustomButton variant='primary' onClick={() => console.log('button click')}>Primary Button </CustomButton>
      {/* restrict children type using omit keyword */}
      {/* <CustomButton variant='primary' onClick={() => console.log('button click')}> <div>Primary Button</div> </CustomButton> */}
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='' size='sm' color="secondary">Label</Text>
    </div>
  );
}

export default App;
