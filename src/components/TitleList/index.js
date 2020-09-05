import React, {useState, useEffect} from "react";
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { getData, loading} from "../../redux/actions";
import {useSelector, useDispatch} from 'react-redux';

  export default function TitleList(props) {
    const posts = useSelector(state => state.setTheme.posts);
    const isLoading = useSelector(state => state.setTheme.isFetchingPosts)
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [firstPost, setFirstPost] = useState(0);
    const [lastPost, setLastPost] = useState(10);
    const dispatch = useDispatch();

    useEffect(() => {
      getPosts()
      setFirstPost(0)
      setLastPost(10)
    }, [] )

    function handleClick(event) {
      event.preventDefault();
      setTitle(event.target.getAttribute("value").toUpperCase())
      setBody(event.target.getAttribute("body"))
    }


    function getPosts() {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          dispatch(getData(json))
        })
        .then(dispatch(loading(false)))
    }

    function loadMore(event) {
      event.preventDefault();
      if(lastPost === 100) {
        setFirstPost(0)
        setLastPost(10)
      }else{
        setFirstPost(firstPost + 10)
        setLastPost(lastPost + 10)
      }
      
    }

      return ( 
        <>
        {isLoading ? <h3>Valuable info</h3> : ""}
        <Row>
        <Col md="5">
          {isLoading ? <img id='loader' src='data:image/
            png;base64,R0lGODlhgAAPAJEAAAAAALOzs////wAAACH/
            C05FVFNDQVBFMi4wAwEAAAAh+QQECgAAACwAAAAAgAAPAAACo4wfooK33NKKUtF3Z8RbN/
            55CEiNonMaJGp1bfiaMQvBtXzTpZuradUDZmY+opA3DK6KwaQTCbU9pVHc1LrDUrfarq76
            5Ya9u+VRzLyO12lwG10yy39zY11Jz9t/6jf5/
            HfXB8hGWKaHt6eYyDgo6BaH6CgJ+QhnmWWoiVnI6ddJmbkZGkgKujhplNpYafr5OooqGst
            66Uq7OpjbKmvbW/
            p7UAAAIfkEBAoAAAAsAAAAAAcADwAAAgiEj6nL7Q+jLAAh+QQECgAAACwLAAAABwAPAAAC
            CISPqcvtD6MsACH5BAQKAAAALBYAAAAHAA8AAAIIhI+py+0PoywAIfkEBAoAAAAsIQAAAA

            cADwAAAgiEj6nL7Q+jLAAh+QQECgAAACwsAAAABwAPAAACCISPqcvtD6MsACH5BAQKAAAA
            LDcAAAAHAA8AAAIIhI+py+0PoywAIfkEBAoAAAAsQgAAAAcADwAAAgiEj6nL7Q+jLAAh+Q
            QECgAAACxNAAAABwAPAAACCISPqcvtD6MsACH5BAQKAAAALFgAAAAHAA8AAAIIhI+py+0P
            oywAIfkEBAoAAAAsYwAAAAcADwAAAgiEj6nL7Q+jLAAh+QQECgAAACxuAAAABwAPAAACCI
            SPqcvtD6MsACH5BAQKAAAALG4AAAASAA8AAAIojB+iAu2AzmKvRTOrvVnftGgQF3qkIn5d
            pZbsSb3R+rSoObs1nPJaAQA7' alt='Loading...' /> : 
          <ListGroup className="mt-2" style={{fontSize:"12pt"}}>
          {posts.slice(firstPost,lastPost).map(post => (
            <ListGroup.Item style={{height:"75px"}}onClick={handleClick} body={post.body} value={post.title} key={post.id}>{post.title}</ListGroup.Item>
          ))}
          </ListGroup>}
        <div className="text-center mt-2 mb-2">
          <Button onClick={loadMore} variant="dark" type="load" active>
          LOAD MORE
          </Button>
        </div>
        </Col>
        <Col md="7">
          <h1>{title}</h1>
          <p className="mt-3">{body}</p>
        </Col>
        </Row>
          </> 
      );
    }