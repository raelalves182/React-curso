import React from 'react'
import { useParams } from 'react-router'
import { FOTO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';

const Photo = () => {
  const {id} = useParams();
  const {data, loading, error, request} = useFetch();

  React.useEffect(() => {
    const {url, options} = FOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo
