import React, {useState} from "react";
import PostsNav from "../components/NavBar";
import Footer from "../components/Footer";
import { Container } from 'react-bootstrap';
import SettingsModal from "../components/Modal";
import {settingName, settingColor} from '../redux/actions';
import {useDispatch} from 'react-redux';
import TitleList from "../components/TitleList";

export default function Dashboard(props) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [themeColorHolding, setThemeColorHolding] = useState("");

  const handleClose = () => setShow(false);

  function handleModal(event) {
    event.preventDefault();
    setShow(true);
  }

  function onChangeColor(event) {
    event.preventDefault()
    setThemeColorHolding(event.target.value)
  }

  const handleChange = async (event) => {
    event.preventDefault()
    setName(event.target.value.trim().toLowerCase());
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    if(name.length > 3 ) {
        dispatch(settingName(name))
        dispatch(settingColor(themeColorHolding))
        setShow(false)
    }

}
  
      return ( 
          <Container>
            <SettingsModal
              show={show}
              handleClose={handleClose}
              onClick={handleClose}
              onSubmit={onSubmit}
              handleChange={handleChange}
              onChange={onChangeColor}
            />
          <PostsNav
            onClick={handleModal}/>
            <TitleList/>
          <Footer/>
          </Container>
      );
    }