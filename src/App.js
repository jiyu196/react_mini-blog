import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import MainPage from "./componenent/page/MainPage";
import PostWritePage from "./componenent/page/PostWritePage";
import PostViewPage from "./componenent/page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
      <BrowserRouter>
        <MainTitleText>yoou의 미니 블로그</MainTitleText>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="post-write" element={<PostWritePage />} />
          <Route path="post/:postId" element={<PostViewPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
