import React from 'react';
import { useState, useEffect, useCallback } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import TextInput from '../../components/TextInput';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(3);
  const [searchValue, setSearchValue] = useState('');

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    console.log(new Date().toLocaleString('pt-BR'));
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
      })
    : posts;

  return (
    <>
      <section className="container">
        <div className="search-container">
          {!!searchValue && (
            <>
              <h1>{searchValue}</h1>
              <p>
                <small> {`${filteredPosts.length} resultados econtrados`} </small>{' '}
              </p>
            </>
          )}

          <TextInput searchValue={searchValue} handleChange={handleSearch} />
        </div>
        <br />
        <br />
        <br />
        {filteredPosts.length > 0 ? <Posts posts={filteredPosts} /> : <p>Nao existem posts para mostar =(</p>}

        <div className="button-container">
          {!searchValue && <Button text="Load More Posts" onClick={loadMorePosts} disabled={noMorePosts} />}
        </div>
        {posts.length === 0 && <div> Loading... </div>}
      </section>
    </>
  );
};
export default Home;
