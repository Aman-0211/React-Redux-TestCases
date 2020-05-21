import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from '../src/component/header';
import HeadLine from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { fetchPost } from './actions';

const TempArray = [
  {
    fName: 'Aman',
    lName: 'Thakur',
    email: 'amanthakur@gmail.com',
    age: 23,
    onlineStatus: true,
  },
];

function App() {
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const fetch = () => {
    dispatch(fetchPost());
  };

  const configButton = {
    buttonText: 'Get posts',
    emitEvent: fetch,
  };

  return (
    <div className="App">
      <Header />
      <section className="main">
        <HeadLine
          header="Post"
          desc="Click the button to render post"
          tempArray={TempArray}
        />
        <SharedButton {...configButton} />
        {posts.length > 0 && (
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              const configureListItem = {
                title: title,
                desc: body,
              };
              return <ListItem key={index} {...configureListItem} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
