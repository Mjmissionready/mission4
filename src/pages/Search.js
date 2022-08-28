import { useState, useEffect } from 'react';
import Style from './Search.scss'
import styled from "styled-components";

const Head = styled.div`
padding-top: 100px;
`;

export default function Search() {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  const [tags, setTags] = useState();

  useEffect(() => {
    (async function run() {
      const data = await fetch('/api/tags').then(r => r.json());
      setTags(data.tags);
    })()
  }, []);

  const [activeTag, setActiveTag] = useState();
  const [images, setImages] = useState();

  useEffect(() => {
    (async function run() {
      if ( !activeTag ) return;
      const data = await fetch('/api/images', {
        method: 'POST',
        body: JSON.stringify({
          tag: activeTag
        })
      }).then(r => r.json());
      setImages(data.resources);
    })()
  }, [activeTag]);

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function(onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    }

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(event) {
    event.preventDefault();

    const data = await fetch('/api/upload', {
      method: 'POST',
      body: JSON.stringify({
        image: imageSrc
      })
    }).then(r => r.json());

    setUploadData(data);
  }

  return (
    <div className={Style.container}>
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Upload your image to Cloudinary!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={Style.main}>
        <h1 className={Style.title}>
          Image Uploader
        </h1>


        {Array.isArray(tags) && (
          <ul Style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            { tags.map(tag => {
              return (
                <li key={tag} Style={{ margin: '.5em' }}>
                  <button onClick={() => setActiveTag(tag)} Style={{
                    color: 'white',
                    backgroundColor: tag === activeTag ? 'blue' : 'blueviolet'
                  }}>
                    { tag }
                  </button>
                </li>
              )
            })}
          </ul>
        )}

        {Array.isArray(images) && (
          <ul Style={{
            display: 'grid',
            gridGap: '1em',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            { images.map(image => {
              return (
                <li key={image.asset_id} Style={{ margin: '1em' }}>
                  <img src={image.secure_url} width={image.width} height={image.height} alt="" />
                </li>
              )
            })}
          </ul>
        )}

        <p className={Style.description}>
          Upload your image to Cloudinary!
        </p>

        <form className={Style.form} method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
          <p>
            <input type="file" name="file" />
          </p>

          <img src={imageSrc} />

          {imageSrc && !uploadData && (
            <p>
              <button>Upload Files</button>
            </p>
          )}

          {uploadData && (
            <code><pre>{JSON.stringify(uploadData, null, 2)}</pre></code>
          )}
        </form>
      </main>
    </div>
  )
}